let currencies = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
}

function checkCashRegister(price, cash, cid) {
    let change = {
        status: "",
        change: []
    };
    let cidNums = cid.map(x => x[1])
    let total = cidNums.reduce((sum, element) => sum + element)

    // default action
    change.status = "INSUFFICIENT_FUNDS"

    // console.log(total)
    let rest = cash - price
    // console.log(rest)
    if (total < rest) {
        console.log(change)
        return change
    }

    let restCurr = {
        "ONE HUNDRED": 0,
        "TWENTY": 0,
        "TEN": 0,
        "FIVE": 0,
        "ONE": 0,
        "QUARTER": 0.0,
        "DIME": 0.0,
        "NICKEL": 0.0,
        "PENNY": 0.0
    }

    while (rest > 0) {
        let i = 8
        for (let key in currencies) {
            if (currencies[key] <= rest && cidNums[i] > 0) {
                cidNums[i] -= currencies[key]
                cidNums[i] = cidNums[i].toFixed(2)
                total -= currencies[key]
                total = total.toFixed(2)
                restCurr[key] += currencies[key]
                rest -= currencies[key]
                rest = rest.toFixed(2)
                //console.log(restCurr)
                break
            }
            i--
            if (i < 0 && rest > 0)
                return change
        }
    }

    //add final results
    if (total === "0.00") {
        change.status = "CLOSED"
        change.change = cid
    } else {
        change.status = "OPEN"
        for (let key in restCurr) {
            if (restCurr[key] > 0)
                change.change.push([key, parseFloat(restCurr[key].toFixed(2))])
        }
    }

    //console.log(restCurr)
    //console.log(total)
    console.log(change)

    return change
}


// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
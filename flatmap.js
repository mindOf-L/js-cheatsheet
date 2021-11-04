function steamrollArray(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] instanceof Array)
        newArr.push(...steamrollArray(arr[i]))
      else
        newArr.push(arr[i])
    }
    //console.log(newArr)
    return newArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
// REGEX REFERENCE

/*
    • Always between /.../
    • yes|no => any of that strings
    • /i => case insensitive
    • /g => match more than one item
    • . => any character => eg: /.an/ matches "ran", "can", "dan", "1an"
    • [...] => group inside
        => eg: /b[aeu]g/ matches "bag", "beg", "bug"
    • (...) => capturing group
        • \1 => numeric reference of the group (to not repeat explicitly)
            => eg: /(\w)a\1\s/g in "hah dad bad dab gag gab" returns ["hah", "dad", "gag"], cause \1 repeat the 1st group and the >>same finding<<
        • (?<name>ABC) => named group with "name" which captures ABC
    • - => range of chars
        => eg /[a-d]i/ matches "ai", "bi", "ci", "di"
    • ^ => (in a group) not include
        => eg: /[^xyz]/ matches "a foxy in the river" and returns "a fo in the river"
      • => (outside a group) the beginning of string
        => eg: /^Isamara/ matches "Isamara dance", but not "Where are Isamara?"
    • $ => the end of a string
    • + => 1+ characters => eg: /s+/ in "Mississipii" returns "ss"
        => eg: /s+/g in "Mississipii" returns "ss", "ss"
    • * => 0+ characters
    • ? => lazy match (1st ocurrence)
        => eg: /<.*?>/ matches "<h1>Winter</h1>" and returns ["<h1>", "</h1>"]
        => eg: /t[a-z]*?i/ matches "titanic" and returns "ti"
        => eg: /t[a-z]*?i/ matches "tntaic" and returns "tntai"
        => eg: (without lazy!) /b\w+/ matches "b be bee beer beers" and returns ["be", "bee", "beer", "beers"]
        => eg: (with lazy!) /b\w+?/ matches "b be bee beer beers" and returns ["be", "be", "be", "be"]
    • \w => word, ie => [A-Za-z0-9_]
    • \W => not a word, ie => [^A-Za-z0-9_]
    • \d => all digits, ie => [0-9]
    • \D => not digits, ie => [^0-9]
    • \s => whitespace
    • \S => non-whitespace
    • \t => tab
    • \n => new line
    • \r => carriage return
    • \m => multiline
    • \u => unicode, when the unicode flag is enabled, you can use extended unicode escapes in the form \x{FFFFF}
    • \s => dotall, dot (.) will match any character, including newline
    • {min,max} => (after a group) defines a range of group repetitions, both are optional
    • (?=...) => matches a group that match after the main expression without including if in the result
        => eg: \d(?=px) in "1pt 2px 3em 4px" returns ["2", "4"]
    • (?!...) => matches a group that can't match after the main expression without including if in the result
        => eg: \d(?!px) in "1pt 2px 3em 4px" returns ["1", "3"]
        => eg: \d(?!px) in "12px 34px" returns ["1", "3"]
    • (?<=...) => matches a group before the main expression without including it in the result
        => eg: /\w(?<=px)/g in "2px 4px" returns ["x", "x"]
        => eg: /\w{1,2}(?<=px)/g in "2px 4px" returns ["px", "px"]
        => eg: /\w{1,3}(?<=px)/g in "2px 4px" returns ["2px", "4px"]
    • (?<!...) => matches a group before the main expression without including it in the result
        => eg: /\d(?<!px)/g in "12px 34px" returns ["1", "2", "3", "4"]
        => eg: /\d+(?<!px)/g in "12px 34px" returns ["12", "34"]
    • other examples:
        => eg: \w+(?=[aeiou]) in "schwartz" returns "schw"
        => eg: \w+(?<=[aeiou]) in "schwartz" returns "schwa"
    • (in replace method)
        • $2 $1 alters the findings positions
        • $` inserts the portion of the source string that precedes the match
        • $' inserts the portion of the source string that follows the match

*/

let username = "JackOfAllTrades";
let userCheck = /^[A-Z]{2,}\d*$|^[A-Z]+\d{2,}$/i;
let result = userCheck.test(username);

let myString = "Eleanor Roosevelt";
let myRegex = /(\w*) Ro(\w*)/; 
let result = myRegex.test(myString); 
// function
// num1 num2 are paramaters

const add = (num1, num2)=>{
    return num1 + num2;




}
const minus = (num1, num2) => {
    return num1 - num2;
}
const callFunc = (foo) =>{
    return foo(1,1)

}
//another way to define a function
//expecting the user of my function to pass me a 
function wordCount(words){
    // if it is an empty string return 0
    if(words === ' '){
        return 0
    }
    let wordArray = words.split(" ");
    return wordArray.length
    // words is a string
    // now that i have a string how do I count the words in the string
 
}
// expecting this function to be given 
// a string of words separted by commas
// it should return the number words



//Old way of doing it (new way next week)
module.exports = {
    add,
    callFunc,
    minus,
    wordCount,
}
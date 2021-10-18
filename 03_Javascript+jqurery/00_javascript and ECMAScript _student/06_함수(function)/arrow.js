/* 
const simplePrint=function(){
    console.log('simple');
}
simplePrint();
 */

//arrow function es6
const simplePrint=() => console.log('simple');

simplePrint();

/* 
const add=function(a, b){
    return a+b;
}
 */
/* 
const add=(a, b) => {
    return a+b;
}
 */
const add=(a, b) => a+b;
console.log(add(2, 4));
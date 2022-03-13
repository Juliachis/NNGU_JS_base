// Функции

// function showMessage(){
//     console.log('hello');
// }

// showMessage();

// const user = 'Vasya';

// function greetUser(name){
//     console.log(`Привет, ${name}`);
// }

// greetUser(user);

// function calcValue(a,b){
//     return a+b;
// }

// const result = calcValue(3,5);

// console.log(result);

// const user = {
//     name: 'Vasya',
// }

// const greetMsg = 'Привет';

// function getName(user){
//     return user.name || 'гость'
// }

// function sayHi(text, name = getName()){
// console.log(`${text}, ${name}`);
// }

// sayHi(greetMsg, getName(user));

// практика //////////////////////////////
// #1
// const user = 'Vasya';
// function greetUser(name = 'гость'){
//         console.log(`Привет, ${name}`);
//     }
    
//     greetUser();


    //#2
// function toPower(num, pow = 1){
//     console.log(num**pow);
// }

// toPower(5,2);

// #3
// function calcAvSum (arr){
//     if(!arr.length){
// return 'пустой массив';
//     }
//     let sum = 0;
//     for(let i=0; i<arr.length;i++){
//         sum += arr[i];
//     }
//     console.log(sum/arr.length);
// }

// calcAvSum([]);

// arrow functions ////////////////////////////

// const calcValue = (a,b) => a+b;
// const result = calcValue(3,5);
// console.log(result);

// #1
// const myStr = "abc";
// function showString(str, n){
// for(let i=0; i<n; i++){
//     console.log(str);
// }
// }
// showString(myStr,5);

// const showString = (str,n) => {
//     for(let i=0; i<n; i++){
//             console.log(str);
//         }
// }

// console.log(showString(myStr,3));

// #2
let vowels = 'aeiouy';
const isVowel = (letter) => {
    (vowels.indexOf(letter) !== -1) ? console.log('true') : console.log(false);
}

isVowel('b');
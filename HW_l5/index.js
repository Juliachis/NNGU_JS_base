// #1
// function squareNum(num){
//     return num*num;
// }

// console.log(squareNum(5));

// #2
// function sumNums(num1,num2){
// return num1 + num2;
// }

// console.log(sumNums(3,5));

// #3
// function substrDivide(num1, num2, num3){
// return (num1-num2)/num3;
// }

// console.log(substrDivide(6,3,2));

// #4
// function dayOfWeek(day) {
//   switch (day) {
//     case 1:
//       return "Понедельник";
//       break;
//     case 2:
//       return "Вторник";
//       break;
//     case 3:
//       return "Среда";
//       break;
//     case 4:
//       return "Четверг";
//       break;
//     case 5:
//       return "Пятница";
//       break;
//     case 6:
//       return "Суббота";
//       break;
//     case 7:
//       return "Воскресенье";
//       break;
//     default:
//       return "Введите число от 1 до 7";
//   }
// }

// console.log(dayOfWeek(8));

// #5
// function isEqual(num1,num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'Вы ввели не число';
//     }
//     return num1 === num2;
// }

// console.log(isEqual(3,3));

// #6
// function ifSumMoreThanTen(num1,num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'Вы ввели не число';
//     }
//     return (num1+num2) > 10;
// }

// console.log(ifSumMoreThanTen("3",15));

// #7
// function isNegative(num) {
//   if (typeof num !== "number") {
//     return "Вы ввели не число";
//   }
//   return num < 0;
// }

// console.log(isNegative(3));

// #8
// function isNumberInRange(num){
//     if (typeof num !== "number") {
//             return "Вы ввели не число";
//           }
//     return num>0 && num<10;
// }

// console.log(isNumberInRange(3));

// // #9
// let myArr = [1,2,10,15,5];

// const sortArrByRange = (arr) =>{
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(isNumberInRange(arr[i]) === true){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(sortArrByRange(myArr));

// #10
// const getDigitsSum = (num) => {
//   let str = num.toString();
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += +str[i];
//   }
//   return sum;
// };

// console.log(getDigitsSum(1936));

// // #11
// const sumEqual13 = () => {
//   let result = [];
//   for (let i = 1; i <= 2020; i++) {
//     if (getDigitsSum(i) === 13) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(sumEqual13());

// #12
// const isEven = (num) => {
//   return num % 2 === 0;
// };

// console.log(isEven(-2));

// #13
// let myArr = [1, 3, 6, 9, 10, -2, -5];

// const sortArrByEven = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (isEven(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(sortArrByEven(myArr));

// #14
// const getDivisors = (num) => {
//   let result = [];
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(getDivisors(36));

// #15



// #16
const myStr = "abcabc";

const isPalindrom = (str) => {
  let strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  return str === strReverse;
};

console.log(isPalindrom(myStr));

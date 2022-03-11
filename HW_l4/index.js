// if-else

// #1
// let a = 3;
// (a === 0) ? console.log('Верно') : console.log('Неверно');

// #2
// if (a > 0) {
//     console.log('Верно');
// }else {
//     console.log('Неверно')
// }

// #3
// (a < 0) ? console.log('Верно') : console.log('Неверно');

// #4
// (a >= 0) ? console.log('Верно') : console.log('Неверно');

// #5
// (a <= 0) ? console.log('Верно') : console.log('Неверно');

// #6
// (a !== 0) ? console.log('Верно') : console.log('Неверно');

// #7
// (a === 'test') ? console.log('Верно') : console.log('Неверно');

// #8
// (a === '1') ? console.log('Верно') : console.log('Неверно');

// if-else boolean  /////////////////////////////////////////////////////////////
// #1
// let test = true;
// if (test === true) {
//     console.log('Верно');
// } else {console.log('Неверно')}

// (test === true) ? console.log('Верно') : console.log('Неверно');

// #2
// if (test !== true) {
//     console.log('Верно');
// } else {console.log('Неверно')}

// (test !== true) ? console.log('Верно') : console.log('Неверно');

// логические операторы   //////////////////////////////////////////////////////////////////
// #1
let a = 2;
// (a>0 && a<5) ? console.log('Верно') : console.log('Неверно');

// #2
// (a===0 || a===2) ? a += 7 : a /= 10;
// console.log(a);

// #3
let b = 7;
// (a <= 1 && b >= 3) ? console.log(a+b) : console.log(a-b);

// #4
// (a > 2 && a < 11) || (b >= 6 && b < 14)
//   ? console.log("Верно")
//   : console.log("Неверно");

// switch-case  /////////////////////////////////////////////////////////////////////////
// let num = "3";
// let result;
// switch (num) {
//   case "1":
//     result = "зима";
//     break;
//   case "2":
//     result = "весна";
//     break;
//   case "3":
//     result = "лето";
//     break;
//   case "4":
//       result = 'осень';
//       break;
// }
// console.log(result);

// задачи условный оператор   //////////////////////////////////////////////////////
// #1
// let day = 20;
// if (day >= 1 && day <= 10) {
//   console.log("Это первая декада");
// } else if (day >= 11 && day <= 20) {
//   console.log("Это вторая декада");
// } else if (day >= 21 && day <= 31) {
//   console.log("Это третья декада");
// }

// #2
// let month = 12;
// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Это зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Это весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Это лето");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Это осень");
//     break;
// }

// #3
// let str = "bcde";
// str[0] === "a" ? console.log("да") : console.log("нет");

// #4
// let myString = "52345";
// switch (myString[0]) {
//   case "1":
//   case "2":
//   case "3":
//     console.log("да");
//     break;
//   default:
//     console.log("нет");
// }

// #5-6
// let str = '123321';
// let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// (sum1 === sum2) ? console.log('да') : console.log('нет');

// циклы while & for   /////////////////////////////////////////////////////////////////////////
//#1
// let i=1;
// while(i<=100){
//     console.log(i);
//     i++;
// }

// for(let i=1; i<=100; i++){
//     console.log(i);
// }

// #2
// let i=11;
// while(i<=33){
//     console.log(i);
//     i++;
// }

// for(let i=11; i<=33; i++){
//     console.log(i);
// }

// #3
// let i=0;
// while(i<=100){
//     if(i%2 === 0){
//         console.log(i);
//     }
//     i++;
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// #4
// let i = 1;
// let sum = 0;
// while(i<=100){
//     sum += i;
//     i++;
// }

// for(let i=1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);

// циклы и массивы /////////////////////////////////////////////////////
// #1
// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   if ((arr[i] > 3) & (arr[i] < 10)) {
//     console.log(arr[i]);
//   }
// }

// #2
// let arr = [3, 2, -5, 8, -4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);

// #3
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log("есть");
//     break;
//   }
// }

// #4
// let arr = [10, 20, 30, 50, 235, 3000];
// let current;
// for(let i=0; i<arr.length; i++){
// current = arr[i].toString();
// if(current[0] === '1' || current[0] === '2' || current[0] === '5'){
//     console.log(arr[i]);
// }
// }

// #5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = "-";
// for (let i = 0; i < arr.length; i++) {
//   str += `${arr[i]}-`;
// }
// console.log(str);

// #6
// let week = [
//   "понедельник",
//   "вторник",
//   "среда",
//   "четверг",
//   "пятница",
//   "суббота",
//   "воскресенье",
// ];
// for (let i = 0; i < week.length; i++) {
//   if (week[i] === "суббота" || week[i] === "воскресенье") {
//     console.log("%c", "font-weight: bold", week[i]);
//   } else console.log(week[i]);
// }

// #8
let n = 1000;
for(let i=1; n>=50; i++){
    n /= 2;
    if(n<50){
        console.log(`получится число ${n}`);
        console.log(`количество итераций равно ${i}`);
        
    }
   
}
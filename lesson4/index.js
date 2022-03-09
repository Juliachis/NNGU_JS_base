// const myVar1 = 5;
// const myVar2 = 10;
// // условный оператор
// if (myVar1>myVar2){
// console.log(`${myVar1} больше ${myVar2}`);
// } else if (myVar1<myVar2) {
// console.log(`${myVar1} меньше ${myVar2}`);
// } else {
//     console.log('end');
// }
// // тернарный оператор
// let result = myVar1 > myVar2 ? console.log(true) : console.log(false);

// switch-case
// const userRole = 'admin';

// switch(userRole){
//     case 'student':
//         console.log('Текущий пользователь - student');
//         break;
//     case 'admin':
//         console.log('Текущий пользователь - admin');
//         break;
//         case 'normal_user':
//             console.log('Текущий пользователь - normal_user');
//             break;
//             default:
//                 console.log('Нет такого типа пользователя'); 
//                 break;

// }

// Логические операторы

// console.log(1 || 0);
// console.log(1 && 2 && 'строка' && 0 && 1);

//console.log(1 && 2 || 4 && 0); 

// const myVar = 5;
// if(myVar) {
//     console.log('true');
// }

// console.log(null || 0 || '' || undefined);
// console.log('яблоко' && true && null && 1);
// console.log(0 || true && 'false' || null);
//console.log(0 && true || '122' && null);
//console.log(!0 && !!1);
//console.log(!(null || !'123' && true));

// найти длину наибольшего отрезка
// const interval1 = 5;
// const interval2 = 8;
// const interval3 = 18;
// if (interval1 > interval2 && interval1 > interval3){
//     console.log(interval1);
// } else if (interval2 > interval1 && interval2 > interval3){
//     console.log(interval2);
// }else console.log(interval3);


//система рекомендаций для пользователя
// const currentTmp = 8;
// if(currentTmp < -30){
//     console.log('Оставайтесь дома');
// } else if (currentTmp >= -30 && currentTmp <= -10){
//     console.log('Сегодня холодно');
// } else if (currentTmp > -10 && currentTmp <= 5){
//     console.log('Не холодно');
// } else if (currentTmp > 5 && currentTmp <= 15){
//     console.log('Тепло');
// } else if (currentTmp >15 && currentTmp <= 25){
//     console.log('Очень тепло');
// } else if(currentTmp >25 && currentTmp < 35){
//     console.log('Жарко');
// } else {
//     console.log('Пекло');
// }

// циклы
// let myVar = 0;
// while(myVar >= 0 && myVar <= 10){
//     console.log(myVar+=1);
// }

//for
// let myVar = 10;
// for(let i=0; i <= myVar; i++){
//     if(i === 2) continue;
//     console.log(i);
//     if(i === 7) break;
// }

//Задача 1 вывести строку N раз
const myStr = 'blabla';
let iter = 0;
// while (iter <= 5){
//     console.log(myStr);
//     iter++;
// }

// do{
//     console.log(myStr);
//     iter++;
// }while(iter <= 5)

// for (let i=0; i<5; i++){
//     console.log(myStr);
// }

// Задача 2
let carsAmount = 60;
let minCarsAmount = 10;


for(let day = 1; carsAmount > minCarsAmount; day++){
    carsAmount /= 2;
    if(carsAmount<minCarsAmount){
        console.log(day);
        break;
    }
}


// Задача 3  Високосный год
const startYear = 1800;
const endYear = 2020;

let leapYearsAmount = 0;
const firstSpaceTripYear = 1961;

// for(let counter = startYear; counter <= endYear; counter++){
//     if(counter === firstSpaceTripYear){
//         console.log(`${firstSpaceTripYear} - первый полет в космос`);
//         console.log(`Количество итераций - ${counter - startYear}`);
//         break;
//     }
// }

for(let counter = startYear; counter <= endYear; counter++) {
   if(counter % 400 === 0 || counter % 4 === 0 && counter % 100 !== 0){
       
       leapYearsAmount += 1;
   } 
   if(counter === endYear){
       console.log(`Количество високосных лет - ${leapYearsAmount}`);
       console.log(`Количество итераций - ${counter - startYear}`);
   }
}
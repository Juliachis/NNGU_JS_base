// Практика из лекции - слайд №22

// Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и
// целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов
// переданного массива.

// let myArr = [1, 2, -3, -4, 4, 6, 7, -8];

// const countEvenNumSum = (arr) => {
//   const sortedArr = arr.filter((number) => number > 0 && number % 2 === 0);
//   return sortedArr.reduce((accum, current) => accum + current);
// };

// console.log(countEvenNumSum(myArr));

// Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения
// из переданного массива, в качестве результата возвращать новый массив с уникальными значениями
// из исходного.

// const myArr = [1, 2, 3, 6, 2, 4, 1, 5, 9, 3];

// const showUniqueNums = (arr) => {
//   let result = [];
//   arr.forEach((number) => {
//     if (arr.indexOf(number) === arr.lastIndexOf(number)) {
//       result.push(number);
//     }
//   });
//   return result;
// };

// console.log(showUniqueNums(myArr));

// Написать функцию  которая будет принимать два массива, и будет сравнивать их, если они идентичны
// (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

// const myArr1 = [1,2,3];
// const myArr2 = [1,3,3];

// const arrayCompare = (arr1,arr2) =>{
//     if (arr1.length !== arr2.length) return false;
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// }

// console.log(arrayCompare(myArr1,myArr2));


// #1 Используя метод map() напишите код, который получает из массива строк новый массив,
// содержащий их длины.

// let strArr = ["string", "abc", "html", "css"];

// const strToLength = (arr) => {
//   return arr.map((string) => string.length);
// };

// console.log(strToLength(strArr));

// #2 Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce()
// напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов,
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (arr) => {
//   let result = [];
//   let arrSum = arr.reduce((acc, item) => {
//     result.push(acc);
//     return acc + item;
//   });
//   result.push(arrSum);
//   return result;
// };

// console.log(currentSums(numbers));

// #3 Напишите код, который получает из массива чисел новый массив, содержащий пары чисел,
// которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7];

// const SumEqSeven = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 7) {
//         result.push(arr[i] + ":" + arr[j]);
//       }
//     }
//   }
//   return result;
// };

// console.log(SumEqSeven(numbers));

// #4 Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

// const myStr = "Это очень длинная строка из слов";

// const arrFirstLettters = (str) => {
//   return str.split(" ").map((word) => word[0]);
// };

// console.log(arrFirstLettters(myStr));

// #5 Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего,
// текущего и следующего символа строки str.

// const myStr = "string";

// const arrPrevNextLetters = (str) => {
//   let result = [str[0] + str[1]];
//   for (let i = 1; i < str.length; i++) {
//     let current = str.slice(i - 1, i + 2);
//     result.push(current);
//   }
//   return result;
// };

// console.log(arrPrevNextLetters(myStr));

// #6 Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно,
// в массив цифр расположенных по убыванию их значений.

// let myArr = [3, 2, 7, 4, 8, 1, 6];

// const descendingSort = (arr) => {
//   return arr.sort((a, b) => b - a);
// };
// console.log(descendingSort(myArr));

// #7 Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве,
// в порядке убывания их значений через пробел.

// const firstArr = [1, 2, 3];
// const secondArr = [4, 6, 9];
// const thirdArr = [5, 7, 11];

// const uniteAndSort = (arr1, arr2, arr3) => {
//   let mergedArr = [...arr1, ...arr2, ...arr3];
//   const sortedArr = mergedArr.sort((a, b) => b - a);
//   let result = [];
//   result.push(sortedArr.join(" "));
//   return result;
// };

// console.log(uniteAndSort(firstArr, secondArr, thirdArr));

// #8 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов
// этого массива. Массив, конечно же, может быть произвольным.

// const myArr = [[1, 2, 3], [4, 5], [6]];

// const arraySum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//   }
//   return sum;
// };

// console.log(arraySum(myArr));

// #9 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const myArr = [1, 2, 3, 4, 5];

// const reversedArr = (arr) => {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// };

// console.log(reversedArr(myArr));

// #10  Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти.

// const myArr = [1, 2, 3, 4, 5, 6];

// const sumMoreThanTen = (arr) => {
//   let numberElements = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > 10) {
//       numberElements += i + 1;
//       break;
//     }
//   }
//   return numberElements ? numberElements : "сумма элементов массива меньше 10";
// };

// console.log(sumMoreThanTen(myArr));

// #11 Напишите функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько
// элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (value, number) => {
//   let result = [];
//   for (let i = 0; i < number; i++) {
//     result.push(value);
//   }
//   return result;
// };

// console.log(arrayFill("x", 5));

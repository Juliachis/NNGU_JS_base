// #1 Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// const myString = "I love JS";

// const stringToArray = (str) => {
//   return str.split(" ");
// };

// console.log(stringToArray(myString));

// #2 Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const myString = "I love JS";

// const deleteСharacters = (str, length) => {
//   if (length < str.length) {
//     return str.slice(0, length);
//   }
//   return `Длина должна быть меньше ${str.length}!`;
// };

// console.log(deleteСharacters(myString, 10));

// #3 Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const myString = "I learn CSS, HTML and JS";

// const insertDash = (str) => {
//   return str.toUpperCase().split(" ").join("-");
// };

// console.log(insertDash(myString));

// #4 Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const myString = "javascript";

// const firstCapital = (str) => {
//   return str[0].toUpperCase() + str.slice(1);
// };

// console.log(firstCapital(myString));

// #5  Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// const myString = "I learn css, html and js";

// const capitalize = (str) => {
//   let result = str.split(" ").map((el) => {
//     return el[0].toUpperCase() + el.slice(1);
//   });
//   return result.join(" ");
// };

// console.log(capitalize(myString));

// #6  Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const myString = "КаЖдЫй ОхОтНиК";

// const changeRegister = (str) => {
//   let result = str.split("").map((el) => {
//     return el.toLowerCase() === el ? el.toUpperCase() : el.toLowerCase();
//   });
//   return result.join("");
// };

// console.log(changeRegister(myString));

// #7 Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const myString = 'al Kalg 124 &?/+alefh';

// const removeChar = (str) =>{
//     const lettersAndNums = 'abcdefghijklmnopqrstuvwxyz 1234567890';
//     let result = str.split('').filter(el =>{
//         return lettersAndNums.includes(el.toLowerCase());
//     });
//     return result.join('');
// }
// console.log(removeChar(myString));

// #8 Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// const zeros = (num, len, sign) => {
//   let numZeros = len - num.toString().length;
//   let zeroStr = "0".repeat(numZeros);
//   return sign === undefined || sign === ""
//     ? zeroStr + num
//     : sign + zeroStr + num;
// };

// console.log(zeros(11, 5, '-'));

// #9 Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const myStr1 = "СтроКа";
// const myStr2 = "строкаа";

// const comparison = (str1, str2) => {
//   if (str1.toLowerCase() === str2.toLowerCase()) {
//     return "Строки равны";
//   } else if (str1.toLowerCase() > str2.toLowerCase()) {
//     return "Первая строка больше второй";
//   }
//   return "Вторая строка больше первой";
// };

// console.log(comparison(myStr1, myStr2));

// #10 Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const myStr1 = "слово в предложении";
// const myStr2 = "Пред";

// const insensitiveSearch = (str1, str2) => {
//   if (str1.toLowerCase().includes(str2.toLowerCase())) {
//     return `Подстрока "${str2}" есть в строке "${str1}"`;
//   }
//   return `Подстроки "${str2}" нет в строке "${str1}"`;
// };

// console.log(insensitiveSearch(myStr1, myStr2));

// #11 Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const myString = 'here is caMelize fuNction';

// const initCap = (str) =>{
//     let result = str.toLowerCase().split(' ').map(el =>{
//         return el[0].toUpperCase() + el.slice(1);
//     });
//     return result.join('');
// }

// console.log(initCap(myString));

// #12 Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// const initSnake = (str) =>{
//     const modifiedStr = str.replace(/[A-ZА-ЯЁ]/g, (letter) => '_' + letter.toLowerCase);
//     return modifiedStr.slice(1);
// }


// #13 Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
// const myString = "строка";

// const repeatStr = (str, n) => {
//   return str.repeat(n);
// };

// console.log(repeatStr(myString, 3));

// #14 Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// const myString = "computer\\documents\\JS\\index.html";

// const path = (pathname) => {
//   return pathname.slice(pathname.lastIndexOf("\\") + 1);
// };

// console.log(path(myString));

// #15 Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// const myString = "Это строка из слов";
// const substr1 = "слов";
// const substr2 = "строка";

// const endsWith = (str, str1) => {
//   return str.slice(str.length - str1.length) === str1
//     ? `Строка '${str}' заканчивается подстрокой '${str1}'`
//     : `Строка '${str}' не заканчивается подстрокой '${str1}'`;
// };

// console.log(endsWith(myString,substr2));

// #16  Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// const myString = "Это строка из слов";

// const getSubstr = (str, char, pos) => {
//   if (pos === "before") {
//     return str.slice(0, str.indexOf(char));
//   } else if (pos === "after") {
//     return str.slice(str.indexOf(char) + 1);
//   }
// };

// console.log(getSubstr(myString, "с", "before"));

// #17 Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// const myString = 'Добавить в строку';
// const mySubstr = 'текст ';

// const insert = (str, substr, pos) =>{
//     if(pos === undefined){
// return substr + str;
//     }
//     return str.slice(0, pos) + substr + str.slice(pos);
// }

// console.log(insert(myString, mySubstr, 9));

// #18 Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// const myString = "I learn JS";

// const limitStr = (str, n, symb) => {
//   if (str.length > n) {
//     return symb === undefined || symb === ""
//       ? str.slice(0, n-3) + "..."
//       : str.slice(0, n-symb.length) + symb;
//   }
//   return str;
// };

// console.log(limitStr(myString, 8, '!'));

// #19 Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const myString = "abcabcaa";

// const count = (str, stringsearch) => {
//   let result = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === stringsearch) {
//       result += 1;
//     }
//   }
//   return result;
// };

// console.log(count(myString, "d"));

// #20 Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// const myString = '  строка  с       пробелами ';

// const strip = (str) =>{
// return str.trim().replace(/\s+/g,' ' )
// }

// console.log(strip(myString));

// #21 Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// const myString = "This is a very long text string";

// const cutString = (str, n) => {
//   let arrFromStr = str.split(" ");
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += ` ${arrFromStr[i]}`;
//   }
//   return result.trim();
// };

// console.log(cutString(myString, 4));

// #22 Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

const myString = 'поиск слова в строке';

const findWord = (word, str) =>{
   let arrFromStr = str.split(' ');
   for(let i=0;i<arrFromStr.length;i++){
       if(arrFromStr[i] === word){
           return true;
       }
   }
    return false;
}

console.log(findWord('слов', myString));
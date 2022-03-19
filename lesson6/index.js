// Примитивы и объекты

// const goToThePlace = (place) =>{
//     console.log(`Иду в ${place}!`)
// }

// const user = {
//     name: 'Ivan',

//     age: 18,
//     goToUniversity: () => goToThePlace('универ')
// }

// user.goToUniversity();

// const nameKey = "name";

// const user = {
//   name: "Ivan",
//   age: 18,
// };

// user.name = "Petya";

// delete user.age;

// console.log(user);

// const myFavoriteFilm = {
//   name: "Wasabi",
//   year: 2001,
//   director: "Gérard Krawczyk",
//   originCountry: "France",
// };

// myFavoriteFilm.boxOffice = 81.5;

// myFavoriteFilm.showName = () => {
//     console.log(myFavoriteFilm.name);
//   };

//   delete myFavoriteFilm.year;

//   myFavoriteFilm.showName();
// console.log(myFavoriteFilm);

// const myNumber = 10.123123;

// console.log(myNumber.toFixed(2));

// const myNumber = 23e4;

// console.log(myNumber);

// parseInt - для целых чисел
// parseFloat - для дробных чисел

// console.log(parseInt('123',16));

// const myNumber = 123.3;

// if(typeof myNumber === 'number') console.log('Число');
// if(!isNaN(myNumber)) console.log('Число');

// console.log(isFinite(10/0));

// console.log(Math.ceil(myNumber));
// console.log(Math.floor(myNumber));

// console.log(Math.random());

// const myArray = [1,4,10,20,14,15];

// console.log(Math.max(...myArray));

// const myString = "Вася вошел в класс и сказал \"привет всем\"";
// console.log(myString);

// const myName = ' Vasya';
// console.log(myName.trim());

// const myString = 'Widget with id';

// console.log(myString.indexOf('id'));

// Practice #1
// const randomOfRange = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };

// console.log(randomOfRange(3, 6));

// Practice #2
// const myStr = 'Строка';

// const isCharUpperCase = (str,n) =>{
//     if(!str[n]){
//         return 'ошибка';
//     }
//     return str[n].toUpperCase() === str[n];
// }

// console.log(isCharUpperCase(myStr,1));

// Practice #3
// const myConst = 'aiai df tg word akjdf word aks';

// const replaceFunc = (str, findValue, replaceValue) =>{
//     return str.replaceAll(findValue, replaceValue);
// }

// console.log(replaceFunc(myConst, 'word', '!WORD'));

const replaceAll = (str, subStr, replaceStr) => {
    for (let i = 0; i < str.length; i++) {
        let foundIndex = str.indexOf(subStr);
        if (foundIndex === -1) return str;
        str =
            str.slice(0, foundIndex) +
            replaceStr +
            str.slice(foundIndex + subStr.length);
    }
    return str;
};

console.log(replaceAll("widget for id", "id", "xxx"));
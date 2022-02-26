// типы данных

// Number
//console.log(typeof NaN);

//String

// const myString = "сторока";

// const anotherString = "текст \"текст\" текст";

// const templateString = `шаблонная строка ${anotherString}`;
//console.log(templateString);

// Boolean

const isAdmin = true;
const isUser = false;

//Null
const emptyVariable = null;

//undefined
//const userName;
//console.log(userName);

//Непримитивные типы
// Object

const someName = 'Petya';
const user = {
    name: someName,
    lastName: 'Ivanov',
    age: 23,
citizenship: 'Russia',
};

//console.log(user.name);

// оператор typeof

console.log(typeof null); // !!!!!


// преобразование типов

// строки
// const myVar = 123;

// const myVarToString = String(myVar);
// console.log(typeof myVarToString);

//численное преобразование 
// const myVar = 'aoe123';

// const myVarToNumber = +myVar;

// console.log(myVarToNumber);

// логическое преоюразование 
// const myVar = 1;

// console.log(!!myVar);


// Математические операторы
// Бинарный плюс

// const myNumber = 1;
// const newNumber = 2;
// const myString = 'строка';

// console.log(myNumber + myString);

// сравнение строк
const string1 = 'строка';
const string2 = 'солнце';
console.log(string1 == string2);

const userTypes = {
    admin: 'admin',
    user: 'user',
    teacher: 'teacher',
    contentManager: 'contentManager',
};

// const serverDataUserType = 'user';
//  if(serverDataUserType === userTypes.admin){
//      console.log('показать весь контент');
//  }else {
//      console.log('показать огарниченный контент')
//  }


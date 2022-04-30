// try catch

// const myObj = "has error";

// const myObjJson = `{"name":"Vasya","surname":"Ivanov","age":20}`;

// JSON stringify
// console.log(JSON.stringify(myObj));

// JSON parse
// console.log(JSON.parse(myObjJson));

// копирование объекта
// const newObj = JSON.parse(JSON.stringify(myObj));

// try {
//     const parsedStr = JSON.parse(myObj);
//     console.log(parsedStr)
// } catch(e){
//     throw new Error('Ошибка в блоке Try!')
// } finally {
//     console.log('выполнится в любом случае')
// }

// работа с открытыми API
// https://httpstat.us/
// "https://jsonplaceholder.typicode.com/users";

// запросы на сервер
// XHR

// методы запросов

// цикл CRUD - create/read/update/delete
// GET - получение данных
// POST - создание данных
// PUT - изменение данных
// DELETE - удаление данных

// const fetchURL = "https://jsonplaceholder.typicode.com/users";

// const xhr = new XMLHttpRequest();

// xhr.open('GET', URL);

// xhr.send();

// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response))
// }

// Fetch

// const sendRequest = function(url){
// fetch(url).then(response => console.log(response.json()))
// .then(res => console.log(res))
// .catch(e => console.error(e))
// .finally(() => console.log('выполнится в любом случае'))
// }

// const sendRequest = async (url, fetchParams = {}) => {
//     const response = await fetch(url, fetchParams);
//     result = await response.json();
  
//     return result;
//   };
  
//   const user = { name: "Vasya", surname: "Ivanov" };
  
//   const fetchParams = {
//     method: "POST",
//     body: JSON.stringify(user),
//     header: { "Content-Type": "application/json" },
//   };
  
//   sendRequest(fetchURL, fetchParams).then((res) => console.log(res));
  
//   sendRequest(`${fetchURL}/1`).then((res) => console.log(res));


// MAP

// const myObj = { name: "Vasya", surname: "Ivanov" };

// const myObjToArray = [['name', 'Vasya'], ['surname', 'Ivanov']];

// console.log(Object.entries(myObj));
// console.log(Object.fromEntries(myObjToArray));

// const map = new Map(Object.entries(myObj));

// map.set('newKey', 'newValue');
// console.log(map.get('newKey'));
// console.log(map.has('sur'));
// map.clear();
// console.log(map.size);

// console.log(map);
// map.set({someField:'123'}, 'fieldValue');
// console.log(map);

// for(let [key,value] of map){
//     console.log(key, value)
// }

// SET

// const myArray = [1,2,3,4,5,5,5,6,10,12];

// const set = new Set(myArray);
// console.log([...set]);

// const getUniqueValues = (arr) =>{
//     return [...new Set(arr)]
// }

// console.log(getUniqueValues(myArray));

// Event loop

console.log('hello1');
console.log('hello2');

setTimeout(() => console.log('timeout'), 2000);

const promise = new Promise(() =>{
    console.log('promise resolved');
});
promise.then();

console.log('hello3');
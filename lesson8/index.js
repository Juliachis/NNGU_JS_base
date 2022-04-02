// провдинутая работа с функциями

// const myObject = {
//   name: "Vasya",
//   callName: function () {
//     console.log(this.name);
//   },
// };

// myObject.callName();

// const newObject = {
//     name: 'Petya',
//     obj: myObject,
// }

// const myCity = {
//   name: "Novosibirsk",
//   population: 1620162,
//   showName: function () {
//     return this.name;
//   },
//   showPopulation: function () {
//     return this.population;
//   },
//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };

// myCity.changeKeyValue("population", 20000);

// console.log(myCity);

// const myObject = {
//       name: "Vasya",
//       callName: function () {
//         console.log(this.name);
//       },
//     };

//     const newObject = {
//         name: 'Petya',
//     };

//     myObject.callName.call(newObject)

// const myCity = {
//   name: "Novosibirsk",
//   population: 1620162,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation: function () {
//     console.log(this.population);
//   },
//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };

// const newCity = {
//   name: "Moscow",
//   population: 10000000,
// };

// myCity.showName.call(newCity);

// myCity.changeKeyValue.bind(newCity, "name", "London")();
// console.log(newCity);

// Замыкание

// const myFunc = () => {
//   const myVar = 5;

//   return (param) => {
//     console.log(myVar + param);
//   };
// };

// myFunc()(10);

// Каррирование

// const myFunc = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(myFunc(2)(3)(10));

// Используя замыкание написать функцию которая будет вычислять объём параллелепипеда с высотой 10.

// const volume = () =>{
//     const height = 10;
//     return (len, width) =>{
//         console.log(height*len*width)
//     }
// }

// volume()(15,5);

// Используя каррирование написать функцию которая будет вычислять объём параллелепипеда.

const volume = (height) =>{
    return (len) =>{
        return (width) =>{
            return len*width*height
        }
    }
}

console.log(volume(5)(2)(3))
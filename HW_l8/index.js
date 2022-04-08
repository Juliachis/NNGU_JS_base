// #1 Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// const timer = (start, end) =>{
//     start--;
//     if(start>end){
//         console.log(start);
//         setTimeout(()=> timer(start,end), 1000);
//     }else{
//         console.log(`Работа таймера завершена на ${start} сек`)
//     }
// }
// timer(60,50);

// #2 Что выведет функция?
// должна выводить null, так как фиксировали контекст, но выводит глобальный объект window

// function f() {
//     console.log(this);
//    }

//    let user = {
//     g: f.bind(null),
//    };

//    user.g();

// #3  Можем ли мы изменить this дополнительным связыванием?

//    function f() {
//     console.log(this.name);
//    }

//    f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

//    f();   // Вася
// при первом вызове bind контекст был установлен, изменить его нельзя

// #4 В свойство функции записано значение. Изменится ли оно после применения bind?

// function sayHi() {
//   console.log(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });

// console.log(bound.test); // undefined
// bound это новый объект, свойства test он уже не имеет

// #5 Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//    }

//    let user = {
//     name: 'Вася',

//     loginOk() {
//       alert(`${this.name} logged in`);
//     },

//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },

//    };

//    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//    askPassword(user.loginOk, user.loginFail);
// должна быть ошибка, так как при таком вызове контекст не привязан к функциям и this.name будет undefined. Но при вызове alert все равно показывает без name

// #6  Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// #7  Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value.

// var elem = {value: 'Привет'}

// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }

// let newFunc = func.bind(elem)
// //Тут напишите конструкцию с bind()

// newFunc('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// newFunc('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'


// #8 Есть функция которая складывает три числа.Выполните каррирование.
// const sum = (a, b, c) => a + b + c

// const sum = (a) =>{
//    return (b) =>{
//       return (c) =>{
//          return a+b+c
//       }
//    }
// }

// Прототипы и классы

// const user = {
//     name: 'Vasya',
//     age: 20,
// }

// // console.log(user);

// const str = new String('строка');

// console.log(str)

// const user = new Object({
//   name: "Vasya",
//   age: 20,
// });

// const user2 = {
//   name: "Petya",
//   age: 30,
// };

// Object.prototype.sayHi = function () {
//   console.log(`Привет, ${this.name}`);
// };

// user.sayHi();
// user2.sayHi();

// const animal = {
//   jumps: "Прыжок!",
// };

// const rabbit = {
//   __proto__: animal,
//   jumps: 'Заяц прыгнул!'
// };

// delete rabbit.jumps;
// console.log(rabbit.jumps)

// Object.prototype.sayHi = function(){
//     console.log(`Hello, I am robot ${this.model}`);
// };

// const robot = {
//     model: 'R2D2',
//     created: 2150,
//     move: function(){
//         console.log(`${this.model} just moved!`);
//     }
// };

// const terminator = {
//     model: 'T-800',
//     sayHi: function(){
//         console.log('I will be back')
//     }
// };

// Object.setPrototypeOf(terminator, robot);

// console.log(robot);
// console.log(terminator);

// terminator.move()

// Функции-конструкторы

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
// }

// CreateUser.prototype.showName = function (){
//     console.log(this.name);
// }

// CreateUser.prototype.showAge = function (){
//     console.log(this.age);
// }

// const userVasya = new CreateUser('Vasya', 20);
// const userPetya = new CreateUser('Petya', 25);

// console.log(userVasya);
// console.log(userPetya);

// userVasya.showName();

// function CreateCard(from, to){
//     this.from = from;
//     this.to = to;
//     this.show = function (){
//         console.log(`От ${this.from} для ${this.to}`);
//     }
// }

// CreateCard.prototype.changeSender = function (newSender){
// this.from = newSender;
// }

// const newCard = new CreateCard('Vasya', 'Alex');
// console.log(newCard);

// newCard.show();
// newCard.changeSender('Petya');
// console.log(newCard);

// Классы

// class Animal {
//     constructor(props){
//         this.name = props.name;
//         this.age = props.age;
//         this.hasTail = props.hasTail;
//     }

//     voice(){
//         console.log('I am animal');
//     }
// }

// const myAnimal = new Animal({name: 'Animal', age: 5, hasTail: true}); // myAnimal - инстанс

// // console.log(myAnimal);

// class Cat extends Animal {
//     constructor(props){
//         super(props);
//         this.color = props.color;
//     }
// }

// const myCat = new Cat({name: 'Cat', age: 8, hasTail: true, color: 'blue'});
// console.log(myCat)

// class Animal {
//   #name = "";

//   static type = "ANIMAL";

//   constructor(props) {
//     this.#name = props.name;
//     this.age = props.age;
//     this.hasTail = props.hasTail;
//   }

//   voice() {
//     console.log("I am animal");
//   }

//   get getName() {
//     console.log(this.#name);
//   }

//   set setName(newName) {
//     this.#name = newName;
//   }
// }

// const myAnimal = new Animal({ name: "Animal", age: 5, hasTail: true }); // myAnimal - инстанс

// class Cat extends Animal {
//   constructor(props) {
//     super(props);
//     this.color = props.color;
//   }
//   voice() {
//     console.log("I am cat");
//   }
// }

// const myCat = new Cat({ name: "Cat", age: 8, hasTail: true, color: "blue" });

// myCat.getName;
// myCat.setName = "Dog";

// console.log(myCat);

// class People {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//   }
//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// class Worker extends People {
//   constructor(props) {
//     super(props);
//     this.rate = props.rate;
//     this.day = props.day;
//   }

//   getSalary() {
//     const salary = this.rate * this.day;
//     console.log(salary);
//   }
// }

// const newWorker = new Worker({
//   name: "Ivan",
//   surname: "Ivanov",
//   rate: 1000,
//   day: 15,
// });

// console.log(newWorker);

// newWorker.getFullName();
// newWorker.getSalary();

// Работа с DOM-деревом
class Component {
    constructor(selector){
        this.$el = document.querySelector(selector);
    }

    hide(){
        this.$el.style.display = 'none';
    }

    show(){
        this.$el.style.display = 'block';
    }
}

class Box extends Component {
    constructor(options){
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
});

const box2 = new Box({
    selector: '#box2',
    size: 80,
    color: 'blue'
});

class Circle extends Box {
    constructor(options){
        super(options);

        this.$el.style.borderRadius = '50%';
    }
}

const myCirlce = new Circle({
    selector: '#circle',
size: 70,
color: 'green'
})
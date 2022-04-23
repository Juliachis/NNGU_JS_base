// #1 Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//     this.rate = props.rate;
//     this.days = props.days;
//   }

//   getSalary() {
//     console.log(this.rate * this.days);
//   }

//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// const newWorker = new Worker({
//   name: "Ivan",
//   surname: "Ivanov",
//   rate: 1000,
//   days: 15,
// });

// console.log(newWorker);

// newWorker.getFullName();
// newWorker.getSalary();

// #2 Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// class Boss extends Worker {
//   constructor(props) {
//     super(props);
//     this.workers = props.workers;
//   }

//   getSalary() {
//     console.log(this.rate * this.days * this.workers);
//   }
// }

// const bigBoss = new Boss({
//   name: "Peter",
//   surname: "Petrov",
//   rate: 1000,
//   days: 10,
//   workers: 3,
// });

// bigBoss.getSalary();
// bigBoss.getFullName();

// #3 Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

// #4 Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// class Worker {
//   #name = "";
//   #surname = "";
//   #rate = "";
//   #days = "";
//   constructor(props) {
//     this.#name = props.name;
//     this.#surname = props.surname;
//     this.#rate = props.rate;
//     this.#days = props.days;
//   }

//   set setRate(newRate) {
//     this.#rate = newRate;
//   }

//   set setDays(newDays) {
//     this.#days = newDays;
//   }

//   get getSalary() {
//     console.log(this.#rate * this.#days);
//   }

//   get getFullName() {
//     console.log(`${this.#name} ${this.#surname}`);
//   }
// }

// const newWorker = new Worker({
//   name: "Ivan",
//   surname: "Ivanov",
//   rate: 1000,
//   days: 15,
// });

// newWorker.getFullName;
// newWorker.getSalary;
// newWorker.setDays = 10;
// newWorker.setRate = 2000;
// newWorker.getSalary;

// #5 Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//   reverse(str) {
//     console.log(str.split("").reverse().join(""));
//   }

//   ucFirst(str) {
//     const result = str[0].toUpperCase() + str.slice(1);
//     console.log(result);
//   }

//   ucWords(str) {
//     const result = str.split(" ").map((el) => {
//       return el[0].toUpperCase() + el.slice(1);
//     });
//     console.log(result.join(" "));
//   }
// }

// const str = new MyString();
// str.reverse('string');
// str.ucFirst('string');
// str.ucWords('string string')


//#6 Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

class Validator {
  isEmail(str){
    const email = str.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i);
    console.log(!(email === null))
  }

  isDomain(str){
    
  }

  isDate(str){
// const date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);

const arr = str.split('.');
console.log((+arr[0] > 0 && +arr[0] <= 31) && (+arr[1] > 0 && +arr[1] <=12) && (+arr[2] >= 1900 && +arr[2] <= 2022))
  }

  isPhone(str){
    // /^\d[\d\(\)\ -]{4,14}\d$/
    const phone = str.match(/^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/);
    console.log(!(phone === null))
  }
}

const testValid = new Validator();

testValid.isEmail('_%test@yahkgkf.ru');
testValid.isDate('22.02.2022');
testValid.isPhone('8 (999) 123-32-21')

// #7 Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

// class User {
//   constructor(props){
//     this.name = props.name;
//     this.surname = props.surname;
//   }
//   getFullName(){
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// class Student extends User {
//   constructor(props){
//     super(props);
//     this.year = props.year;
//   }
//   getCourse(){
//     const currentYear = new Date().getFullYear();
//     console.log(currentYear - this.year)
//   }
// }

// const studentIvan = new Student({
//   name: 'Ivan',
//   surname: 'Ivanov',
//   year: 2020,
// });

// studentIvan.getFullName();
// studentIvan.getCourse();
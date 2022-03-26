// Массивы и объекты

// const myArr = [1, () => console.log('123'), 'string'];

// console.log(myArr);
// console.log(Array.isArray(myArr));

// const newArray = new Array(5);
// console.log(newArray)

// const user = {
//     id: 1,
//     name: 'Vasya',
//     data: [1,2,3,4],
// };

// const users = [
//     {id: 1, name: 'Vasya'},
//     {id: 2, name: 'Petya'},
//     {id: 3, name: 'Lena'},
//     {id: 4, name: 'Olga'}
// ];

// Многомерные массивы

// const myArr = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// console.log(myArr[0][1]);

// const myArr = [1,2,3,4,5];

// myArr[1000] = 10;

// console.log(myArr);

// const myArr = ['один', 'два', 'три', 'четыре', 'пять'];
// myArr.push('шесть');
// myArr.unshift('ноль');
// myArr.shift();
// myArr.pop();

// const myArr = [1,2,3,4];

// console.log(myArr.includes(1));

// полезные методы

// find

// const myArr = ['один', 'два', 'три', 'четыре'];

// const foundItem = myArr.find(elem => elem === 'два');

// console.log(foundItem);

// const users = [
//         {id: 1, name: 'Vasya'},
//         {id: 2, name: 'Petya'},
//         {id: 3, name: 'Lena'},
//         {id: 4, name: 'Olga'}
//     ];

//     const foundItem = users.find(user => {
//         //console.log(user);
//         return user.id === 1;
//     });

//     console.log(foundItem);

// filter
// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Petya", isAdmin: false },
//   { id: 3, name: "Lena", isAdmin: true },
//   { id: 4, name: "Olga", isAdmin: false },
// ];

// const notAdminUsers = users.filter((user) => !user.isAdmin);

// console.log(notAdminUsers);


// map

// const users = [
//       { id: 1, name: "Vasya", isAdmin: false },
//       { id: 2, name: "Petya", isAdmin: false },
//       { id: 3, name: "Lena", isAdmin: true },
//       { id: 4, name: "Olga", isAdmin: false },
//     ];

//     const modifiedUsers = users.map(user => {
//         return {iD: user.id, userName: user.name};
//     });

//     console.log(modifiedUsers);

    // forEach

    const users = [
        { id: 1, name: "Vasya", isAdmin: false },
        { id: 2, name: "Petya", isAdmin: false },
        { id: 3, name: "Lena", isAdmin: true },
        { id: 4, name: "Olga", isAdmin: false },
      ];
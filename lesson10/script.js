// DOM

//console.log(document.head)

// const block2 = document.querySelector('.block-2');

// const block2 = document.querySelector('div');

// console.log(block2.parentElement);
// console.log(block2.previousElementSibling); // предыдущий элемент на том же уровне

// console.log(block2.nextElementSibling); // следующий элемент на том же уровне
// console.log(block2.firstElementChild); // первый дочерний элемент


// Поиск элементов в DOM

//document.getElementById('block-1')

// console.log(document.getElementsByTagName('div'))

// console.log(document.querySelectorAll('div'))

// const link = document.querySelector('a');
// const input = document.querySelector('input');

// console.log(input);

// console.log(document.body.innerHTML);

// console.log(document.body.innerText);

// const block1 = document.querySelector("#block-1");
// console.log(block1.outerHTML)

// Работа со стилями
// const block1 = document.querySelector('#block-1');
// block1.classList.add('block')
// block1.style.backgroundColor = 'grey';

// console.log(block1.classList);

// Создание элемента

// const header = document.createElement('header');
// header.className = 'page-header';
// header.style.background = 'yellow';
// header.style.height = '60px';
// header.style.display = 'flex';
// header.style.justifyContent = 'center';

// header.innerHTML = 'Это шапка сайта';
// document.body.prepend(header);


const header = document.createElement('header');
header.style.background = 'yellow';
header.style.height = '60px';
header.innerHTML = 'Это шапка сайта';
document.body.prepend(header);

const container = document.createElement('section');
container.style.background = 'grey';
container.style.padding = '10px';
container.style.height = '500px';

header.after(container);



const input = document.createElement('input');
input.style.marginRight = '10px';
// input.addEventListener('input', (event) => console.log(event.currentTarget.value))

container.prepend(input);

const button = document.createElement('button');
button.innerHTML = 'Add ToDo';
// button.onclick = () => console.log('clicked');

button.addEventListener('click', handleToDoAdd)
input.after(button);

const newUl = document.createElement('ul');

button.after(newUl);

for(let i=1; i<=5; i++){
    const newLi = document.createElement('li');
    newLi.classNme = 'todos-list_item';
    newLi.innerText = `Пункт ${i}`;
    newUl.append(newLi);
}

function handleToDoAdd(){
    const currentInputValue = input.value;
const todoListLength = document.querySelectorAll('li').length;
const newLi = document.createElement('li');
newLi.innerText = `${currentInputValue} ${todoListLength + 1}`;
newUl.append(newLi)
}

// const a = document.querySelector('a');
// a.innerText = 'ссылка';
// a.addEventListener('click', (event) =>{
// event.preventDefault();
// })
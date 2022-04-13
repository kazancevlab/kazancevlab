let box = document.getElementById('box')

console.log(box)

//Тут попросту вызываем элемент по id

let btns = document.getElementsByTagName('button')
console.log(btns[1]) //Тут мы получили нужный элемент по названию тега. По сути будем менять все кнопки, которые в теге button
// С помощью индекса мы достаем нужную нам кнопку

let circles = document.getElementsByClassName('circle')
console.log(circles)
// Тут мы просто вытаскиваем элемент по названию класса
let hearts = document.querySelectorAll('.heart')
console.log(hearts)

hearts.forEach(item =>{
    console.log(item)
}) //Тут при помощи callback функции мы выводим все элементы по тегу hearts

let oneHearts = document.querySelector('.heart')
console.log(oneHearts)// С помощью querySelector получаем первый элемент из списка


// console.log(document.body)
// console.log(document.head)
// console.log(document.documentElement)
// // console.log(document.body.childNodes) // Позволяет получить узлы, которые являются "детьми body"
// console.log(document.body.firstChild) //Получаем первый элемент родителя
// console.log(document.body.lastChild) // Получаем после

console.log(document.querySelector('#current').parentNode)// С помощью данной команды получаем родителя элемента. Если еще раз введем через точку parentNode, получим родителя выше уровнем

console.log(document.querySelector('[data-current="3"]').nextElementSibling)
// Тут мы получаем наш элемент с пометкой data. Как я понял data это что типо якоря или id
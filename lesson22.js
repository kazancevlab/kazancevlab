// //1 Вариант создания поверхностной копии
//
// let a = 5
//     b = a
// b = b+5
//
// console.log(b)
// console.log(a)
//
// let obj ={
//     a:5,
//     b:1
// }
//
// // const copy = obj // Здесь получается что copy действует как ссылка, которая ссылается на изначальный объект. В нашем случае на obj
// // copy.a = 10
// // console.log(copy)
// // console.log(obj)
//
// //2 Вариант создания поверхностной копии
//
// function copy (mainObj){
//     let objCopy = {}
//     let key
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }
//     return objCopy
// }
//
// let numbers = {
//     a: 2,
//     b: 3,
//     c: {
//         x: 7,
//         y: 4
//     }
// }
//
// let newNumbers = copy(numbers)
//
// newNumbers.a = 10
// // console.log(newNumbers)
// // console.log(numbers)
//
// //Здесь с помощью функции мы копировали объект в новый созданный объект. Так же в конце в одном из объектов изменили значение
//
// //Есть два варианта копирования: Поверхностный и глубокий. Мы копировали с помощью поверхностного. Значит, что если изменить значения вложенного массива у копии, копия срабает как ссылка и так же передаст скопированое значение в оригинал
//
// // Объеденение объектов:
//
// let add = {
//     d: 7,
//     e:10
// }
//
// // console.log(Object.assign(numbers, add))
//
// //Тут мы просто добавили один массив к другому с помощью команды Object.assign. Обратить внимание: Object именно с большой буквы
//
// //3 Вариант создания поверхностной копии
//
// let clon = Object.assign({}, add)
//
// clon.d = 20
// console.log(add)
// console.log(clon)
//
// //Тут скопировали пустой массив и задали ему новое значение
//
// let oldArray = [1,2,3,4,5]
// let newArray = oldArray.slice() //В данном случае если изменим newArray, без метода slice все сработает как ссылка и изменения вступят в силу в обоих массивах. А там сы скопируем только один массив данных
//
// // newArray[1] = 'kakay to fraza'
// // console.log(oldArray)
// // console.log(newArray)

//4 Вариант создания поверхностной копии (совеременные стандарты)

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']

console.log(internet)

//Тут использовали метод spread. С помощью трех точек перед названием массива мы объеденяем все значения в нужный нам массив. Так же можем добавить нужные нам значения

function log (a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}

let num = [2,5,7]
log(...num)

let array = ['a', 'd']
let newArray = [...array]

console.log(newArray)

let q = {
    one: 1,
    two: 2
}

let newObj = {...q}
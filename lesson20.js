// let options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'red',
//         bg: 'black'
//     } // , makeTest: function (){
//     //     console.log('Test')
//     } console.log(Object.keys(options))
// };
//
// options.makeTest()

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'red',
        bg: 'black'
    }
}

console.log(Object.keys(options))


let {border} = options.color
console.log(border)

// console.log(options.name)
//
// delete options.name
// console.log(options)
//
// // С помощью delete мы можем удалять нужный нам эелемент из объекта
//
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
// }

// Конструкция for in позволяет перебрать содержимое объекта. Название переменной в фукнции задается в целом рандомно, но "исторически сложилось", что называем именно key. Не забыть что интерполяция срабатывает только в "Бектиках"



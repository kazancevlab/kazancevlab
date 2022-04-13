let btn = document.querySelector('button')

// btn.onclick = function () {
//     alert('Click')
// }

// В таком формате не кто не делает...Много гемора

// btn.addEventListener('click', () => {
//     alert('Click')
// })

// Команда addEventListener говорит о том, что добавляем обработчик событий

// click в скобках это некое название события. То есть то, после какого действия выполнится функция. Полный список команд тут: https://oddler.ru/blog/i63

btn.addEventListener('mouseenter', (e) =>{
    console.log(e.target)
    e.target.remove()
    // console.log('Click')
})

let deleteElement = (e) =>{
    console.log(e.target)
    // console.log('Click')
}

btn.addEventListener('click', deleteElement)
btn.removeEventListener('click', deleteElement)

//При написании атрибута target мы получаем непосредственно тот объект, к которому применилось событие
// ПРИКОЛЬНО!!!! С помощью команды e.target.remove() можно поставить удаление события. То есть направили мышт на кнопку и она исчезла!
let link = document.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Her Vam! ')
})

// Строка event.preventDefault() всегда пишется в самом начале обработчика событий, тем самым отменяя станартное поведение указанного тега. В примере выше это ссылка


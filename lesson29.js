const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper')

// box.style.backgroundColor = 'blue'
// box.style.width = '500px'
// btns[1].style.borderRadius = '80%'
//Обратить внимание: Когда хотим указать стили для одного конкретного элемента, задаем его индекс. Если хотим применить стили ко всем элементам применяем cssText. Пример ниже

box.style.cssText = 'background-color: blue; width: 500px'


// for (let i = 0; i < circles.length; i++) {
//     hearts[i].style.backgroundColor = 'blue'
// }

//Таким способом мы задаем стили всем элементам hearts. Однако подобный спооб используется очень редко

hearts.forEach(herny => {
    herny.style.backgroundColor = 'blue'
})

//По сути это более простой способ для того, что бы задать стили нескольким элементам

let div = document.createElement('div')
// Так мы создаем готовый элементю В данном примере это div

let text = document.createTextNode('Hello world')
//Данный метод используется весьма редко.

div.classList.add('black')
//black где в стилях уже был записан.....Потому не замарачиваемся пока

document.body.append(div)

wrapper.append(div)
// С помощью данного метода мы в конец нужного родителя ставим нужный нам элемент
// wrapper.prepend(div)
// С помощью данного метода мы в начале нужного родителя ставим нужный нам элемент

// hearts[0].before(div)
// hearts[0].after(div)

// before и after помогают поставить элемент до или после нужного нам элемента
// circles[0].remove()
//Данный метод позволяет удалять нужный нам обеъкт
hearts[0].replaceWith(circles[0])
//Данный способ позволяет заменить один объект другим. Заметим. что стили применяются те, которые были заданы для первого значения
div.innerHTML = '<h1>Hello World<h1/>'
// Когда надо вставить именно html структуру, используем innerHTML
// div.innerText = 'Hello World'
// Когда надо вставить просто текст, используем innerText






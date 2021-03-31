let soldier = {
    health: 100,
    armory: 100,
    sayHello: function() {
        console.log('Hello world')
    }
}

let jon = Object.create(soldier) //Тут мы создаем новый объект jonh и с помощью команды Object.create говорим что он будет наследовать все от soldier


// const num = 50
//
// if (num < 49) {
//     console.log('Error')
// } else if (num > 100) {
//     console.log('ToMach')
// } else {
//     console.log('ok')
// }
//
// (num === 50) ? console.log('ok') : console.log('Error')
// Это упрощенная вариация if и else if. Но тут надо разбираться
// В скобках до знака вопроса значение, которое проверяем.
// Знак вопроса как я понял вместо скобок. То есть если значение верно выполнять то то
// : вместо else и дальше то, что должно проихойти если не выполняется условие

const num = 50

//Конструкция swich работае только на строгое сравнение
switch (num) {
    case 49 :
        console.log('No wrong')
        break
    case 100 :
        console.log('No wrong')
        break
    case 50:
        console.log('Yes')
        break
    default :
        console.log('not to day')
        break
}

//Тут проверяем условия на строгое сравнение. После каждого кейса ставить break
// default ставим только тогда, когда нужно что бы в случае если не один из кейсов не отработает, выполнить какое то действие
// Так же работает и со строками


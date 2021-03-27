let num = 50

while (num < 55) {
    console.log(num)
    num++
}
for (let i = 1; i < 2; i++) {
    if (i === 6) {
        // break// Позволяет остановить цикл. если достигается установлено
        continue // Позволяет просто перешагнуть значение и продолжить цикл
    }
    console.log(i)
}
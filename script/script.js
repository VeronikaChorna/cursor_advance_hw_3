//  1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та
// виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

// const num = 45654356;
// const greatestDigit = (num = 0, greatest = 0) => {
//    if(num){
//       const max = Math.max(num % 10, greatest);
//       return greatestDigit(Math.floor(num / 10), max);
//    };
//    return greatest;
// };
// console.log(greatestDigit(num));

// 2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та
// **. Використовуйте цикл

function numberDegree(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  console.log(`Function result: ${numberDegree(3, 3)}`);


// 3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" ->
// "Влад", "вЛАД" -> "Влад" і так далі);

function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(`Function result: ${firstLetterUpperCase('cHARacTer')}`);

// 4.Створити функцію, яка вираховує суму, що залишається після оплати податку від
// зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function salaryAfterTax(a) {
    let result = a - ((a / 100 * 18) + (a / 100 * 1.5));
    return result;
}

console.log(`Function result: ${salaryAfterTax(2000)}`);

// 5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(a, b) {
    return Math.random(a, b);
}

console.log(`Function result: ${getRandomNumber(10, 50)}`);


// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4
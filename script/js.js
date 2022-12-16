// -------------------------------------------------------------------------------------------------------------
//  1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxDigit(n) {
  let arr = Array.from(String(n));
  let result = Math.max(...arr);
  return result;
}

console.log(`The function receives the largest number in this number: ${getMaxDigit(6870)}`);

// -----------------------------------------------------------------------------------------------------
// 2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function getNumberPow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }

  console.log(`Function determines the power of a number: ${getNumberPow(3, 3)}`);

//------------------------------------------------------------------------------------------------------------------
// 3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function getFirstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(`Function formats the name by capitalizing the first letter: ${getFirstLetterUpperCase('cHARacTer')}`);

// ----------------------------------------------------------------------------------------------------------------------------------
// 4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function getSalaryAfterTax(a) {
    let result = a - ((a / 100 * 19.5));
    return result;
}

console.log(`Function deducts the amount remaining after paying the tax: ${getSalaryAfterTax(2000)}`);

// --------------------------------------------------------------------------------------------------------------------
// 5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(m, n) {
    return (Math.random() * (m - n + 1) + n).toFixed(0);
}

console.log(`Function return a random integer in the range N to M: ${getRandomNumber(1, 50)}`);

// ---------------------------------------------------------------------------------------------------------------------------
// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
function getcountLetter(str, a) {
    let value = 0;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() == a) {
            value += 1;
        }
    }
    return value;
}

console.log(`Function return how many times a certain letter is repeated in a word: ${getcountLetter('blablablablablablablA', 'a')}`);

// ------------------------------------------------------------------------------------------------------------------------------------
// 8.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
function getRandomPassword(n = '8') {
    let pwd = '';
    while(n > 0) {
        pwd += Math.floor(Math.random() * 10);
        n--;
    }
    return pwd; 
  }
  
  console.log(`Function that return random password: ${getRandomPassword(4)}`);

// ---------------------------------------------------------------------------------------------------------
// 9.Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetters(a, str) {
    let value = '';
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() !== a) {
        value += str.charAt(i);
        }
    }
    return value;
  }
  
  console.log(`Function deletes selected letters: ${deleteLetters('a', 'It was realy beautiful day')}`);

// --------------------------------------------------------------------------------------------------------------
// 10.Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
function isPalyndrom(str) {
    str = str.toLowerCase();
    strNew = '';
    value = '';
    for (i = 0; i < str.length; i++) {
      if (str.charAt(i) !== ' ') {
        strNew += str.charAt(i);
      }
    }
    for (i = strNew.length - 1; i >= 0; i--) {
      if (strNew.charAt(i) !== ' ') {
        value += strNew.charAt(i);
      }
  }
    return (strNew === value) ? true : false;
  }
  
  console.log(`Function checks if word is palidrom: ${isPalyndrom('Madam madam')}`);
// -------------------------------------------------------------------------------------------------------------
//  1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxDigit(n) {
  let arr = Array.from(String(n));
  let result = Math.max(...arr);
  return result;
}

// -----------------------------------------------------------------------------------------------------
// 2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function getNumberPow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }

//------------------------------------------------------------------------------------------------------------------
// 3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function getFirstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// ----------------------------------------------------------------------------------------------------------------------------------
// 4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function getSalaryAfterTax(a) {
    let result = a - ((a / 100 * 19.5));
    return result;
}

// --------------------------------------------------------------------------------------------------------------------
// 5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(m, n) {
  return (Math.random() * (m - n + 1) + n).toFixed(0);
}

// ---------------------------------------------------------------------------------------------------------------------------
// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
function getCountLetter(str, a) {
    let value = 0;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() == a) {
            value += 1;
        }
    }
    return value;
}

// 7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$ Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function convertCurrency(value) {
  value = value.toUpperCase();
  if (value.includes('UAH')) {
    value = value.slice(0, -3);
    value = Number(value / 36.6)
  } else if (value.includes('$')) {
    value = value.slice(0, -1);
    value = Number(value * 36.6)
  } else {
    value = 'Invalid currency';
  }

  return value;
}

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

// -----------------------------------------------------------------------------------------------------------------------------------
// 11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"
function deleteDuplicateLetter(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  arr = Array.from(str);
  let uniqueChars = [...new Set(arr)].join('');

  return uniqueChars;
}

// --------------------Call functions-----------------
let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', event => {
alert(getMaxDigit(6870));
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', event => {
alert(getNumberPow(3, 3));
});

let btn3 = document.getElementById("btn3");
btn3.addEventListener('click', event => {
alert(getFirstLetterUpperCase('cHARacTer'));
});

let btn4 = document.getElementById("btn4");
btn4.addEventListener('click', event => {
alert(getSalaryAfterTax(2000));
});

let btn5 = document.getElementById("btn5");
btn5.addEventListener('click', event => {
alert(getNumberPow(3, 3));
});

let btn6 = document.getElementById("btn6");
btn6.addEventListener('click', event => {
alert(getCountLetter('blablablablablablablA', 'a'));
});

let btn7 = document.getElementById("btn7");
btn7.addEventListener('click', event => {
alert('100$ = ' + convertCurrency('100$') + 'UAH');
alert('3660UAH = ' + convertCurrency('3660UAH') + '$');
});

let btn8 = document.getElementById("btn8");
btn8.addEventListener('click', event => {
alert(getRandomPassword(8));
});

let btn9 = document.getElementById("btn9");
btn9.addEventListener('click', event => {
alert(deleteLetters('a', 'It was realy beautiful day'));
});

let btn10 = document.getElementById("btn10");
btn10.addEventListener('click', event => {
alert(isPalyndrom('Madam'));
});

let btn11 = document.getElementById("btn11");
btn11.addEventListener('click', event => {
alert(deleteDuplicateLetter('It was hard day for all'));
});


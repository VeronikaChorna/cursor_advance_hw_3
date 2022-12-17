// 7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$ Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

// function convertCurrency(a) {
//   let arr = Array.from(a);
//   if (arr.charAt(arr.length-1) == '$') {

//   }
 
// }

// convertCurrency('123UAH');


// 11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"
// ???????????????????????????????????????????????????????????????????????? should use spread operator
function deleteDuplicateLetter(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    arr = Array.from(str);
    let uniqueChars = [...new Set(arr)].join('');

    return uniqueChars;
  }

console.log(`Function deletes duplicated letters: ${deleteDuplicateLetter('It was hard day for all')}`);
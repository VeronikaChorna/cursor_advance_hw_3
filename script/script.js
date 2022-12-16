//  1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та
// виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8



// 7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від
// наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500
// грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також
// регістр uah не має значення.



// 10.Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад:
// isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу
// гусеня") -> true
// ????
// function isPalyndrom(str) {
//   value = '';
//   for (i = str.length - 1; i >= 0; i--) {
//     value += str.charAt(i);
//     console.log(value);
//   }

  

//   return (str.toLowerCase === value.toLowerCase) ? true : false;
// }

// console.log(`Function checks if word is palidrom: ${isPalyndrom('madam')}`);


// function isPalyndrom(str) {
//   // newStr = '';
//   // for (i = 0; i < str.length; i++) {
//   //   if (str.charAt(i) !== '') {
//   //     newStr += str.charAt(i);
//   //     console.log(newStr)

//       value = '';
//       for (i = str.length - 1; i >= 0; i--) {
//         value += str.charAt(i);
//         console.log(value);
//       }
    
//       return (newStr === value) ? true : false;
//   }
  
  

// console.log(`Function checks if word is palidrom: ${isPalyndrom('я несу гусеня')}`);

// 11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"
// ???????????????????????????????????????????????????????????????????????? should use spread operator
// function deleteDuplicateLetter(str) {
//   let value = '';
//   for (i = 0; i < str.length; i++) {
//     if (str.charAt(i) !== '') {
//       value += str.charAt(i);
//     }
//   }
//    return value;
// }

// console.log(`Function deletes duplicated letters: ${deleteDuplicateLetter('It was hard day')}`);
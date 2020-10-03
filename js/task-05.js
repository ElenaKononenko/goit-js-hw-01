// const countryName = prompt("Оформить доставку товара в страну");

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName.toUpperCase()[0] + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     // Write code under this line
//     case CHINA:
//       price = 100;
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;

//     case INDIA:
//       price = 80;
//       break;

//     case JAMAICA:
//       price = 120;
//       break;

//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

//#1

// const getItemsString = function (array) {
//
//
//   let lineOutput = "";
//   for (let i = 0; i < array.length; i += 1) {
//     lineOutput += `${i + 1} - ${array[i]}\n`;
//   }
//   return lineOutput;
// };
// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
//#2
// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(" ").length;
//#3

// function findLongestWord(string = "") {
//   let words = string.split(" ");
//   let longestWord = words[0];
//   for (let i = 1; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// const r1 = findLongestWord("The quick brown fox jumped over the lazy do");
// console.log(r1);
// #4
// function formatString (string, maxLength = 40) {
//   // Write code under this line
//   if (string.length <= maxLength ) {return string;}
//   else {return string.slice(0, maxLength) + '...'}
// }
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'
// #5
// function checkForSpam (str) {
//   'use strict';
//   // Write code under this line
//  return (str.toLowerCase().includes('spam') ||  str.toLowerCase().includes('sale'))

// }
//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// #6
// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//   numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

//console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
// #7
// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if(Number.isFinite(array[i])){numbers.push(array[i])}
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]
// #8
// function reduceArray(array) {
//   "use strict";
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) {
//       total += array[i];
//     }
//   }
//   return total;
// }
// console.log(reduceArray([1, 2, 3]));
// 6

//console.log(reduceArray([-2, 0, 2]));
// 0

//console.log(reduceArray([1, 2, 2.5]));
// 5.5
// #9

function isLoginValid(login, min = 4, max = 16) {
  return login.length >= min && login.length <= max;
}
const r1 = isLoginValid("Poly");
console.log("return11 ", r1);

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;

//   if (isLoginValid(login) !== true) {
//     return ERROR;
//   }

//   if (isLoginUnique(allLogins, login) !== true) {
//     return REFUSAL;
//   }

//   if (isLoginUnique(login) === true) {
//     return logins.push(login), SUCCESS;
//   }
// }

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   if (!isLoginValid(login)) {
//     return ERROR;
//   }

//   if (isLoginUnique(allLogins, login)) {
//     return allLogins.push(login), SUCCESS;
//   } else {
//     return REFUSAL;
//   }
// }
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// console.log(logins);
// const r2 = isLoginUnique(logins, "Poly");
// console.log("return22 ", r2);
// console.log(addLogin(logins, "Ajax"));
// console.log(logins);

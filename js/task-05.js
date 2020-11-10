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

//
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

// function isLoginValid(login, min = 4, max = 16) {
//   return login.length >= min && login.length <= max;
// }
// const r1 = isLoginValid("Poly");
// console.log("return11 ", r1);

// function isLoginUnique(allLogins, login) {
//   return !allLogins.includes(login);
// }

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
// #3-1
// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// user.mood = "happy";
// user["full time"] = true;
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   message += `${key} : ${user[key]} \n`;
// }

// console.log(message);
// #3-2
// const countProps = function(obj) {
//   'use strict';

// return Object.keys(obj).length
// };

// console.log(countProps({})); // 0

// console.log(countProps({a:1, b:1})); // 2

// console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5

// #3-3

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//  const keys = Object.keys(employees)
//  if(keys.length ===0){return ""}
//  let bestEmployee = keys[0];
//  for(const key of keys){
//  if (employees[key] > employees[bestEmployee]) {bestEmployee = key}
//  }
//   return (bestEmployee)
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// #3-4
// const countTotalSalary = function (employees) {
//   "use strict";
//   // Write code under this line
//   const employee = Object.values(employees);
//   let totalSalary = 0;
//   for (const price of employee) {
//     totalSalary += price;
//   }
//   return totalSalary;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };

// console.log(countTotalSalary(developers));
// // 1000
// # 3-5
// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line

//   let arr = [];
//   for (const itemArray of array) {
//     for (const key in itemArray) {
//       if (key === prop) arr.push(itemArray[key]);
//     }
//   }

//   return arr;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log("console: ", getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
// console.log("console: ", getAllPropValues(products, "quantity"));
// #3-6

// function calculateTotalPrice(array, prop) {
//   "use strict";
//   // Write code under this line

//   let totalPrice = Number();

//   for (const itemArray of array) {
//     if (itemArray.name === prop) {
//       // arr.push(itemArray.price);
//       totalPrice += itemArray.price * itemArray.quantity;
//     }
//   }
//   return totalPrice;
// }
// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, "Радар"));
// // 9080
// # 3-3 vol2
// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line
//   const values = Object.values(employees);
//   let maxValue = Math.max(...values);

//   const employee = Object.keys(employees);
//   let BestEmployee;

//   if (employee.length === 0) {
//     return "";
//   }
//   for (const key of employee) {
//     if (employees[key] === maxValue) {
//       BestEmployee = key;
//       return BestEmployee;
//     }
//   }
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// const dev = {};
// console.log(findBestEmployee(dev));

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithAmount); // массив с объектами apples и grapes



// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line

//     if (cb(element, index, arr)) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5,1,2,5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]


// #4-3
// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if(arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if(arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for(i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element)
//   }
//   return accum;
// }

// const arr  = [1,2,3,4,5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// #4-5
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   const act =  action(itemName);
//   const msg =  `Invoking action on ${itemName}`;
//   return {act, msg};
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//  inventory.add.bind(inventory)// Write code in this line
// ); 
// const arrayAdd = [...inventory.items];
// console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']


// const invokeRemove = invokeInventoryAction(
//   'Gas mask',

// inventory.remove.bind(inventory)
//   // Write code in this line
// );

// const arrayRemove = [...inventory.items];


// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']




// const add = (...args) => {
//     console.log(args);
//   };

//   add(1, 2, 3); // [1, 2, 3]



// #5-1
//  const Account = function(login, email) {
//   this.login = login;
//   this.email = email; 

//  } ;

//  Account.prototype.getInfo = function(login, email)
//   { return `login : ${this.login}, email: ${this.email}`
//   }
// console.log(typeof Account.prototype.getInfo);
// // 'function'

//  const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); 
// // 'login : Mangozedog, email: mango@dog.woof'

//  const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

// #5-2
// class User {
//   constructor(name, age, followers){
//   this.name = String(name);
//   this.age = Number(age);
//   this.followers = Number(followers);
//   }

//   getInfo() { return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`}

//  }


//  console.log(typeof User);
// // 'function'

//  const mango = new User('Mango', 2, 20);
//  console.log(mango.getInfo()); 
// // 'User Mango is 2 years old and has 20 followers'


//  console.log(typeof mango.getInfo); 
// // 'function'  
// console.log(typeof mango.age);
//  const poly = new User( 'Poly', 3, 17);
//  console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

//# 5-3
// class Storage {
//     constructor(item){
//     this.item = item;}


//     getItems(){return this.item}

//     addItem(item){ 
//     if (this.item.indexOf(item) === -1){  this.item.push(item)}
//     }


//     removeItem(item){
//         for(const it of this.item){
//             if (it === item){ 
//                 this.item.indexOf(it)
//                 return this.item.splice(this.item.indexOf(it), 1)}
//             }
//     }
//   }  

//     console.log(typeof Storage);
//     // 'function'

//     const goods = [
//       'Нанитоиды',
//       'Пролонгер',
//       'Железные жупи',
//       'Антигравитатор'
//     ];

//      const storage = new Storage(goods);

//     console.log(storage.getItems());
//     /* [
//       'Нанитоиды',
//       'Пролонгер',
//       'Железные жупи',
//       'Антигравитатор'
//     ] */
//     console.log(storage)
//      storage.addItem('Дроид');
//      console.log(storage.getItems());
//     /* [
//       'Нанитоиды',
//       'Пролонгер',
//       'Железные жупи',
//       'Антигравитатор',
//       'Дроид'
//     ] */

//      storage.removeItem('Пролонгер');
//      console.log(storage.getItems());
//     /* [
//       'Нанитоиды',
//       'Железные жупи',
//       'Антигравитатор',
//       'Дроид'
//     ] */


// v-2
// class Storage {
//   constructor(item){
//   this.items = item;}


//   getItems(){return this.items}

//   addItem(item){ 
//  this.items.push(item)}

//   removeItem(item){
//       for(const it of this.items){
//           if (it === item){ 
//               this.items.indexOf(it)
//               return this.items.splice(this.items.indexOf(it), 1)}
//           }
//   }
//   }
// # 5-4
// class StringBuilder{
//   constructor(value){
//   this._value = value}

//     get value(){ return this._value} 

//     append(str){ return this._value += str}
//     prepend(str){return this._value = str + this._value}
//      pad(str) { this.prepend(str) ;
//                return this.append(str) }
//   }

//  console.log(typeof StringBuilder);
// // 'function'


//  const builder = new StringBuilder('.');

//  builder.append('^');

//  console.log(builder.value); // '.^'

//  builder.prepend('^');
//  console.log(builder.value); // '^.^'

// builder.pad('=');
//  console.log(builder.value); // '=^.^='
//  function SubtractSum(n){
//    if ( n>= 10 && n < 10000) {
//    do {
//      n = n - n.toString().split('').reduce((acc, curr) => +acc + +curr);

//  } while (n > 100)
//  } return 
// }
//  console.log(SubtractSum(324))
// #5-5
//    class Car {
//       // Write code under this line
//      static getSpecs(car){return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`}
//        constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0})
//        {this.speed = speed, 
//          this._price = price,
//          this.maxSpeed = maxSpeed,
//          this.isOn = isOn, 
//          this.distance = distance}
//        get price() {return this._price}
//        set price(value) {this._price = value}
//        turnOn() {this.isOn = true}
//        turnOff() {this.isOn = false,
//                    this.speed = 0}
//        accelerate(value) { this.speed += value;
//               if (this.speed > this.maxSpeed){this.speed = this.maxSpeed}          }
//        decelerate(value) {this.speed -= value ;
//                         if (this.speed < 0){this.speed = 0}}
//        drive(hours) {if (this.isOn ) {this.distance += this.speed * hours }}
//      }

//      const mustang = new Car({ maxSpeed: 200, price: 2000 });
//      mustang.turnOn();
//      mustang.accelerate(50);
//      mustang.drive(2);

//       console.log(Car.getSpecs(mustang));
//      // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

//      mustang.decelerate(20);
//      mustang.drive(1);
//      mustang.turnOff();

//       console.log(Car.getSpecs(mustang));
//      // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

//      console.log(mustang.price); // 2000
//      mustang.price = 4000;
//       console.log(mustang.price); // 4000


 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! условие  6 модуля(обьект)

 const users =  [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];


//#6 -1
// // Write code under this line
// const getUserNames = array => array.map(function({name}) {return name});

//  console.log(getUserNames(users));

// /* [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Ross Vazquez",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
// ] */



//6-2
// Write code under this line
// const getUsersWithEyeColor = (array, color) => array.filter(function({eyeColor}){return eyeColor === color});

// console.log(getUsersWithEyeColor(users, 'blue'));



//#6-3


// # 6-4

// const getInactiveUsers = array  => array.filter(function({isActive}){return !isActive});

//  console.log(getInactiveUsers(users));



// # 6-5
// const getUserWithEmail = (array, mail) => array.find(function({email}){return email === mail});

//  console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));





// # 6-6

// const getUsersWithAge = (array, min, max) => array
//  .filter(({age}) => age >= min && age <= max)   
//  .map(({name, email}) => ({['name']: name ,['email']: email}));  

//  console.log(getUsersWithAge(users, 20, 30));

// #6-7
// const calculateTotalBalance = array => array.reduce((acc, {balance}) => acc + balance , 0);

// // console.log(calculateTotalBalance(users)); 
// // 20916

// #6-8
// const getUsersWithFriend = (array, friendName) => array.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);

//  console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

//  console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]


// #6-9

// const getNamesSortedByFriendsCount = (array) => array.slice().concat().sort((a ,b) => a.friends.length - b.friends.length ).map(({name}) => name);

//  console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// #6-10
// const getSortedUniqueSkills = (array) =>
//  array
//  .reduce((acc, {skills}) =>  acc.concat(skills) ,[])
//  .filter((item, i, skills) => skills.indexOf(item) === i)
//  .sort()
 

// console.log(getSortedUniqueSkills(users));






// .filter(function(item, i, skills) {  return skills.indexOf(item) === i})
















//пример кодевара
              // const declareWinner = function (fighter1, fighter2, firstAttacker) {
              // if(firstAttacker === fighter1.name){

              //   while (fighter1.health > 0 && fighter2.health >0) 
              //   {fighter2.health = fighter2.health - fighter1.damagePerAttack
              //   if(fighter2.health >0) }  }
                
              // else {
              // while( fighter1.health <=0) {fighter1.health = fighter1.health - fighter2.damagePerAttack return fighter1.name}}
                
              // //   return ` "Write your code here" ${fighter1.name}`}
              // //  else if(fighter.health - fighter2.damagePerAttack >  fighter2.health &&  fighter2.health === 0)){
              // //     return `"Write your code here" ${fighter2.name}`}


                  
              // class Fighter {
              //   constructor(name, health, damagePerAttack) {
              //   this.name = name;
              //   this.health = health;
              //   this.damagePerAttack = damagePerAttack;
              //   this.toString = function() {
              //     return this.name; }


              // }}

              // let fighter1 = new Fighter("Lew", 10, 2)


              // let fighter2 = new Fighter("Harry", 5, 4)
              // // console.log( fighter1.name)
              // console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))

              // // const s = new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4)

              // // new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4)

              // // new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4)

              // // new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5)
                
              // // new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5)


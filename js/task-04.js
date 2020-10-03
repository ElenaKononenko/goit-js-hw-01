let orderPieces = prompt("Какое количество дроидов Вы хотите купить?");

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice;
let balanceCredit;
let message;

totalPrice = orderPieces * pricePerDroid;
balanceCredit = credits - totalPrice;
const formalized = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;

if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits >= totalPrice) {
  message = formalized;
} else {
  message = ACCESS_DENIED;
}

console.log(message);

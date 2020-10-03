let ordered = 150;
const total = 100;
let message;

// if (stock >= invoice) {
//   message = "Заказ оформлен, с вами свяжется менеджер";
// } else {
//   message = "На складе недостаточно товаров!";
// }
total >= ordered
  ? (message = "Заказ оформлен, с вами свяжется менеджер")
  : (message = "На складе недостаточно товаров!");
console.log(message);

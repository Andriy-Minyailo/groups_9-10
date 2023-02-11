// Напишіть програму, котра отримує  від користувача
//  число (кількість хвилин ) и повертає у  консоль
//  строку у форматі годин і хвилин
// function normalaziData() {
//     let userInput = Number(prompt("Запишіть кількість хвилин"));
//     if (isNaN(userInput)) {
//         userInput = Number(prompt("Запишіть валідну кількість хвилин"));
//     };
//     // let hours = Math.floor(userInput / 60);
//     // let min = userInput % 60;
//     let normHours = String(Math.floor(userInput / 60)).padStart(2, 0);
//     let normMin = String(userInput % 60).padStart(2, 0);

//     alert(`hours: ${normHours} min: ${normMin}`);
// }
// normalaziData();

// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS”]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами

// const arr = ["BEST", "the", "foo", "is", "JS"];

// const cutValue = function (array, value) {
//   let newArray = [...array];

//   let reversArray = newArray.reverse();

//   let indexValue = reversArray.indexOf(value);

//   let cutValueArray = reversArray.splice(indexValue, 1);

//   let finalResult = reversArray.join(" ");

//   console.log(cutValueArray);

//   console.log(finalResult);
// };

// cutValue(arr, "foo");

// const cutValue2 = function (array, value) {
//   return array
//     .reverse()
//     .slice(0, array.indexOf(value))
//     .concat(array.slice(array.indexOf(value) + 1))
//     .join(" ");
// };

// console.log(cutValue2(arr, "foo"));

// *?  За каждый месяц налоговая начисляет на зп разработчика 5% от суммы.

// *?  Напишите консольную функцию, для которую пользователь вводит сумму зп

// *?  и количество месяцев с помощью prompt() не забываем что prompt возвращает строку.

// *?  А налоговая вычисляет конечную сумму зп без налогов за год,

// *?  сумму налогов всего и чистый доход разработчика за каждый месяц.

// *?  Для вычисления суммы с учетом процентов используйте цикл for.

// function taxCounter() {
//   let devSalary = Number(prompt('Enter your salary par month'));
//   // if (isNaN(devSalary)) {
//   //   alert('Invalid salary');
//   //   taxCounter();
//   // }

//   let devMonthes = Number(prompt('Enter quantity of months'));
//   if ((isNaN(devMonthes)) || (isNaN(devSalary))) {
//     alert('Invalid info');
//     taxCounter();
//   }

//   let clearSalary = 0;
//   let totalTax = 0;
//   const tax = 0.05;

//   for (let i = 1; i <= devMonthes; i += 1) {
//     clearSalary += devSalary - devSalary * tax;
//     totalTax += devSalary * tax;
//   }
//   console.log(`Your clear salary: ${clearSalary}, total tax: ${totalTax}`);

// }
// taxCounter()

//додайте "Маракуя" в кінець
// замініть значення "Борщ" на "Роли"
// видаліть перший елемент масиву та виведіть його в консоль
// додайте "Вассабі" та "Угорь" на початок масиву
const menu = ["Суші", "Борщ"];
menu.push("Маракуя");
menu.splice(1, 1, "Роли");
console.log(menu.shift());
menu.unshift("Вассабі", "Угорь");
console.log(menu);

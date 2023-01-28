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

const arr = ["BEST", "the", "foo", "is", "JS"];

const cutValue = function (array, value) {
  let newArray = [...array];

  let reversArray = newArray.reverse();

  let indexValue = reversArray.indexOf(value);

  let cutValueArray = reversArray.splice(indexValue, 1);

  let finalResult = reversArray.join(" ");

  console.log(cutValueArray);

  console.log(finalResult);
};

cutValue(arr, "foo");

const cutValue2 = function (array, value) {
  return array
    .reverse()
    .slice(0, array.indexOf(value))
    .concat(array.slice(array.indexOf(value) + 1))
    .join(" ");
};

console.log(cutValue2(arr, "foo"));

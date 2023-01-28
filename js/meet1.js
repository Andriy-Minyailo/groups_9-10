// Напишіть програму, котра отримує  від користувача
//  число (кількість хвилин ) и повертає у  консоль
//  строку у форматі годин і хвилин
function normalaziData() {
    let userInput = Number(prompt("Запишіть кількість хвилин"));
    if (isNaN(userInput)) {
        userInput = Number(prompt("Запишіть валідну кількість хвилин"));
    };
    // let hours = Math.floor(userInput / 60);
    // let min = userInput % 60;
    let normHours = String(Math.floor(userInput / 60)).padStart(2, 0);
    let normMin = String(userInput % 60).padStart(2, 0);

    alert(`hours: ${normHours} min: ${normMin}`);
}
normalaziData();
    
    
    
// console.log(userInput );
// console.log(typeof userInput);










//  70 === 01:10
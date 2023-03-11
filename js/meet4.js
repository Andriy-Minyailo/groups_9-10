
/**

*? Напиши функцію конструктор User для 

*? створення користувача з такими властивостями:

*? a. userName - ім'я, рядок

*? b. age - вік, число

*? c. numbersOfPost - кількість постів, число

*? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями



*? Додай метод getInfo(), який повертає рядок:

*? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`



 */

const User = function (myObject) {
    const { userName, age, numbersOfPost } = myObject;
    this.userName = userName,
    this.age = age,
    this.numbersOfPost = numbersOfPost,
    this.getInfo = () => console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`);    
}

const mango = new User({ userName: 'Margo', age: 25, numbersOfPost: 10 });

console.log(mango);

mango.getInfo();



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

// const User = function (myObject) {
//     const { userName, age, numbersOfPost } = myObject;
//     this.userName = userName,
//     this.age = age,
//     this.numbersOfPost = numbersOfPost,
//     this.getInfo = () => console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`);    
// }

// const mango = new User({ userName: 'Margo', age: 25, numbersOfPost: 10 });

// console.log(mango);

// mango.getInfo();

//Створіть клас Адміну, із приватними полями імʼя та пороль, методом для шифровання  та розшифровки паролю. Ійого перевірки

class Admin {
    #name;
    #password;
    constructor(name, password){
        this.#name = name;
        this.#password = password.split('').reverse().join('');
        this.encrypted =  this.#password.split('').reverse().join('');
    }
    get password () {
      console.log(this.#password);
      return
    }
    set password (newPassword) {
        this.#password = newPassword.split('').reverse().join('');
    }
    get name () {
        return this.#name;
    }
    checkPassword(userPassword) {
        return this.#password.split('').reverse().join('') === userPassword ? console.log(true) : console.log(false);

    }
    checkPassword2 = (userPassword) => this.#password.split('').reverse().join('') === userPassword;

    upDatePassword(oldPassword, newPassword) {
        if(this.#password.split('').reverse().join('') === oldPassword) {
            this.#password =  newPassword.split('').reverse().join('');
        } else {console.log("Your password doesn't match");
}
    }

}

const Oll = new Admin ('Poly', 'Number12345');
console.log(Oll);
Oll.password;
Oll.checkPassword('Number12345');
Oll.password = "reowp32413";
Oll.password;
Oll.upDatePassword("reowp32413", "superpassword333444");
Oll.password;
Oll.upDatePassword("superpsword333444", "reowp32413");
console.log(Oll.name);
Oll.name = Jo;
// Створіть функцію  generatePetCard,
// котра отримує  3 аргументи: kind, year, name
// Функція повинна повернути розмітку HTML:
// <li class="petCard">
//   <h2>Name Year</h2>
//   <p>Животное  Kind - Year рік народження. Вік творини - Years років.</p>
// </li>
// вірахувати вік тварини і якщо старше 1 року років інакше додаємо рік
// Створити новий нумерований список із класом pets
// Створити 4 картки для тварин, використовуючи функцію eneratePetCard
// Розмістити ці 4 картки у список з класом pets

// Розмістити список з класом pets на сторінку  DOM -  в DIV с класом container

// Додати кнопку Видалити  на кожну картку тварини
const container = document.querySelector('.container');

const petsList = [
    { kind: "Dog", year: 2015, name: "lassie" },
    { kind: "Cat", year: 2016, name: "einstein" },
    { kind: "Hedgehog", year: 2019, name: "elizabeth" },
    { kind: "Hamster", year: 2020, name: "alcatraz" },
];

function generatePetCard(kind, year, name) {
  return `<li class="petCard">
      <h2>${name} ${year}</h2>
      <p>Tвaринa ${kind} - ${year} рік народження. Вік твaрини - Years років.</p>
  </li>`;
};

const petsListHtml = petsList.reduce((acc, { kind, year, name }) => acc += generatePetCard(kind, year, name), '');
console.log("🚀  petsListHtml", petsListHtml)


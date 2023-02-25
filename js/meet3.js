//?Напишіть функцію для нормалізації даних
// const inputData = [
//     { id: 1, name: "Item 1" },
//     { id: 2, name: "Item 2" },
//     { id: 4, name: "Item 4" },
//     { id: 7, name: "Item 7" },
// ];
// function normalizedData (array) {
//     const resultData = {};
//     const arrayId = [];
//     const objData = {};
//     array.forEach(element => {
//         arrayId.push(element.id)

//     objData[element.id] = element;

//     });
//     resultData.entities = objData;
//     resultData['byId'] = arrayId;
//     return  resultData;
// }
// // ('function should return normalized data', () => {
// //     expect(normalize(inputData)).toEqual({
// //       entities: {
// //         1: { id: 1, name: "Item 1" },
// //         2: { id: 2, name: "Item 2" },
// //         4: { id: 4, name: "Item 4" },
// //         7: { id: 7, name: "Item 7" },
// //       },
// //       byId: [1, 2, 4, 7],
// //     });
// console.log(normalizedData(inputData));

// const nums = [-90, 45, 0, 16, -18, 24, -67, 43]

// порахуйте всі позитивні і негативні значення та повертає обʼєкт даних

// const sumPosAndNegNums = (array) => {
//   return array.reduce((objAcc, element) => {
//     if (element > 0) {
//       return {
//         ...objAcc,
//         poz: objAcc.poz + element
//       }
//     } else {
//       return {
//         poz: objAcc.poz,
//         neg: objAcc.neg + element
//       }
//     }
//   }, { poz: 0, neg: 0 })
// };

// console.log(sumPosAndNegNums(nums));

// const sumPosAndNegNums2 = (array) => {
//     const totalPoz = array.filter(el => el > 0).reduce((acc, element) => acc += element, 0);
//     console.log(totalPoz);
//     const totalNeg = array.filter(el => el < 0).reduce((acc, element) => acc += element, 0);
//     console.log(totalNeg);
//     return { poz: totalPoz, neg: totalNeg };
// }

// console.log(sumPosAndNegNums2(nums));

const devs = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "John Dousen",
    email: "johndousen@indexia.com",
    languages: ["js", "php", "c#", "go"],
    isActive: false,
    salary: 3200,
    companies: ["Epam", "Global Logic", "Soft Serv", "Google", "Netflex"],
    gender: "male",
    age: 37,
    level: "senior",
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Shyrly Bond",
    email: "shyrlybond@tubesys.com",
    languages: ["c++", "php", "python", "swift"],
    isActive: true,
    salary: 3800,
    companies: ["Epam", "Global Logic", "Netflex"],
    gender: "female",
    age: 34,
    level: "middle",
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Rossyta Vazulez",
    email: "rossytavazulez@xinware.com",
    languages: ["go", "ruby", "python"],
    isActive: false,
    salary: 2400,
    companies: ["Soft Serv"],
    gender: "female",
    age: 24,
    level: "junior",
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Emma Hilton",
    email: "emmahiltond@omatom.com",
    languages: ["kotlin", "php", "js", "java"],
    isActive: true,
    salary: 2200,
    companies: ["Global Logic"],
    gender: "female",
    age: 21,
    level: "junior",
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Brant",
    email: "careybrant@nurali.com",
    languages: ["go", "kotlin", "python", "js"],
    isActive: true,
    salary: 2900,
    companies: ["Microsoft", "Epam"],
    gender: "male",
    age: 27,
    level: "middle",
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Black Dots",
    email: "blackdots@furnigeer.com",
    languages: ["c#", "java", "kotlin", "swift"],
    isActive: false,
    salary: 3400,
    companies: ["Epam", "Global Logic", "Soft Serv"],
    gender: "male",
    age: 38,
    level: "senior",
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheron Asully",
    email: "sheronasully@kog.com",
    languages: ["js", "go"],
    isActive: true,
    salary: 2700,
    companies: ["Google", "Netflex", "Apple"],
    gender: "female",
    age: 39,
    level: "senior",
  },
];

function arrayLanguage(array) {
  const allLang = array.reduce((acc, item) => [...acc, ...item.languages], []);
  console.log(allLang);
  const unikLangth = Array.from(new Set(allLang));
  return unikLangth;
}

console.log(arrayLanguage(devs));

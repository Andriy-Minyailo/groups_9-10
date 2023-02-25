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

const nums = [-90, 45, 0, 16, -18, 24, -67, 43]

// порахуйте всі позитивні і негативні значення та повертає обʼєкт даних

const sumPosAndNegNums = (array) => {
  return array.reduce((objAcc, element) => {
    if (element > 0) {
      return {
        ...objAcc,
        poz: objAcc.poz + element
      }
    } else {
      return {
        poz: objAcc.poz,
        neg: objAcc.neg + element
      }
    }
  }, { poz: 0, neg: 0 })
};

console.log(sumPosAndNegNums(nums));

const sumPosAndNegNums2 = (array) => {
    const totalPoz = array.filter(el => el > 0).reduce((acc, element) => acc += element, 0);
    console.log(totalPoz);
    const totalNeg = array.filter(el => el < 0).reduce((acc, element) => acc += element, 0);
    console.log(totalNeg);
    return { poz: totalPoz, neg: totalNeg };
}

console.log(sumPosAndNegNums2(nums));

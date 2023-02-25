//?Напишіть функцію для нормалізації даних
const inputData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 4, name: "Item 4" },
    { id: 7, name: "Item 7" },
];
function normalizedData (array) {
    const resultData = {};
    const arrayId = [];
    const objData = {};
    array.forEach(element => {
        arrayId.push(element.id)
    
    objData[element.id] = element;
    
    });
    resultData.entities = objData;
    resultData['byId'] = arrayId;
    return  resultData;
}
// ('function should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });
console.log(normalizedData(inputData));
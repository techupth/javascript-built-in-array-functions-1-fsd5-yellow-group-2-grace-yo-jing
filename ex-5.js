const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
//   const calculate = students.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.score;
//   },0)
//   return calculate / 4
// }
const calculate = students.reduce(sum,0)
return calculate/4
}
function sum (accumulator, currentValue){
  return accumulator + currentValue.score;
}

const result = getAverageStudentScore(students); // Output: 87.5
console.log(result)
let words = ["hello", "world"];

// function getWordLengths(words) {
//   // Start coding here
//   return words.map(word => word.length
//   )
// }
function getWordLengths(words){
  const wordLengths = words.map((item)=>{
    return item.length});

    return wordLengths;
}


const result = getWordLengths(words);

console.log(result); // Output: [5, 5]

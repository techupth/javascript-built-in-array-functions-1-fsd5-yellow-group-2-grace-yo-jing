const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

// function getTodoTopics(todos) {
//   // Start coding here
//   const dodo = todos.map((item)=>{
// 	return item.topic
//   })
//   return dodo
// }
function getTodoTopics(todos){
	return todos.map(dodo)
}
let dodo = (item)=>{
	return item.topic;
}

const result = getTodoTopics(todos);

console.log(result)

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/

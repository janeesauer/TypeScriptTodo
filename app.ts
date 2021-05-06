// enums
// enums can provide context to what could be hardcoded
/*
  New = 1
  Active = 2
  Complete = 3
  Deleted = 4
*/
enum TodoState {
  New = 1,
  Active,
  Complete,
  Deleted
}

interface Todo {
  name: string;
  // state: 1;
  state: TodoState;
}
var todo: Todo = {
  name: "Pick up drycleaning",
  state: TodoState.New
}

// function delete(todo: Todo) {
//   if(todo.state != 3) {    // the meaning of 3 could change of be lost over time
//       throw "Can't delete incomplete task!"
//   }
// }

function deleteTask(todo: Todo) {
  if(todo.state != TodoState.Complete) {
      throw "Can't delete incomplete task!"
  }
}
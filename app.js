// enums
// enums can provide context to what could be hardcoded
/*
  New = 1
  Active = 2
  Complete = 3
  Deleted = 4
*/
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
};
// function delete(todo: Todo) {
//   if(todo.state != 3) {    // the meaning of 3 could change of be lost over time
//       throw "Can't delete incomplete task!"
//   }
// }
function deleteTask(todo) {
    if (todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task!";
    }
}

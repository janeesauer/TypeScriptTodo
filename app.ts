// interfaces
// acts as a contract that decribes the data and the behaviours that the object exposes 
//  for others to interact with

// interfaces are used as compile time checks only 
// stripped out at run time
// defines the data structure of an object
interface Todo {
  name: string;
  completed?: boolean;
}

// interfaces can define method signatures - a service with methods that can be called
interface ITodoService {
  add(todo: Todo): Todo;              // add  Todo - takes in a Todo and returns a Todo
  delete(todoID:number): void;        // delete a Todo - takes in an id and returns void
  getAll(): Todo[];                   // gets all Todo's
  getById(todoId: number): Todo;      // gets a single Todo by id number
  
}

var todo: Todo = {
  name: 'Pick up drycleaning'
}
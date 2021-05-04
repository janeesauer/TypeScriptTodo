// jQuery

interface Todo {
  name:string;
  completed?: boolean;
}

// jQuery library returns jQueryElements
// jQuery Element is a javascript object that has helper methods like the data method that allow you to
// assigning data to a html property or extrace a value from a html property
interface jQuery {
  (selector: (string | any)): jQueryElement;   // return a HTML element type - DOM element
  fn: any;
  version: number;      //   function property without a name
}

interface jQueryElement {
  data(name: string): any;
  data(name: string, data: any) :jQueryElement;
  // don't add your own custome extensions into a third party library that you don't own
}

// anything in second definition of an interface will be tacked on to the origional interface
// best practice for interfaces you don't own
interface jQueryElement {
  todo(): Todo;
  todo(todo: Todo) :jQueryElement;
}
// for an interface that you own add the methods to the interface you created 

// custom method that assigns an instance of a todo the data of a html element
$.fn.todo = function(todo? Todo): Todo {

  if(todo) {
    $(this).data('todo', todo)
  } else {
    return $(this).data('todo'); // or assigns previous todo instance
  }

}

var todo = { name: "Pick up drucleaning" };
var container =  $(`#container`);  // jQuery function used to get a reference to an element
// jQuery used to modify data properties
container.data('todo', todo)  // data method used to assign todo object to the DOM elements data property
//   nemed todo   
var savedTodo = container.data('todo');  // overload of data method used to extract the value just set
//   by calling it with the name of the data property i want to retrieve

container.todo(todo);
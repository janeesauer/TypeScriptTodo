// interface describing a function (a function is an object and can be assigned to a variable)

interface jQuery {
  (selector: string): HTMLElement;   // return a HTML element type - DOM element
  version: number;      //   function property without a name
}

var $ = <jQuery>function(selector) {    // casting syntax - tells typescript that it is jQuery type
  // find DOM element                   //   overrides typescript type checking behavious, so be careful
}                                       //

$.version = 1.12

var element = $('container')
element.

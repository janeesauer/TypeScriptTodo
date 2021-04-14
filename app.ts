// signatures
// 
//overloaded function with alternate signatures that we want to expose

function totalLength(x: string, y:string): number 
function totalLength(x: any[], y:any[]): number
function totalLength(x: (string | any[]), y: (string | any[]) ): number { // union types
  var total: number = x.length + y.length;  

  x.slice(0);

  if ( x instanceof Array ) {   // typeguard syntax
    x.push('abc');
  }

  if ( typeof x === 'string' ) {  // syntax reserved for primative types  or   if( x instanceof String ) - String class
    x.substr(1);
  }
  return total;
};

// when i consume this function it shows the two overload signatures to pass 2 strings or 2 arrays
totalLength()
// overloads are removed when converted to javascript 
// function overloads in typescript can be viewed as metadata to define

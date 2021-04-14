// union types using pipe operator |
// wrap union types in paretheses to mak it cleaner
//
function totallength(x: (string | any[]), y: (string | any[]) ): number { // union types
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
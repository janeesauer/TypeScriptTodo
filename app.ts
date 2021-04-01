// the array can be any as we are only interested in the length of the array.
// typing total as number ensures that id the returned type is changed for any reason there is another type check in place.
function totallength(x: any[], y: string): number {
  var total: number = x.length + y.length;  // method
  return total;
}
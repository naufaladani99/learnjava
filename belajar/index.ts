// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }
// welcomePeople(["a,b,c", "s"]);
// welcomePeople("s");
function nama(a: any) {
  return a;
}
console.log(nama("Nafal"));
console.log(nama([1, 2, 3, 4, true]));

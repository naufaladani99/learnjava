// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 5000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();

//call back
// const penjumlahan = (a, b, callback) => {
//   return callback(a + b);
// };

// const perkalian = (a, b) => {
//   return a * b;
// };

// // console.log(perkalian(penjumlahan(5, 2)));

// const contohCallBack = (a, b, callback) => {
//   return callback(a, b, perkalian);
// };

// console.log(contohCallBack(2, 8, perkalian));

const penjumlahan = (a, b) => {
  return a + b;
};
console.log(penjumlahan(1, 5));

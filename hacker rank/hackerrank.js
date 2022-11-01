// // // let kids = [
// // //   [1, 2, 3],
// // //   [3, 2, 1],
// // // ];
// // // temp = 0;
// // // let alice = 0;
// // // let bob = 0;

// // // for (let i = 0; i < kids.length; i++) {
// // //   for (let j = 0; j < kids[i].length; j++) {
// // //     // console.log(kids[i][j]);
// // //     if (kids[i] > kids[j]) {
// // //       alice += 1;
// // //     } else if (kids[i] < kids[j]) {
// // //       bob += 1;
// // //     } else {
// // //       alice += 0;
// // //       bob += 0;
// // //     }
// // //   }
// // // }
// // // console.log(alice);
// // // console.log(bob);

// // function compareTriplets(a, b) {
// //   let alice = 0;
// //   let bob = 0;
// //   for (let i = 0; i < 3; i++) {
// //     if (a[i] > b[i]) {
// //       alice += 1;
// //     } else if (a[i] < b[i]) {
// //       bob += 1;
// //     } else if (a[i] < b[i]) {
// //       alice += 0;
// //       bob += 0;
// //     }
// //   }
// //   let comparison_array = [alice, bob];
// //   return comparison_array;
// // }

// function aVeryBigSum(ar) {
//   var temp = 0;

//   for (let i = 0; i < ar.length; i++) {
//     temp += ar[i];
//   }
//   return temp;
// }
// console.log(
//   aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
// );
/*
  [11  2   4]
  [4   5   6]
  [10  8 -12]
*/
// function diagonalDifference(arr) {
//   let d1 = 0;
//   let d2 = 0;
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let temp = "";
//     for (let j = 0; j < arr[i].length; j++) {
//       temp = temp + arr[i][j];
//       if (i == j) {
//         d1 += arr[i][j];
//       }
//       if (i + j == arr.length - 1) {
//         d2 += arr[i][j];
//       }
//     }
//   }
//   result = Math.abs(d1 - d2);
//   // console.log(Math.abs(result));
//   let arrai = [result];
//   return arrai;
// }
// console.log(
//   diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ])
// );

function plusMinus(arr) {
  // Write your code here
}

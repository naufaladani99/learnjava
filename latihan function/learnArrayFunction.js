// const Perkalian = (a, b) => {
//   a * b;
// };

// console.log(Perkalian(5, 10));

// for each
let names = ["naufal", "fazil", "kucing", "babi", "monyet"];

names.forEach((names) => {
  console.log(names);
});

//map  = penganti variabel penampung

let kelases = [1, 2, 3, 4, 5];

let angkaKelas = kelases.map((kelas) => {
  return kelas * 2;
});

console.log(angkaKelas);

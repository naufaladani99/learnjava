// function jumlahVolumeDuaKubus(a, b) {
//   var volumeA, volumeB, total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;
//   var total = volumeA + volumeB;

//   return total;
// }

// function hasilJumlah(a, b) {
//   var jumlah;
//   jumlah = a + b;

//   return jumlah;
// }

// function penjumlahan() {
//   var hasil;

//   hasil = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var arai = penjumlahan(2, 3, 4, 5);

// // console.log(arai);

// function plus(a, b, c) {
//   var a, b, c, jmlh;
//   jmlh = a + b + c;
//   return jmlh;
// }
// alert(typeof plus(1, 3, 5));

// var perkalian = function (c, d, e) {
//   var hasil = c * d * e;

//   return hasil;
// };

// alert(perkalian(2, 3, 100));

// var hewan = [];
// hewan = ["sapi", "kuda", "monyet"];

// const arais = [1, perkalian, plus, 4, 5, 6, hewan];

// console.log(arais.join());

// for (var index = 0; index < arais.length; index++) {
//   alert(arais[index]);
// }

// var numberz = [1, 2, 3, 4, 5, 8];

// // numberz.forEach(function (e) {
// //   console.log(e);
// // });

// numberz.map(function (e, i) {
//   console.log(i);
// });

// for (let i = 1; i <= 5; i++) {
//   temp = "";
//   for (let j = 1; j <= 5; j++) {
//     temp = temp + j;
//     console.log(temp);
//   }
// }
//array bljr
// var i = 1;
// var temp = "";
// while (i <= 5) {
//   temp = temp + i;
//   console.log(temp);
//   i++;
// }

// function splitKalimat(arrayKata) {
//   var tempArr = arrayKata.split(" ");
//   return tempArr;
// }

// function cekKata(masukanKata) {
//   var result = splitKalimat(masukanKata);
//   var arrayKataLength = result.length;
//   return arrayKataLength;
// }

// console.log(cekKata("Aku Anak Mamah"));

// function panjangPassword(str) {
//   var strPanjang = str.length;
//   return strPanjang;
// }

//belajar object
// var Warga = {
//   nama: "naufal",
//   umur: 21,
//   status: "jomblo",
//   apakahLulus: true,
// };

// console.log(Warga["apakahLulus"]);

// var contohBuah = {
//   namaBuah: "Mangga",
//   panen: 3,
//   rasa: "enak",
// };

//array dalam object
// function buah(array) {
//   var manggo = {};
//   manggo.namaBuah = array[0];
//   manggo.panen = array[1];
//   manggo.rasa = array[2];
//   return manggo;
// }

// console.log(buah(["Mangga", 3, "enak"]));

// //metod dalam object
// var mobil = {
//   nama: "Avanza",
//   tahun: 2012,
//   Kondisi: "Bekas",
//   bisaJalan: true,

//   car: function () {
//     console.log("Go");
//   },
// };

// var caca = {
//   nama: "caca",
//   berat: 45,
//   tinggi: 155 + " cm",
//   hobi: ["nonton", "makan"],

//   sebutkanHobby: function (hobi) {
//     console.log("Hobi caca :");

//     // this menunjukan bahwa dia manggil si caca atau caca.hobi pada perulangan
//     for (let i = 0; i < this.hobi.length; i++) {
//       console.log(i + 1 + ". " + this.hobi[i]);
//     }
//   },
// };

// caca.sebutkanHobby();

// var person = {
//   firstName: "Muhar",
//   lastName: "Dian",

//   showName: function () {
//     console.log(`Nama: ${this.firstName} ${this.lastName}`);
//   },
// };

// person.showName();

// function Person(firstName, lastName) {
//   // properti
//   this.firstName = firstName;
//   this.lastName = lastName;

//   // method
//   this.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
//   this.showName = function () {
//     console.log(this.fullName());
//   };
// }

// var person1 = new Person("Muhar", "Dian");
// var person2 = new Person("Petani", "Kode");

// person1.showName();
// person2.showName();

// var student = {
//   name: "andy",

//   gpa: 3.05,

//   speak() {
//     console.log(this.name);
//   },
// };

// student.speak();

// var jumlh = function (a) {
//   if (a % 2 === 0) {
//     return "bilangan genap";
//   } else {
//     return "Bilangan ganjil";
//   }
// };

// console.log(jumlh(9));

// // belajar array object
// var items = [
//   {
//     nama: "Asus",
//     tipe: "Laptop",
//     harga: 7500000,
//   },
//   {
//     nama: "Dell",
//     tipe: "Laptop",
//     harga: 7000000,
//   },
//   {
//     nama: "Crossair",
//     tipe: "Ram",
//     harga: 1250000,
//   },
// ];

// console.log(items[1].harga);

/*var students = [
  ["charlie", "A", 87],
  ["berno,A,75"],
  ["Andi", "B", 81],
  ["Ella", "B", 73],
];

function grupKelas(arr2D) {
  var result = [];

  var classA = {
    class: "A",
    students: [],
    scores: [],
  };

  var classB = {
    class: "B",
    students: [],
    scores: [],
  };

  for (var i = 0; i < arr2D.length; i++) {
    if (arr2D[i][1] === "A") {
      classA.students.push(arr2D[i][0]);
      classA.students.push(arr2D[i][2]);
    } else {
      classB.students.push(arr2D[i][0]);
      classB.students.push(arr2D[i][2]);
    }
  }
  result.push(classA);
  result.push(classB);
  return result;
}

grupKelas(students);

console.log(grupKelas.classA);
*/

// function cekPrima(prima) {
//   var faktorPrima = 0;

//   for (var i = 1; i <= prima; i++) {
//     if (prima % i === 0) {
//       faktorPrima++;
//     }
//   }
//   if (faktorPrima === 2) {
//     return faktorPrima;
//     return true;
//   } else {
//     return faktorPrima;
//     return false;
//   }
// }

// console.log(cekPrima(5));
// console.log(cekPrima(30));

var choice;

choice = "drink";

switch (choice) {
  case "food":
    console.log(choice);

    break;

  case "drinks":
    console.log("beverages");

    break;
}

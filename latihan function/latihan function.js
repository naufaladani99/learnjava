/* functin cek password
function cekPassword(str) {
  var cekSandi = panjangPassword(str);
  if (str.length < 6) {
    return "Passwordnya Kurang Panjang";
  } else if (str.length > 12) {
    return "Password Kelebihan";
  } else {
    return "OK";
  }
}

function panjangPassword(str) {
  var strPanjang = str.length;
  return strPanjang;
}
console.log(cekPassword("Akuanakba"));
*/

// soal prima
/* function cekPrima(prima) {
  var faktorPrima = 0;

  for (var i = 1; i <= prima; i++) {
    if (prima % i === 0) {
      faktorPrima++;
    }
  }
  if (faktorPrima === 2) {
    return faktorPrima;
    return true;
  } else {
    return faktorPrima;
    return false;
  }
}

console.log(cekPrima(5));
console.log(cekPrima(30));
*/

/* case mencari max dan min
function minMax(arr) {
  var max = arr[0];
  var min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return {
    max: max,
    min: min,
  };
}
console.log(minMax([10, 3, 5, 12, 7]));
*/

/* menghitung huruf vokal
function Hitungvocal(str) {
  var result = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result.a++;
    } else if (str[i] === "i") {
      result.i++;
    } else if (str[i] === "u") {
      result.u++;
    } else if (str[i] === "e") {
      result.e++;
    } else if (str[i] === "o") {
      result.o++;
    }
  }

  return result;
}
console.log(Hitungvocal("makan nasi goreng"));
*/

function findAverageMax(arr2D) {
  var result = [];

  for (let i = 0; i < arr2D.length; i++) {
    result.push(averageArr(arr2D[i]));
  }

  var max = [0];
  var index = 0;
  for (let i = 0; i < result.length; i++) {
    if (max < result[i]) {
      max = result[i];
      index = i;
    }
  }

  return "Array ke " + (index + 1) + "Merupakan Rata2 Terbesar!";
}

function averageArr(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(
  findAverageMax([
    [10, 3, 5, 7, 5],
    [5, 6, 4, 1, 2],
    [7, 8, 12, 10, 5],
  ])
);

var isAvailable = true;

while (isAvailable) {
  console.log(true);
}

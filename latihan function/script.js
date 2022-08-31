function jumlahVolumeDuaKubus(a, b) {
  var volumeA, volumeB, total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  var total = volumeA + volumeB;

  return total;
}

function hasilJumlah(a, b) {
  var jumlah;
  jumlah = a + b;

  return jumlah;
}

function penjumlahan() {
  var hasil;

  hasil = 0;

  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var arai = penjumlahan(2, 3, 4, 5);

console.log(arai);

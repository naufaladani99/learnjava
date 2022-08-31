function hasilJumlah(a, b) {
  var jumlah;
  jumlah = a + b;

  return jumlah;
}

function jumlahVolumeDuaKubus(a, b) {
  var volumeA, volumeB, total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  var total = volumeA + volumeB;

  return total;
}

console.log(jumlahVolumeDuaKubus(8, 3));

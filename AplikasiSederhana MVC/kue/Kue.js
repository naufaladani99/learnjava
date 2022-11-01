class Kue {
  constructor(idKue, namaKue, hargaKue, bahanKue = [], category) {
    this.idKue = idKue;
    this.namaKue = namaKue;
    this.hargaKue = hargaKue;
    this.bahanKue = bahanKue;
    this.category = category;
  }

  setHarga(harga) {
    this.hargaKue = harga;
  }
  setNamaKue(nama) {
    this.namaKue = nama;
  }
  toString() {
    return `    ${this.idKue} ${this.namaKue} ${this.hargaKue} ${this.hargaKue} ${this.bahanKue} 
    ${this.category}`;
  }
}

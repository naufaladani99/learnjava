export default class Kue {
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
    return `\t 
    No.${this.idKue} 
    Nama Kue: ${this.namaKue} 
    Harga :${this.hargaKue}  
    Bahan-bahan:${this.bahanKue} 
    Kategori:${this.category} \n`;
  }
}

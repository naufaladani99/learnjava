//class Student
//Attribute = name,subjects(array),score
//Method = sebutkanNama() , sebutkanSUbject()

class Student {
  constructor(name, subjects, score) {
    this.name = name;
    this.subjects = subjects;
    this.score = score;
  }
  sebutkanNama() {
    console.log(this.name);
  }
  sebutkanSubject() {
    console.log(this.subjects);
  }
}
//proses instantiaton yaitu mengubah class menjadi object
let andi = new Student("Andi", ["math", "english"], 90);
console.log(andi);
// memanggil method di dalam class OOP
//ket () artinya infog atu kurung tutup karena dia merupakan function
andi.sebutkanSubject();

//end

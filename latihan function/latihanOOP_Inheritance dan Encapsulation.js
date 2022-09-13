/*
Buat class person dengan atribut dasar 
name
age

buat sub class programmer dan student dan berikan
attribut tambahan :
skills di class programmer 
scores di class student

manfaatkan konsep inheritance dan encapsulation
*/

//contoh teori inheritance
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Programmer extends Person {
//   constructor(name, age, skills) {
//     super(name, age);
//     this.skills = skills;
//   }
// }

// class Student extends Person {
//   constructor(name, age, scores) {
//     super(name, age);
//     this.scores = scores;
//   }
// }

// let person = new Person("Andi", 20);
// let programmer = new Programmer("Charlie", 21, ["js", "php", "java"]);
// let student = new Student("Deni", 16, [87, 82]);
// console.log(person);
// console.log(programmer);
// console.log(student);
// end

// contoh Encapsulation
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  //fungsi get untuk mengambil nilai dlam constructor
  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
  //set untuk mengset isi dari attribute ke dalam constuctor
  //di sini menggunakan set harusnya namun karna bentrok jadinya setName deh hehe
  set setName(name) {
    this._name = name;
  }
  set setAge(age) {
    this._age = age;
  }
}

class Programmer extends Person {
  constructor(name, age, skills) {
    super(name, age);
    this._skills = skills;
  }
  get skills() {
    return this._skills;
  }
  set setSkills(skills) {
    this._skills = this.skills;
  }
}

class Student extends Person {
  constructor(name, age, scores) {
    super(name, age);
    this._scores = scores;
  }
  get scores() {
    return this._scores;
  }
  set setScore(scores) {
    this._scores = scores;
  }
}

let person = new Person("Andi", 20);
let programmer = new Programmer("Charlie", 21, ["js", "php", "java"]);
let student = new Student("Deni", 16, [87, 82]);
// console.log(person);
console.log(programmer._name);
// console.log(student);

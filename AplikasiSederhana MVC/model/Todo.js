// const fs ini di taruh di atas agar dapat digunakan berkali2
const fs = require("fs");

class Todo {
  //basic oop
  constructor(id, task, status) {
    this.id = id;
    this.task = task;
    this.status = status || false;
  }
  //get Todos = biar kita ga perlu ngoding berkal2 untuk ngambil data lagi untuk khsus
  //method getTodo
  static getTodos() {
    // untuk nge read atau ambil data dri JSON || bisa di pakai untuk method update dan delete
    let data = fs.readFileSync("./data.json", "utf8");
    let parseData = JSON.parse(data);
    //menghasilkan array baru dan menghasilkan array baru dari parseData
    let todos = parseData.map((element) => {
      const { id, task, status } = element;
      // membuat instance baru
      return new Todo(id, task, status);
    });
    return todos;
  }
  static show() {
    let todos = this.getTodos();
    return todos;
  }
  //membuat add
  static add(todo) {
    let todos = this.getTodos();
    let id = todos[todos.length - 1].id + 1;
    let task = todo[0];

    //pembuatan instance baru dari class
    let temp = new Todo(id, task);
    //memasukan object baru
    todos.push(temp);

    // console.log(todos);
    // menyimpan data yg di push ke dalam array yang di json
    this.save(todos);
  }
  static delete(todo) {
    let todos = this.getTodos();
    //number agar bisa di filter
    let id = Number(todo[0]);
    todos = todos.filter((todo) => todo.id !== id);
    // console.log(todos);
    this.save(todos);
  }

  static update(todo) {
    let todos = this.getTodos();
    //number agar bisa di filter
    let id = Number(todo[0]);
    let task = todo[1];
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.task = task;
      }
      return todo;
    });
    this.save(todos);
  }
  //memasukan menyimpan data berulang2 ke json
  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3)); //stringfy  = function untuk convert object di json menjadi string ,
    //3 yg di maksud setelah null yaitu jumlah data di jsonnya
  }
}

//untuk mengeksport function todo controller
module.exports = Todo;

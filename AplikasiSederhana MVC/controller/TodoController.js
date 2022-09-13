//import data dari file view -> Todo.js
const Todo = require("../model/Todo");
const TodoView = require("../view/TodoView");

class TodoController {
  //static = untuk membuat method tapi tidak perlu nge extends lagi
  // kita langsung bisa panggil methodnya aja
  static show() {
    // console.log("Controller Show");
    let todos = Todo.show();
    TodoView.show(todos);
  }
  static add(todo) {
    Todo.add(todo);
  }
  static delete(todo) {
    Todo.delete(todo);
  }
  static update(todo) {
    Todo.update(todo);
  }
  static message(msg) {
    TodoView.message(msg);
  }
}

//untuk mengeksport function todo controller
module.exports = TodoController;

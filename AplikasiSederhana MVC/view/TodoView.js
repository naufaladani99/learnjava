class TodoView {
  static show(todos) {
    // console.log(todos);
    console.log("Todo List : ");
    //todo di sini merupakan hasil perulangan dari array object todos
    todos.forEach((todo) => {
      const { id, task, status } = todo;
      //kondisi jika lulus
      if (status) {
        console.log(`${id}. [x] ${task}`);
      } else {
        console.log(`${id}. [ ] ${task}`);
      }
    });
  }
  static message(msg) {
    console.log(msg);
  }
}

//untuk mengeksport function todo controller
module.exports = TodoView;

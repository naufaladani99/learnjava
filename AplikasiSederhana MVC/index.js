//proses Argv : bisa mengambil input dari terminal
// commad : show , add ,delete , update
const commad = process.argv[2];
const params = process.argv.slice(3);
// console.log(commad);
// console.log(params);

//cara import modul TodoController
const TodoController = require("./controller/TodoController");

switch (commad) {
  case "show":
    // console.log("Commad show");

    TodoController.show();
    break;
  case "add":
    TodoController.add(params);
    break;
  case "delete":
    TodoController.delete(params);
    break;
  case "update":
    TodoController.update(params);
    break;
  default:
    TodoController.message("Masukkan Controller yang benar!!!");
    break;
}

//read file json
const fs = require("fs");
//utf8 = encoding agar jadi string
let data = fs.readFileSync("./db.json", "utf8");
//fungsi pharse string to object
let pharseData = JSON.parse(data);
// console.log(pharseData);

pharseData.forEach((data) => {
  console.log(`${data.id}. ${data.name}, ${data.score} `);
});
// console.log();
// pharseData.forEach((data) => {
//   console.log(data.id + ". " + data.name + ", " + data.score);
// });

//result :
/*
List Students : 
1. Andi , 90
2. Charlie , 85
*/

const express = require("express"); //buat memanggil modul expres
const app = express();

app.get("/", (req, res) => {
  //req = request res=response
  res.send("Halo kawan");
});

app.get("/mahasiswa", (req, res) => {
  const mahasiswa = {
    nama: "Naufal",
    umur: 21,
    kuliah: "raharja",
  };
  res.json(mahasiswa);
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});

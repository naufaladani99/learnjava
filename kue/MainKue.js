import Kue from "./Kue.js";

const kue1 = new Kue(
  1,
  "kue pukis coklat",
  1000,
  ["tepung", "telur", "gula"],
  "rasa coklat"
);
const kue2 = new Kue(
  2,
  "donat strobery",
  4000,
  ["tepung", "telur", "gula"],
  " rasa strobery"
);
const kue3 = new Kue(
  3,
  "kue soues",
  3000,
  ["tepung", "telur", "gula"],
  "kue basah"
);
const kue4 = new Kue(
  4,
  "nastar",
  6000,
  ["tepung", "telur", "gula"],
  "kue kering"
);
const kue5 = new Kue(
  5,
  "bronies",
  1000,
  ["tepung", "telur", "gula"],
  "rasa coklat"
);
console.log(
  kue1.toString(),
  kue2.toString(),
  kue3.toString(),
  kue4.toString(),
  kue5.toString()
);

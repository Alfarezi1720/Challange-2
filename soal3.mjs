//melakukan import dari soal nomor 2 dan mengubah ekstensi menjadi .mjs sehingga tidak usah membuat package.json

import { checkTypeNumber } from "./soal2.mjs";

export function checkEmail(email) {
  var RE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (RE.test(email) === true) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("apranata@binar.co.id")); // "VALID"
console.log(checkEmail("apranata@binar.com")); // "VALID"
console.log(checkEmail("apranata@binar")); // "INVALID"
console.log(checkEmail("apranata")); // "INVALID"

console.log(checkTypeNumber(checkEmail(3322))); // "INVALID" karena ini bukan email dan output yang keluar adalah "Error: Invalid Data Type" karena melakukan import dari soal nomor 2

console.log(checkEmail()); // "INVALID"

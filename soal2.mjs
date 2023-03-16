//melakukan export ke soal nomor 3 dan mengubah ekstensi menjadi .mjs sehingga tidak usah membuat package.json

export function checkTypeNumber(givenNumber) {
  if (givenNumber % 2 == 0 && typeof givenNumber == "number") {
    return "GENAP";
  } else if (givenNumber % 2 !== 0 && typeof givenNumber == "number") {
    return "GANJIL";
  } else if (givenNumber == null) {
    return "Error: Bro Where is the code?";
  } else {
    return "Error: Invalid Data Type";
  }
}
  
  console.log(checkTypeNumber(10));
  console.log(checkTypeNumber(3));
  console.log(checkTypeNumber("3")); // output yang keluar "error: invalid data type"
  console.log(checkTypeNumber({}));  // output yang keluar "error: invalid data type"
  console.log(checkTypeNumber([])); // output yang keluar "error: invalid data type"
  console.log(checkTypeNumber());   // output yang keluar "bro where is the code"
  
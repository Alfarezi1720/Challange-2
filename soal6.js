function getAngkaTerbesarKedua(dataNumbers) {
  if (!Array.isArray(dataNumbers)) {
    return "Parameter harus berupa array!";
  }

  if (dataNumbers.length < 2) {
    return "Harus ada input array dengan minimal 2 angka!";
  }

  const maxNumber = Math.max(...dataNumbers);
  const maxNumberIndex = dataNumbers.indexOf(maxNumber);
  dataNumbers.splice(maxNumberIndex, 1);

  const secondMaxNumber = Math.max(...dataNumbers);

  return secondMaxNumber;
}

const dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataNumbers));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

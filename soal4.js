function isValidPassword(givenPassword) {
  if (givenPassword === undefined) {
    return "Error: Parameter tidak boleh kosong";
  }

  if (typeof givenPassword !== "string") {
    return "Error: Parameter harus berupa string";
  }

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(givenPassword);
  const hasLowerCase = /[a-z]/.test(givenPassword);
  const hasNumber = /\d/.test(givenPassword);

  return (
    givenPassword.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber
  );
}

console.log(isValidPassword("Meong2021")); //karena memenuhi reuirment
console.log(isValidPassword("meong2021")); //karena tidak memenuhi requirment karena huruf "m" kecil
console.log(isValidPassword("@eong")); //karena tidak ada angka dan terdiri hanya 5 huruf
console.log(isValidPassword("Meong2")); //karena Meong2 hanya hanya 6 huruf
console.log(isValidPassword(0)); //Error: Parameter harus berupa string
console.log(isValidPassword()); //Error: Parameter tidak boleh kosong

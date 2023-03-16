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

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());

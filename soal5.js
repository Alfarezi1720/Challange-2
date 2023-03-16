function getSplitName(personName) {
  if (typeof personName !== "string") {
    return "Parameter harus bertipe string!";
  }

  const nameArr = personName.split(" ");

  if (nameArr.length > 3) {
    return "Error: This function is only for 3 characters name";
  }

  let firstName = nameArr[0];
  let middleName = null;
  let lastName = null;

  if (nameArr.length > 1) {
    lastName = nameArr[nameArr.length - 1];
    if (nameArr.length === 3) {
      middleName = nameArr[1];
    }
  }

  return {
    firstName,
    middleName,
    lastName,
  };
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));

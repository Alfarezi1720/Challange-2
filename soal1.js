function changeWord(selectedText, changedText, text) {
    return text.replace(selectedText, changedText);
  };
  
  const kalimat1 = "Andini mencintai kamu selamanya";
  const kalimat2 = "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";
  
  console.log(changeWord("mencintai", "membenci", kalimat1))
  console.log(changeWord("Bromo", "Sumeru", kalimat2))
  
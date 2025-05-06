function generatePassword() {
  const passwordLength = Number(document.getElementById("textBox").value);
  const allowLowercase = document.getElementById("lowercaseBtn").checked;
  const allowUppercase = document.getElementById("uppercaseBtn").checked;
  const allowNumber = document.getElementById("NumbersBtn").checked;
  const allowSymbol = document.getElementById("SymbolsBtn").checked;
  const result = document.getElementById("result");

  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const UppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "1234567890";
  const symbolChar = "`~!@#$%^&*()-_=+[{]}\\|;:',<.>/?";

  let allowedChar = "";
  let password = "";

  allowedChar += allowLowercase ? lowercaseChar : "";
  allowedChar += allowUppercase ? UppercaseChar : "";
  allowedChar += allowNumber ? numberChar : "";
  allowedChar += allowSymbol ? symbolChar : "";

  if (passwordLength <= 0) {
    result.textContent = `Password length must be at least 1`;
    return;
  }

  if (allowedChar.length === 0) {
    result.textContent = `At least one set of characters needs to be selected`;
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChar.length); // ? why named randomIndex
    password += allowedChar[randomIndex];
  }

  result.textContent = `Your Generated Password: ${password}`;
}

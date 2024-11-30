document.getElementById("generate-btn").addEventListener("click", generatePassword);

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";

  let charSet = "";
  if (includeLowercase) charSet += lowercase;
  if (includeUppercase) charSet += uppercase;
  if (includeNumbers) charSet += numbers;
  if (includeSymbols) charSet += symbols;

  if (!charSet) return alert("Please select at least one character type.");

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  document.getElementById("password").value = password;
}

document.getElementById("length").addEventListener("input", (e) => {
  document.getElementById("length-value").textContent = e.target.value;
});

document.getElementById("copy-btn").addEventListener("click", () => {
  const password = document.getElementById("password");
  password.select();
  navigator.clipboard.writeText(password.value);
  alert("Password copied to clipboard!");
});
export function generatePassword(
  length,
  uppercase,
  lowercase,
  numbers,
  symbols
) {
  let characters = "";
  const upperCases = uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const lowercases = lowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
  const numbersList = numbers ? "0123456789" : "";
  const symbolsList = symbols ? "!@#$%^&*()_-+={}[];:'\"\\|,.<>?/" : "";
  characters = upperCases + lowercases + numbersList + symbolsList;
  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

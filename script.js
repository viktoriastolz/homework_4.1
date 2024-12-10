"use strict";

const fiveDigitNumberInput = prompt("Enter a five-digit number");

if (fiveDigitNumberInput === null) {
  alert("Okay, bye");
} else if (
  !fiveDigitNumberInput?.trim() || 
  isNaN(fiveDigitNumberInput) || 
  !Number.isInteger(+fiveDigitNumberInput)
) {
  alert("Error: invalid number");
} else {
  const num = Math.abs(+fiveDigitNumberInput);
  if (String(num).length === 5 && fiveDigitNumberInput.trim() === String(num)) {
    const digits = String(num).split("").join(" ");
    alert(digits);
  } else {
    alert("Error: Number is not five-digit or has leading zeros");
  }
}

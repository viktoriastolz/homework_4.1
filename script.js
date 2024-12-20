"use strict";

const userName = prompt("What's your name?");

if (!userName?.trim()) {
  alert("Error: Name cannot be empty or whitespace");
} else if (!isNaN(userName.trim())) { 
  alert("Error: Name cannot be a number");
} else if (userName.trim().length < 2) {
  alert("Error: Name must be at least 2 characters long");
} else if (userName.trim().length > 50) {
  alert("Error: Name must not exceed 50 characters");
} else {
  alert(`Hello, ${userName.trim()}! How are you?`);
}

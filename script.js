"use strict";

const userName = prompt("Add your name");

if (userName === null) {
  alert("Ok, bye");
} else if (!userName.trim()) {
  alert("Error: Name cannot be empty or whitespace");
} else if (!/^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ]+$/.test(userName.trim())) {
  alert("Error: Name can only contain letters");
} else if (userName.trim().length < 2) {
  alert("Error: Name must be at least 2 characters long");
} else if (userName.trim().length > 50) {
  alert("Error: Name must not exceed 50 characters");
} else {
  alert(`Hello, ${userName.trim()}! How are you?`);
}

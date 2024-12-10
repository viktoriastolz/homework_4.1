"use strict";

const userName = prompt("Add your name");

if (userName === null) {
  alert("Ok, bye");
} else if (!userName.trim()) {
  alert("Error: Name cannot be empty or whitespace");
} else if (!/^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ]+$/.test(userName.trim())) {
  alert("Error: Name can only contain letters");
} else if (/\s/.test(userName)) {
  alert("Error: Name cannot contain spaces");
} else if (userName.trim().length < 2) {
  alert("Error: Name must be at least 2 characters long");
} else if (userName.trim().length > 50) {
  alert("Error: Name must not exceed 50 characters");
} else if (
  userName.trim().charAt(0) !== userName.trim().charAt(0).toUpperCase() || 
  userName.trim().slice(1) !== userName.trim().slice(1).toLowerCase()
) {
  alert("Error: Name must start with a capital letter, and the rest must be lowercase");
} else {
  alert(`Hello, ${userName.trim()}! How are you?`);
}

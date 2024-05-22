 // Get the elements by their IDs
const monthNameE1 = document.getElementById("month-name");
const dayNameE1 = document.getElementById("day-name");
const dayNumberE1 = document.getElementById("day-number");
const yearE1 = document.getElementById("year");

// Get the current date
const currentDate = new Date();

// Get month, day name, day number, and year from the current date
const month = currentDate.toLocaleString("en", { month: "long" });
const dayName = currentDate.toLocaleString("en", { weekday: "long" });
const dayNumber = currentDate.getDate();
const year = currentDate.getFullYear();

// Update the HTML elements with the current date values
monthNameE1.innerText = month;
dayNameE1.innerText = dayName;
dayNumberE1.innerText = dayNumber;
yearE1.innerText = year;

 

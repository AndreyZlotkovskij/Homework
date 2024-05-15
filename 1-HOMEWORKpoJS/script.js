// Считываем имя пользователя
const userName = prompt("Please enter your name:");

// Считываем возраст пользователя
const userAge = parseInt(prompt("Please enter your age:"));

// Проверяем возраст и взаимодействуем с пользователем в соответствии с условиями
if (userAge < 18) {
  alert("You are not allowed to visit this website.");
} else if (userAge >= 18 && userAge <= 22) {
  const confirmResult = confirm("Are you sure you want to continue?");
  if (confirmResult) {
    alert("Welcome, " + userName);
  } else {
    alert("You are not allowed to visit this website.");
  }
} else {
  alert("Welcome, " + userName);
}

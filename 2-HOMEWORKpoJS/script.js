// Запросить число у пользователя через модальное окно
const userInput = prompt("Введите число:");

// Проверить, что пользователь ввел число
if (isNaN(userInput)) {
  console.log("Вы ввели не число. Пожалуйста, попробуйте еще раз.");
} else {
  // Преобразовать введенную строку в число
  const number = parseInt(userInput);

  // Проверить, что число больше 0
  if (number > 0) {
    // Создать массив для хранения чисел, кратных 5
    const multiplesOfFive = [];

    // Найти все числа, кратные 5, в заданном диапазоне и добавить их в массив
    for (let i = 0; i <= number; i += 5) {
      multiplesOfFive.push(i);
    }

    // Проверить, есть ли кратные 5 числа
    if (multiplesOfFive.length > 0) {
      console.log("Числа кратные 5 в заданном диапазоне:");
      console.log(multiplesOfFive);
    } else {
      console.log("Sorry, no numbers");
    }
  } else {
    console.log("Число должно быть больше 0. Пожалуйста, попробуйте еще раз.");
  }
}

function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Деление на 0 невозможно';
        }
        return num1 / num2;
      default:
        return 'Неподдерживаемая операция';
    }
  }
  
  // Запросить два числа у пользователя через модальное окно
  const userInput1 = parseFloat(prompt("Введите первое число:"));
  const userInput2 = parseFloat(prompt("Введите второе число:"));
  
  if (isNaN(userInput1) || isNaN(userInput2)) {
    console.log("Одно или оба введенных значения не являются числами. Пожалуйста, попробуйте еще раз.");
  } else {
    const userOperator = prompt("Введите математическую операцию (+, -, *, /):");
  
    // Выполнить операцию и вывести результат в консоль
    const result = calculate(userInput1, userInput2, userOperator);
    console.log(`Результат операции ${userInput1} ${userOperator} ${userInput2} = ${result}`);
  }
  
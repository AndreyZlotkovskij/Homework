function filterBy(array, type) {
    // Фильтруем массив с помощью метода filter()
    return array.filter(item => typeof item !== type);
  }
  
  // Пример использования функции
  const arr = ['hello', 'world', 23, '23', null];
  const filteredArray = filterBy(arr, 'string');
  console.log(filteredArray); // Ожидаемый результат: [23, null]
  
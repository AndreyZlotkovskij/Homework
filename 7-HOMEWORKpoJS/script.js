  
  function displayLists(arrays) {
    const listElement = document.getElementById('list');
  
    arrays.forEach(array => {
      const sublistContent = array.map(item => `<li>${item}</li>`).join('');
      const sublistElement = document.createElement('ul');
      sublistElement.innerHTML = sublistContent;
      listElement.appendChild(sublistElement);
    });
  }
  
 
  const array1 = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
  const array2 = ["---------------------------------------------------"];
  const array3 = ['1', '2', '3', 'sea', 'user', 23];
  
 
  displayLists([array1, array2, array3]);
  
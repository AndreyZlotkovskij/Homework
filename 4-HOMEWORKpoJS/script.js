function createNewUser() {
    const firstName = prompt("Введите ваше имя:");
    const lastName = prompt("Введите вашу фамилию:");
  
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      getLogin: function() {
        return (this.firstName.charAt(0) + this.lastName).toLowerCase();
      }
    };
  
    return newUser;
  }
  
  const user = createNewUser();
  console.log(user.getLogin());
  
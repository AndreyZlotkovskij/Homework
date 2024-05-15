function createNewUser() {
    const firstName = prompt("Введите ваше имя:");
    const lastName = prompt("Введите вашу фамилию:");
    const birthdayString = prompt("Введите вашу дату рождения в формате dd.mm.yyyy:");
  
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      birthday: new Date(birthdayString),
  
      getAge: function() {
        const today = new Date();
        const birthDate = new Date(this.birthday);
        
        let age = today.getFullYear() - birthDate.getFullYear();
  
        // Проверка, является ли текущая дата меньше даты рождения в этом году
        const birthDateThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (today < birthDateThisYear) {
          age--;
        }
  
        return age;
      },
  
      getPassword: function() {
        return (
          this.firstName.charAt(0).toUpperCase() +
          this.lastName.toLowerCase() +
          this.birthday.getFullYear()
        );
      }
    };
  
    return newUser;
  }
  
  const user = createNewUser();
  console.log("Пользователь:", user);
  console.log("Возраст пользователя:", user.getAge());
  console.log("Пароль пользователя:", user.getPassword());
  
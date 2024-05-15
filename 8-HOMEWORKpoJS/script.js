const priceInput = document.getElementById('price');

    priceInput.addEventListener('focus', function() {
      this.classList.add('green-border');
    });

    priceInput.addEventListener('blur', function() {
      this.classList.remove('green-border', 'red-border');

      const price = parseFloat(this.value);

      if (isNaN(price) || price <0) {
        this.classList.add('red-border');
        showError();
      } else {
        hideError();
        showPriceInfo(price);
      }
    });

    function showError() {
      const errorText = document.createElement('div');
      errorText.textContent = 'Please enter correct price';
      errorText.id = 'price-info';
      errorText.classList.add('error');
      priceInput.parentNode.appendChild(errorText);
    }

    function hideError() {
      const errorText = document.getElementById('price-info');
      if (errorText) {
        errorText.remove();
      }
    }

    function showPriceInfo(price) {
      hidePriceInfo();
      const priceInfo = document.createElement('span');
      priceInfo.textContent = `Текущая цена: ${price}`;
      priceInfo.id = 'price-info';
      priceInput.parentNode.appendChild(priceInfo);

      const removeButton = document.createElement('button');
      removeButton.textContent = 'X';
      removeButton.id = 'remove-price';
      removeButton.addEventListener('click', function() {
        priceInput.value = '';
        hidePriceInfo();
      });
      priceInput.parentNode.appendChild(removeButton);
    }

    function hidePriceInfo() {
      const priceInfo = document.getElementById('price-info');
      if (priceInfo) {
        priceInfo.remove();
      }
      const removeButton = document.getElementById('remove-price');
      if (removeButton) {
        removeButton.remove();
      }
    }
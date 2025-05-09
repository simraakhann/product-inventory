const form = document.getElementById('inventoryForm');

  const productName = document.getElementById('productName');
  const productDescription = document.getElementById('productDescription');
  const productQuantity = document.getElementById('productQuantity');
  const productPrice = document.getElementById('productPrice');

  const nameError = document.getElementById('nameError');
  const descError = document.getElementById('descError');
  const quantityError = document.getElementById('quantityError');
  const priceError = document.getElementById('priceError');

  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(event){
    event.preventDefault();
    let valid = true;

    // Reset error messages
    [nameError, descError, quantityError, priceError].forEach(el => el.style.display = 'none');
    successMessage.style.display = 'none';

    // Validate Product Name
    if(productName.value.trim() === ''){
      nameError.style.display = 'block';
      valid = false;
    }

    // Validate Product Description
    if(productDescription.value.trim() === ''){
      descError.style.display = 'block';
      valid = false;
    }

    // Validate Product Quantity
    const quantity = productQuantity.value;
    if(quantity === '' || isNaN(quantity) || !Number.isInteger(Number(quantity)) || Number(quantity) < 1){
      quantityError.style.display = 'block';
      valid = false;
    }

    // Validate Product Price
    const price = productPrice.value;
    if(price === '' || isNaN(price) || Number(price) <= 0){
      priceError.style.display = 'block';
      valid = false;
    }

    if(valid){
      successMessage.style.display = 'block';
      // Optionally reset form
      form.reset();
    }
  });
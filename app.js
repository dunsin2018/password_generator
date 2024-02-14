function generatePassword() {
    // Create character sets for each type
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '$@%&*';
    
    // Initialize an empty password
    let password = '';
    
    // Ask the user for password length
    let passwordLength = parseInt(prompt('Enter password length (8-128 characters):'));
    
    // Validate the password length
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      passwordLength = parseInt(prompt('Invalid length. Enter a valid password length (8-128 characters):'));
    }
    
    // Ask the user for character types
    const hasLowercase = confirm('Include lowercase letters?');
    const hasUppercase = confirm('Include uppercase letters?');
    const hasNumeric = confirm('Include numbers?');
    const hasSpecial = confirm('Include special characters?');
    
    // Validate that at least one character type is selected
    if (!(hasLowercase || hasUppercase || hasNumeric || hasSpecial)) {
      alert('At least one character type must be selected.');
      return;
    }
    
    // Create a pool of characters based on selected types
    let charPool = '';
    if (hasLowercase) charPool += lowercaseChars;
    if (hasUppercase) charPool += uppercaseChars;
    if (hasNumeric) charPool += numericChars;
    if (hasSpecial) charPool += specialChars;
    
    // Generate password
    for (let i = 0; i < passwordLength; i++) {
      password += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }
    
    // Display password in the textarea
    document.getElementById('passwordDisplay').value = password;
  }
  
  // Attach the function to a button click event
  document.getElementById('generatePasswordButton').addEventListener('click', generatePassword);
  
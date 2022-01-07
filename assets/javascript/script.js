var specialChar = [
    '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
  ];
  var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerChar = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
  var upperChar = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
  ];
  function getPasswordOptions() {
    var length = parseInt(
      prompt('How many characters you want in your password?')
    );
    if (Number.isNaN(length)) {
      alert('Password length must be typed in a number');
      return null;
    }
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return null;
    }
    if (length > 128) {
      alert('Password length must be less than 129 characters');
      return null;
    }
    var addSpecialChar = confirm(
      'Click OK to confirm adding special characters.'
    );
    var addNumericChar = confirm(
      'Click OK to confirm adding numeric characters.'
    );
    var addLowerChar = confirm(
      'Click OK to confirm adding lowercase characters.'
    );
    var addUpperChar = confirm(
      'Click OK to confirm adding uppercase characters.'
    );
    if (
      addSpecialChar === false &&
      addNumericChar === false &&
      addLowerChar === false &&
      addUpperChar === false
    ) {
      alert('Must select at least one character type');
      return null;
    }
    var passwordOptions = {
      length: length,
      addSpecialChar: addSpecialChar,
      addNumericChar: addNumericChar,
      addLowerChar: addLowerChar,
      addUpperChar: addUpperChar
    };
  
    return passwordOptions;
  }
  function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
  
    return randomElement;
  }
  function generatePassword() {
    var options = getPasswordOptions();
    var result = [];
    var possibleChar = [];
    var guaranteedChar = [];
    if (!options) return null;
    if (options.addSpecialChar) {
      possibleChar = possibleChar.concat(specialChar);
      guaranteedChar.push(getRandom(specialChar));
    }
    if (options.addNumericChar) {
      possibleChar = possibleChar.concat(numericChar);
      guaranteedChar.push(getRandom(numericChar));
    }
    if (options.addLowerChar) {
      possibleChar = possibleChar.concat(lowerChar);
      guaranteedChar.push(getRandom(lowerChar));
    }
    if (options.addUpperChar) {
      possibleChar = possibleChar.concat(upperChar);
      guaranteedChar.push(getRandom(upperChar));
    }
    for (var i = 0; i < options.length; i++) {
      var possibleChars = getRandom(possibleChar);
      result.push(possibleChars);
    }
    for (var i = 0; i < guaranteedChar.length; i++) {
      result[i] = guaranteedChar[i];
    }
    return result.join('');
  }
  var generateBtn = document.querySelector('#generate');
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
  generateBtn.addEventListener('click', writePassword);
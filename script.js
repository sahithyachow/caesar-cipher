// Encrypts and Decrypts
// positive key = encrypts
// negative key = decrypts
function caesar_cipher(string, key) {
  var output = "";

  if ((key > 26) || (key < -26)) {
    key = key % 26;
  }

  for (var i = 0; i < string.length; i++) {
    var unicode = string.charCodeAt(i);

    // Uppercase letter
    if ((unicode >= 65) && (unicode <= 90)) {
      // Shift any uppercase letters down to the 0-25 range before using the % operator
      // Then shift it back to the 65-90 range to convert the resulting Unicode value back into a string
      var res_unicode = ((26 + unicode - 65 + key) % 26) + 65;
      output += String.fromCharCode(res_unicode);
    }
    // Lowercase letter
    else if ((unicode >= 97) && (unicode <= 122)) {
      var res_unicode = ((26 + unicode - 97 + key) % 26) + 97;
      output += String.fromCharCode(res_unicode);
    }
    // Not a letter
    else {
      output += String.fromCharCode(unicode);
    }
  }

  return output;
}

function encrypt() {
  console.log("Encrypted!");
  document.getElementById("encrypt_output").innerText = caesar_cipher(document.getElementById("plaintext").value, parseInt(document.getElementById("encrypt_key").value));
}

function decrypt() {
  console.log("Decrypted!");
  document.getElementById("decrypt_output").innerText = caesar_cipher(document.getElementById("ciphertext").value, -parseInt(document.getElementById("decrypt_key").value));
}

// Makes sure that the encrypt and decrypt functions are called upon clicking the corresponding buttons
document.getElementById("encrypt").addEventListener("click", function() {encrypt()});
document.getElementById("decrypt").addEventListener("click", function() {decrypt()});
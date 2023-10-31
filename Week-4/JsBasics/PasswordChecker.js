// Write a function called isStrongPassword() that has a single password parameter. The function should return true only if all the following conditions are true:

// The password is at least 8 characters long.
// The password does not contain the string "password".
// The password contains at least one uppercase character.
// If any of the above conditions are false, isStrongPassword() should return false.

function isStrongPassword(password){
   return password.length >=8 && !password.includes("password") && /[A-Z]/.test(password);
}
module.exports = function (str) {
   /* return whether str starts with a vowel or a digit */
   let regex = /^[aeiou0-9]/;
   return regex.test(str);
 }

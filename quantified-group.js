module.exports = function (str) {
   let regex = /^(0x[A-Fa-f\d]{2}\s+){8}$/;
   return regex.test(str);
}

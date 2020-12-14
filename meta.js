module.exports = function (str) {
  let regex = /\.$/;
  return regex.test(str);
}

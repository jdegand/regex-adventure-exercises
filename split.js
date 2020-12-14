module.exports = function (str) {
  let regex = /[,\s ]+/;
  return str.split(regex)
}

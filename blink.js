const marked = require('marked')
module.exports = function (str) {
  let regex = /@@(.+?)@@/g;
  return marked(str.replace(regex, '<blink>$1</blink>'))
}
//$1 variable is a reference to capture group in the regex
//if there was another capture group $2 would refer to it

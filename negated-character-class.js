module.exports = function (str) {
    let regex = /[\D][^A-Z]/;
    return regex.test(str);
}

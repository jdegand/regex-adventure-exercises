module.exports = function (str) {
    let regex = /^\d+\.jpe?g$/;
    return regex.test(str);
}

module.exports = function (str) {
    let regex = /^(cat|dog|robot)\d+$/;
    return regex.test(str);
}

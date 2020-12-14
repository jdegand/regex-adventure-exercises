module.exports = function (str) {
    /* return whether str contains the string "LITERALLY" */
    let regex = /LITERALLY/;
    return regex.test(str);
}

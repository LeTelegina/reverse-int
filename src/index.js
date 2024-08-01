module.exports = function reverse (n) {
    let word = n.toString();
    let reversed = word.split('').reverse().join('');
    return parseInt(reversed);
}

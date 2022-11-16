function createEnum() {
    const enumObject = {};
    for (let i = 0; i < 9; i++) {
        enumObject[i] = i.toString();
    }
    return Object.freeze(enumObject);
}

module.exports = createEnum();
/* const Values = Object.freeze({
    0: Symbol("0"),
    1: Symbol("1"),
    2: Symbol("2"),
    3: Symbol("3"),
    4: Symbol("4"),
    5: Symbol("5"),
    6: Symbol("6"),
    7: Symbol("7"),
    8: Symbol("8"),
    Bomba: Symbol("bomba"),
}); */

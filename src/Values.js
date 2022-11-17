function createValues() {
    const valuesObject = {};
    for (let i = 0; i < 9; i++) {
        valuesObject[i] = i.toString();
    }
    valuesObject["Bomb"] = "bomb";
    return Object.freeze(valuesObject);
}

module.exports = createValues();

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
    Bomb: Symbol("bomb"),
}); */

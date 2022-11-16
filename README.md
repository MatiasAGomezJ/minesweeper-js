# Minesweeper

Celulas:
 - isActivated
 - Value (0-8 y Bomba(ENUM?))
 - setValue()

Matriz:
 - Dimensiones (x·x)
 - Numero bombas
 - Celulas
 - selectedCell
 - checkSurroundingsOf((selectedCell) => {
    if bomb return bomb
    count bombs at surroundings
 })
 - activateCell(() => {
    if (firstClick) {
        Poblate cells(selectedCell);
    }
    value = checkSurroundingsOf(selectedCell);
    selectedCell.setValue(value);
    checkStatus(cell)
 })
 - checkStatus(() => {
    Si selectedCell es bomba => Perder
    Si no mas celdas => Ganar
 })
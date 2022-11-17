const { expect } = require("@jest/globals");
const Values = require("../Values");

test("Check values of Values", () => {
    expect(Values).toMatchObject(
        {
            0: "0",
            "Bomb": "bomb" 
        }); 
});
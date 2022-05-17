it("YOUR MESSAGE HERE", () => {
    // expect('value').toBe('value');
  });
  
  it("tests type of data", () => {
    //numbers
    expect(typeof 1).toBe("number");
    expect(typeof 2.0234).toBe("number");
  
    //strings- characters
    expect(typeof "hello").toBe("string");
    expect(typeof "hello").toBe("string");
    expect(typeof `hello`).toBe("string");
  
    //arrays
    expect(typeof [2, 4]).toBe("object");
    expect(Array.isArray([2, 4])).toBe(true);
  
    //object
    expect(typeof { name: "james", age: 89 }).toBe("object");
  
    //boolean
    expect(typeof true).toBe("boolean");
    expect(typeof false).toBe("boolean");
  
    //NaN Not a number
    expect(isNaN(NaN)).toBe(true);
    expect(isNaN("asdf")).toBe(true);
    expect(isNaN(0)).toBe(false);
  
    //undefined and null
    let noValue;
    let explicitlyNull = null;
  
    expect(noValue).toBe(undefined);
    expect(noValue).not.toBe(null);
  
    expect(explicitlyNull).toBe(null);
    expect(explicitlyNull).not.toBe(undefined);
  });
  
  it("tests booleans and boolean logic", () => {
    // && - both must be true
    expect(true && false).toBe(false);
    // || - one one has to be true
    expect(true || false).toBe(true);
    // ! - make it the opposite
    expect(!false).toBe(true);
    // can get crazy with these...REAL CRAZY!
    expect(true || false && (true ||!false)).toBe(true);
  });
  
  it("tests == and ===", () => {
    expect("hello" === "hello").toBe(true);
    expect("hello" === "HELLO").toBe(false);
  
    //!== not equal
    expect("hello" !== "HELLO").toBe(true);
  
    // === check type
    expect(1 === "1").toBe(false);
    // == don't check type
    expect(1 == "1").toBe(true);
  });
  
  it("tests js operators", () => {
    // addition +
    expect(1 + 1).toBe(2);
    // subtraction -
    expect(1 - 1).toBe(0);
  
    // multiplication *
    expect(4 * 4).toBe(16);
  
    // division /
    expect(4 / 4).toBe(1);
    expect(3 / 2).toBe(1.5);
  
    // modulus % reminder of division
    expect(4 % 2).toBe(0);
    expect(5 % 2).toBe(1);
  
    let num = 2;
    //2+1
    num++;
    expect(num).toBe(3);
    //3*3
    num *= 3;
    expect(num).toBe(9);
    //9-3
    num -= 3;
    expect(num).toBe(6);
  });
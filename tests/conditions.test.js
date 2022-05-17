it('testing conditions',()=>{
    //if statements
    //declaring a variable num, am assigning it a value 1
    let num = 1
    // declaring a variable, but I am not assigning it a value
    let isOdd
    let someVar = null

    expect(num).toBe(1)
    expect(isOdd).toBe(undefined)
    expect(isOdd).not.toBe(null)
    expect(someVar).toBe(null)
    //expect(isEven).not.toBe(Error)
    
    // logic error/Semantic (User error) very Hard to find because it is still valved JS CODE!
    if(num % 2 !== 0){
        isOdd = true
    } else{
        isOdd = false
    }

    expect(isOdd).toBe(true)

    //canDrink
    let tonyAge = 21
    let sallyAge = 41
    let bobAge = 11

    let isTonyLegal //true
    let isSallyLegal // true
    let isBobLegal // false

    //function - a mini program
    //return true if person is 21 and over

    //define the function use it
    // function do stuff and they return 1 value
    // if you dont tell a function what to return it will return undefined

    const canDrink = (personAge) => {
        if(personAge >= 21){
            // return hey return value and quit function
            return true
        } else {
            return false
        }
    }
    
    //call the function use it
    isTonyLegal = canDrink(tonyAge)
    isSallyLegal = canDrink(sallyAge)
    isBobLegal = canDrink(bobAge)

    expect(isTonyLegal).toBe(true)
    expect(isSallyLegal).toBe(true)
    expect(isBobLegal).toBe(false)




    //if else statements
    
    //if else if else statements







})
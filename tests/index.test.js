const exp = require("constants")

// test here
it('test datatypes',()=>{
  //test here
  const PI = 3.14

expect(PI).toBe(3.14)
//numbers
 expect(typeof PI).toBe('number')
 //Strings
 let myName = 'Lance'
 let PI_STER = '3.14'
 expect(myName).toBe('Lance')
 expect(typeof myName).toBe("string")
 expect(PI_STER).not.toBe(PI)

 //booleans
 // test on equality

 expect(1).toBe(1)
 expect(1 == 1).toBe(true)
 expect(typeof true).toBe('boolean')
 expect(typeof false).toBe('boolean')
 
 // == can ignore type (lose)
 expect(1=='1').toBe(true)
 expect(1=='2').toBe(false)
 // === check type as well
 expect(1==="1").toBe(false);
 expect(1 + "1").toBe("11");

 // objects
 let outback = {make:"suburu", model:'outback', mileage:23000, electric: false}
 let tesla = {make:"tesla", model:'3', mileage:13000, electric:true}
 
 expect(outback.make).toBe('suburu')
 expect(tesla.model).toBe('3')
 expect(tesla.model).not.toBe(3)
 expect(typeof tesla).toBe('object')

 //arrays (list)
 let people = ['Jill','Jack','Fred']
 let primes = [2,3,7,11]

 expect(people[0]).toBe('Jill')
 
 expect(people[people.length -1]).toBe('Fred')
 expect(people.length).toBe(3)
 //methods
 //add "bob" to end the arrays
 people.push('Bob')
 expect(people.length).toBe(4)
 expect(people[people.length -1]).toBe('Bob')
 expect(Array.isArray(people)).toBe(true)
 expect(Array.isArray(123)).toBe(false)


})

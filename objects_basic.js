
var myObject = {
    a: 6,     // Number
    b: "abc", // String
    c: true,  // Boolean
    d: null,
  };

  var valueB = myObject["b"]; // get the value associated with the key "b"
console.log(valueB)
console.log(myObject)
myObject["foo"];
console.log(myObject)

var mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"]  = 22;
mary // shows the resulting object

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));
  // expected output: Array ["a", "b", "c"]

  //ask about keys
  
// write a function named printParameters that receives 3 params and print them.


// ******************* DONT MODIFY - START *******************
printParameters(1, 2, "hola"); // should print 1, 2, "hola"
// ******************* DONT MODIFY - END *******************

function printParameters(...parameters) {
  console.log(
    parameters.length === 0 ? "The parameters are empty" : parameters
  );
}
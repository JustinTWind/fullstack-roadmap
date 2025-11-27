/*

  13. Create Variable with User-Defined Name

    Write a JavaScript exercise to create a variable using a user-defined name.  

*/

const UserVariableName = prompt("Type the variable name")

const UserVariableValue = prompt("Type the variable value")

this[UserVariableName] = UserVariableValue

alert(this[UserVariableName])
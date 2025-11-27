// Write a function that calculates the area of a right triangle.


// ******************* DONT MODIFY - START *******************
rightTriangleArea(4, 5); // should print 10
rightTriangleArea(2, 2); // should print 2
rightTriangleArea(0, 5); // should print "triangle length can't be 0"
rightTriangleArea(10, 32); // should print 160
// ******************* DONT MODIFY - END *******************

function rightTriangleArea(triangleLength, triangleHeight) {
  if (
    typeof triangleLength !== "number" ||
    isNaN(triangleLength) ||
    triangleLength <= 0
  ) {
    console.log("triangle length can't be 0");
    // se puede poner un mensaje mejor, pero toca ceñirse a el ejercicio
    return;
  }
  if (
    typeof triangleHeight !== "number" ||
    isNaN(triangleHeight) ||
    triangleHeight <= 0
  ) {
    console.log("triangle height can't be 0");
    return;
  }
  console.log(0.5 * triangleLength * triangleHeight);
}


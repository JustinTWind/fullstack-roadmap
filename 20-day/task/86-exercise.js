/*

  86. Find Type of Given Angle

    Write a JavaScript program to find the types of a given angle.  

    Types of angles:
      Acute angle: An angle between 0 and 90 degrees.
      Right angle: An 90 degree angle.
      Obtuse angle: An angle between 90 and 180 degrees.
      Straight angle: A 180 degree angle.

*/

function findTypeOfAngle(givenAngle) {
  switch (true) {
    case givenAngle > 0 && givenAngle < 90:
      return "Acute angle";
    case givenAngle === 90:
      return "Right angle";
    case givenAngle > 90 && givenAngle < 180:
      return "Obtuse angle";
    case givenAngle === 180:
      return "Straight angle";
    default:
      return "Angle out of range (0-180°).";
  }
}

console.log(findTypeOfAngle(47));
console.log(findTypeOfAngle(90));
console.log(findTypeOfAngle(145));
console.log(findTypeOfAngle(180));
console.log(findTypeOfAngle(200));

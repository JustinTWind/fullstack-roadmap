/*

  4. Calculate Area of Triangle (Sides: 5, 6, 7)

    Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

*/

const triangleASide = 5;
const triangleBSide = 6;
const triangleCSide = 7;

const semiPerimeter = (triangleASide + triangleBSide + triangleCSide) / 2;

const triangleArea = Math.sqrt(
  semiPerimeter *
    (semiPerimeter - triangleASide) *
    (semiPerimeter - triangleBSide) *
    (semiPerimeter - triangleCSide)
);

console.log(triangleArea);

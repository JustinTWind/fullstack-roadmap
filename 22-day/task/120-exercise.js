/*

  120. Check if Point is Inside Circle

    Write a JavaScript program to check if a point lies strictly inside the circle. 
    Input:

    Center of the circle (x, y)
    Radius of circle: r
    Point inside a circle (a, b)

*/

function isPointInsideCircle(
  pointCoordX,
  pointCoordY,
  centerCoordX,
  centerCoordY,
  circleRadius
) {
  const diffXSquared =
    (pointCoordX - centerCoordX) * (pointCoordX - centerCoordX);

  const diffYSquared =
    (pointCoordY - centerCoordY) * (pointCoordY - centerCoordY);

  const distanceSquared = diffXSquared + diffYSquared;

  const radiusSquared = circleRadius * circleRadius;

  if (distanceSquared < radiusSquared) {
    return "It's Inside the circle";
  }

  return "It's outside the circle";
}

console.log(isPointInsideCircle(0, 0, 2, 4, 6));
console.log(isPointInsideCircle(0, 0, 6, 8, 6));

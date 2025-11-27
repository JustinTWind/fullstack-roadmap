/*

  19. Check if Integer is Within 20 of 100 or 400

   Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

*/

function isWithin20Of100Or400(UserInteger) {
  return Math.abs(100 - UserInteger) <= 20 || Math.abs(400 - UserInteger) <= 20;
}

console.log(isWithin20Of100Or400(379));

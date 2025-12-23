/**
 *  Crea una funcion llamada "revisarEstructura" que reciba como parametro un string con una serie de parentesis (solo parentesis)
 *  la funcion debe devolver true si la estructura de parentesis es valida (es decir que cada simbolo de apertura
 *  tenga un simbolo de cierre adecuado) si la estructura no es valida se debe devolver un false.
 *
 *  a continuacion vas a ver una serie de ejemplos sobre lo que se debe retornar:
 *
 *  revisarEstructura("()") -> true
 *  revisarEstructura("()  ()") -> true
 *  revisarEstructura("())") -> false
 *  revisarEstructura("( (((( ())( ))") -> false
 *  revisarEstructura("( ( ( ()) ) () (()) ())") -> true
 */

const revisarEstructura = function (givenString: string): boolean {
  const stringArray = givenString.split("");
  const totalOfOpenBrackets = stringArray.reduce(
    (total: number, element: string): number => {
      if (element === "(") {
        return ++total;
      }
      return total;
    },
    0
  );

  const totalOfCloseBrackets = stringArray.reduce(
    (total: number, element: string): number => {
      if (element === ")") {
        return ++total;
      }
      return total;
    },
    0
  );

  return totalOfOpenBrackets === totalOfCloseBrackets;
};

console.log(revisarEstructura("()"));
console.log(revisarEstructura("()  ()"));
console.log(revisarEstructura("())"));
console.log(revisarEstructura("( (((( ())( ))"));
console.log(revisarEstructura("( ( ( ()) ) () (()) ())"));

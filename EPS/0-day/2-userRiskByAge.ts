/*

  2. necesitamos saber si un usuario es de alto riesgo, para esto podemos usar la edad como un factor.
  Crea una funcion llamada userRiskByAge que reciba como parametro el nombre de un usuario y retorne
  "alto" si el usuario tiene mas de 60 años, "medio" si el usuario tiene entre 40 y 60 años y "bajo" si el usuario tiene menos de 40 años.

*/

import usersData from '../user-database.json' with { type: 'json' };

import { type User } from '../types/entities-schema.ts';

const RISK = {
  LOW: "bajo",
  MEDIUM: "medio",
  HIGH: "alto",
} as const;

type Risk = (typeof RISK)[keyof typeof RISK]

const userRiskByAge = function (givenUserFullname: string): Risk {
  const userAge = (usersData.find((user: User) => {
    const userFullName = `${user.firstName} ${user.lastName}`
    return userFullName === givenUserFullname
  }))?.age

  if (!userAge) {
    throw new Error("The user wasn't found");
  }

  if (userAge >= 60) {
    return RISK.HIGH
  } else if(userAge <= 60 && userAge >= 40){
    return RISK.MEDIUM
  } else {
    return RISK.LOW
  }
}

console.log(`El usuario posee un riesgo: ${userRiskByAge("Valentina Martínez")}`)
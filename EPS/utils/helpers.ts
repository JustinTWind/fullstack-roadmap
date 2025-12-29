import usersData from '../user-database.json' with { type: 'json' };

import { type User } from '../types/entities-schema.ts';

export const getUserIdByFullName = function (userFullName: string) {
  userFullName = normalizeString(userFullName)
  const userID = usersData.find((user: User) => {
    return (`${normalizeString(user.firstName)} ${normalizeString(user.lastName)}` === userFullName)
  })

  if (!userID) {
    throw new Error("El usuario no fue encontrado");
  }

  return userID
};

export const getUserFullNameById = function (userId: string) {
   const foundUser = usersData.find((user: User) => {
     return (user.userId === userId) 
   })
  
  if (!foundUser) {
    throw new Error("El usuario no fue encontrado");
  }

  return `${foundUser.firstName} ${foundUser.lastName}`
}

export const normalizeString = function (input: string): string {
  const sinTildes = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const trimeadoYMinusculas = sinTildes.trim().toLowerCase();
  const resultadoFinal = trimeadoYMinusculas.replace(/\b(\w)/g, (letra) =>
    letra.toUpperCase()
  );

  return resultadoFinal;
}

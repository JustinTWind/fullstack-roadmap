/*

  1. Necesitamos obtener la ciudad de un usuario dado, para esto crea una funcion llamada userCity que
  retorne el nombre de la ciudad del usuario. la funcion puede recibir el id del usuario o el
  nombre completo del usuario, si el usuario no existe en nuestros registros debe retornar "usuario no existe".

*/

import usersData from '../user-database.json' with { type: 'json' };

import { type User, type SearchCriteria } from '../types/entities-schema.ts';


const userCity = function (criteria: SearchCriteria): string {
  return (usersData.find((user: User) => {
    const userFullName: string = `${user.firstName} ${user.lastName}`

    if (criteria.fullName) {
      return userFullName === criteria.fullName
    }

    if (criteria.id) {
      return user.userId === criteria.id
    }
  }))?.city ?? "user not found"
};

console.log(`El Usuario Se encuentra en la ciudad de: ${userCity({fullName: "Valentina Martínez"})}`)
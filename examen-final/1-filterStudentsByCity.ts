/*

  1. Necesitamos encontrar todos los estudiantes de Mosquera que estudien en la Universidad Nacional.

*/

import studentsDB from "./students_db.json"  with { type: 'json' };
import universitiesDB from "./universities_db.json"  with { type: 'json' };
import { type IStudent, type IUniversity } from "./interfaces/general-interfaces.ts";

const filterStundentsByCity = function (givenCity: string, givenUniversityName: string): IStudent[] {
  const UNIVERSITY_CODE = (universitiesDB.find((universityData: IUniversity) => {
    return universityData.universityName === givenUniversityName
  }))?.code

  if (!UNIVERSITY_CODE) {
    throw new Error("El Nombre de la universidad no es válido");
  }

  const filteredStudents = studentsDB.filter((student: IStudent) => {
    return (student.universityCode === UNIVERSITY_CODE && student.originCity === givenCity)
  })

  const studentsArray = Array.from(filteredStudents)

  if (studentsArray.length === 0) {
    throw new Error(`No hay ningún estudiante de ${givenUniversityName} que viva en ${givenCity}`);
  }

  return studentsArray
}

const CITY_NAME = "Mosquera"
const UNIVERSITY_NAME = "Universidad Nacional"

try {
  console.log(`\n🫡 Lista de estudiantes de ${CITY_NAME} que estudian en ${UNIVERSITY_NAME}:  \n`)
  console.log(filterStundentsByCity(CITY_NAME, UNIVERSITY_NAME))
} catch (error) {
  console.error(`${error}`)
}
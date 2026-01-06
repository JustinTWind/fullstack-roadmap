/*

  3. Necesitamos crear una funcion que nos permita identificar si un estudiante aprobo una materia, 
  para esto la funcion debe recibir el nombre completo del estudiante y el nombre de la materia como parametros, 
  debe retornar "true" si aprobo la materia o "false" si la reprobo. 

  Nota: Cada estudiante tiene varias calificaciones en cada materia, 
  para determinar si paso la materia, el promedio de las calificaciones debe ser superior a 3.

*/

import studentsDB from "./students_db.json"  with { type: 'json' };
import gradesDB from "./grades_db.json"  with { type: 'json' };
import type { IStudent, IGrades } from "./interfaces/general-interfaces.ts";

const assertedGradesDB = gradesDB as IGrades[]

export const checkIfStudentAproved = function (
  givenStudentName: string,
  givenSubjectName: string
): boolean {

  const USER_DATA = studentsDB.find((student: IStudent) => {
    return `${student.firstName} ${student.lastName}` === givenStudentName
  })

  if (!USER_DATA) {
    throw new Error("El nombre del estudiante no fue encontrado");
  }

  const STUDENT_ID = USER_DATA.userId

  const studentGradesArray: number[] = []

  assertedGradesDB.forEach((grades: IGrades) => {
    if (grades.subject === givenSubjectName && grades.userId === STUDENT_ID) {
      studentGradesArray.push(grades.grade)
    }
  })

  if (studentGradesArray.length === 0) {
    throw new Error("El estudiante no ha cursado dicha materia, o no es una materia válida");
  }

  const average = (studentGradesArray.reduce((total, actualGrade) => {
    return total + actualGrade
  },0 )) / studentGradesArray.length

  return average >= 3;
};

const STUDENT_NAME = "Helena Correa";
const SUBJECT_NAME = "Logística";

try {
  console.log(
    `\n🤔 ¿ El Estudiante ${STUDENT_NAME} Aprobó ${SUBJECT_NAME} ?\n`
  );
  console.log(
    checkIfStudentAproved(STUDENT_NAME, SUBJECT_NAME)
      ? "✅ Si pasó el/la valecita"
      : "❎ No, No Pasó el/la muy bruto/a"
  );
} catch (error) {
  console.error(`${error}`)
}

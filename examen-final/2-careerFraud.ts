/*

  2. Nos reportaron sobre un fraude de estudiantes que estan matriculados (su status debe ser "Matriculado") 
  en carreras que no son ofrecidas en la universidad a la que pertenecen, 
  Necesitamos generar una lista con los siguientes datos 
  por cada uno de los estudiantes que estan cometiendo el fraude.

    { fullName: "", userId: "", universityName: "", }
    
*/

import type { IStudent, IUniversity } from "./interfaces/general-interfaces.ts";
import studentsDB from "./students_db.json"  with { type: 'json' };
import universitiesDB from "./universities_db.json"  with { type: 'json' };

interface IFraudReport {
  fullName: string;
  userId: string;
  universityName: string;
}

const careerFrauds = function (givenUniversityName: string): IFraudReport[] {
  const UNIVERSITY_DATA = universitiesDB.find((universityData: IUniversity) => {
    return universityData.universityName === givenUniversityName
  })
  
  if (!UNIVERSITY_DATA) {
    throw new Error("El Nombre de la universidad no es válido");
  }

  const UNIVERSITY_CAREERS = UNIVERSITY_DATA?.offeredCareers
  const UNIVERSITY_CODE = UNIVERSITY_DATA?.code

  const studentsReport: IFraudReport[] = []

  studentsDB.forEach((student: IStudent) => {
    if (
      student.universityCode === UNIVERSITY_CODE &&
      !(UNIVERSITY_CAREERS.includes(student.career)) &&
      student.status === "Matriculado"
    ) {
      studentsReport.push({
        fullName: `${student.firstName} ${student.lastName}`,
        userId: student.userId,
        universityName: givenUniversityName
      })
    }
  })

  if (studentsReport.length === 0) {
    throw new Error(`No hay ningún estudiante de la universidad ${givenUniversityName} ha hecho fraude`);
  }
  
  return studentsReport
}

const UNIVERSITY_NAME = "Universidad Nacional"

try {
  console.log(`\n☠️ Lista de estudiantes que estudian en ${UNIVERSITY_NAME} Y realizan fraude:  \n`)
  console.table(careerFrauds(UNIVERSITY_NAME))
} catch (error) {
  console.error(`${error}`)
}


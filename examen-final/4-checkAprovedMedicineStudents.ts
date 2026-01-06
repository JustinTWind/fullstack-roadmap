/*

  4. El pais se enfrenta a una situacion global compleja en la que requiere la mayor cantidad de medicos posible,
  para esto necesitamos encontrar una lista con los estudiantes de medicina 
  que hallan aprobado 6 de las 10 materias que tiene la carrera de Medicina, 
  la lista debe tener la siguiente estructura:

    { fullName: "", approvedSubjects: [], universityName: "", }

*/

import studentsDB from "./students_db.json"  with { type: 'json' };
import universitiesDB from "./universities_db.json"  with { type: 'json' };
import type { IGrades, IStudent, IUniversity } from "./interfaces/general-interfaces.ts";
import gradesDB from "./grades_db.json"  with { type: 'json' };

const assertedGradesDB = gradesDB as IGrades[]


interface IAprovedStudentReport {
  fullName: string;
  approvedSubjects: string[];
  universityName: string;
}

const getUniversityNameByCode = function (GivenUniversityCode: string) {
  const foundUniversity = universitiesDB.find((university: IUniversity) => {
    return university.code === GivenUniversityCode
  })

  if (!foundUniversity) {
    throw new Error("No Se encontró la universidad con dicho código");
  }

  return foundUniversity.universityName
}

const checkIfStudentAprovedById = function (
  givenStudentId: string,
  givenSubjectName: string
): boolean {

  const USER_DATA = studentsDB.find((student: IStudent) => {
    return student.userId === givenStudentId
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

const filterAprovedMedicineStudents = function (minimumSubjects:number): IAprovedStudentReport[] {
  const medicineSubjects: string[] = [
    'Anatomía',
    'Fisiología',
    'Bioquímica',
    'Patología',
    'Farmacología',
    'Histología',
    'Embriología',
    'Microbiología',
    'Medicina Interna',
    'Cirugía'
  ]

  const studentsReport: IAprovedStudentReport[] = []

  studentsDB.forEach((student: IStudent) => {
    if (student.career === "Medicina") {

      const actualStudentReport: IAprovedStudentReport = {
        fullName: `${student.firstName} ${student.lastName}`,
        approvedSubjects: [],
        universityName: getUniversityNameByCode(student.universityCode)
      }

      medicineSubjects.forEach(subject => {
        if (checkIfStudentAprovedById(student.userId, subject)) {
          actualStudentReport.approvedSubjects.push(subject)
        }
      });

      if (actualStudentReport.approvedSubjects.length > minimumSubjects - 1) {
        studentsReport.push(actualStudentReport)
      }
    }
  })
  
  if (studentsReport.length === 0) {
    throw new Error(`Este país está llevado del hptas, ni uno ganó ni ${minimumSubjects} materias ☠️☠️☠️☠️`);
  }

  return studentsReport
}

const MINIMUN_SUBJECTS = 6

try {
  console.log(`\n💉 Lista de estudiantes de la carrera de medicina que han aprobado ${MINIMUN_SUBJECTS} de las 10 materias:  \n`)
  console.table(filterAprovedMedicineStudents(MINIMUN_SUBJECTS))
} catch (error) {
  console.error(`${error}`)
}


const MINIMUN_SUBJECTS2 = 3
try {
  console.log(`\n💉 Lista de estudiantes de la carrera de medicina que han aprobado ${MINIMUN_SUBJECTS2} de las 10 materias:  \n`)
  console.table(filterAprovedMedicineStudents(MINIMUN_SUBJECTS2))
} catch (error) {
  console.error(`${error}`)
}



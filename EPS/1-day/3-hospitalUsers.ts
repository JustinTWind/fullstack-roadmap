/*

  3. necesitamos obtener una lista de usuarios que han visitado un hospital dado,
  para esto crea una funcion llamada hospitalUsers que reciba como parametro
  el nombre del hospital y que retorne un array con el nombre COMPLETO de los usuarios
  que han visitado ese hospital ej:

  ["Diego Sánchez", "Isabella Flores", "Fernando Sierra"]

*/

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };

import type { MedicalRecord } from '../types/entities-schema.ts';

import { getUserFullNameById, normalizeString } from '../utils/helpers.ts';

const typedClinicalRecordData: MedicalRecord[] = clinicalRecordDataJson as MedicalRecord[];

const hospitalUsers = function (hospitalName: string): string[] {
  hospitalName = normalizeString(hospitalName)
  
  const hospitalVisitorsSet: Set<string> = new Set()

  typedClinicalRecordData.forEach((currentService) => {
    if (normalizeString(currentService.hospitalName) === hospitalName) {
      hospitalVisitorsSet.add(getUserFullNameById(currentService.userId))
    }
  })

  const hospitalVisitorsArray: string[] = [...hospitalVisitorsSet]
  
  if (hospitalVisitorsArray.length === 0) {
    throw new Error("Este hospital nunca ha sido visitado por ninguno de los pacientes registrados");
  }

  return hospitalVisitorsArray
};

try {
  console.log("\n\tUsuarios que Han visitado el hospital: \n")
  hospitalUsers("clinica villarreal").forEach((patientName) => {
    console.log(`\t•  ${patientName}`)
  })
} catch (error) {
  console.error(`ERROR: ${error}`)
}

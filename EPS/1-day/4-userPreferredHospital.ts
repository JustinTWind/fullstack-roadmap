/*

  4. Necesitamos obtener cual es el hospital de preferencia (mas usado)
  de un usuario dado, para esto crea una funcion llamada userPreferredHospital que reciba
  como parametro el nombre de un usuario y retorne el nombre del hospital de preferencia.

*/

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };

import { getUserByFullName } from "../utils/helpers.ts";

import type { MedicalRecord } from "../types/entities-schema.ts";

const typedClinicalRecordData: MedicalRecord[] =
  clinicalRecordDataJson as MedicalRecord[];

interface visitedHospitals {
  [key: string]: number;
}

const userPreferredHospital = function (userFullName: string) {
  const userId: string = getUserByFullName(userFullName).userId;

  const hospitalFrequency: visitedHospitals = {}
    
  typedClinicalRecordData.forEach((service) => {
    if (service.userId === userId) {
      hospitalFrequency[service.hospitalName]
        ? hospitalFrequency[service.hospitalName] = 1
        : hospitalFrequency[service.hospitalName]! += 1
    }
  })

  if (Object.keys(hospitalFrequency).length === 0) {
    throw new Error("El usuario nunca ha visitado alguno de los hospitales registrados");
  }

  const [mostVisitedHospital] = Object.entries(hospitalFrequency).reduce(
    (mostVisitedHospital, currentHospital) => (mostVisitedHospital[1] > currentHospital[1] ? mostVisitedHospital : currentHospital)
  );

  return mostVisitedHospital;
};

try {
  console.log('\n\tEl hospital más visitado por el usuario es:',userPreferredHospital("andres gomez"))
} catch (error) {
  console.error(`ERROR: ${error}`)
}


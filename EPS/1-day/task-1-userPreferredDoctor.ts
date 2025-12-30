/*

  Necesitamos obtener cual es el doctor preferido (mas visitado) de un usuario dado,
  para esto crea una funcion llamada userPreferredDoctor que reciba como parametro el nombre
  de un usuario y retorne el nombre del doctor de preferencia.

*/

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord } from "../types/entities-schema.ts";
import { getUserByFullName } from '../utils/helpers.ts';

const typedClinicalRecordData: MedicalRecord[] =
  clinicalRecordDataJson as MedicalRecord[];


interface doctorsVisited {
  [key: string]: number;
}

const userPreferredDoctor = function (username: string) {
  const foundUser = getUserByFullName(username)

  const doctorsFrequency: doctorsVisited = {}
  let mostVisitedDoctor: [string, number] = ["", 0]

  typedClinicalRecordData.forEach((service) => {
    if (service.userId === foundUser.userId) {

      if (!doctorsFrequency[service.doctor]) {
        doctorsFrequency[service.doctor] = 0 
      }

      doctorsFrequency[service.doctor]! += 1
      
      if (doctorsFrequency[service.doctor]! > mostVisitedDoctor[1]) {
        mostVisitedDoctor = [service.doctor, doctorsFrequency[service.doctor]!]
      }
      
    }
  })

  if (Object.keys(doctorsFrequency).length === 0) {
    throw new Error("El usuario nunca ha tenido ninguna cita");
  }

  return mostVisitedDoctor[0]
}

const PATIENT_NAME = "Andrés Gomez"

try {
  console.log(`\nEl Doctor/a más visitado por ${PATIENT_NAME} es:`, userPreferredDoctor(PATIENT_NAME))
} catch (error) {
  console.error(`ERROR: ${error}`)
}
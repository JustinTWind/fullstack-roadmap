/*

  Necesitamos obtener cual es el medicamento mas consumido de un usuario dado,
  para esto crea una funcion llamada userMostConsumedMedication que reciba como
  parametro el nombre del usuario y retorne el nombre del medicamento mas usado.

*/

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord } from "../types/entities-schema.ts";
import { getUserByFullName } from '../utils/helpers.ts';

const typedClinicalRecordData: MedicalRecord[] =
  clinicalRecordDataJson as MedicalRecord[];

interface medicationsUsed {
  [key: string]: number;
}

const userMostConsumedMedication = function (userFullName: string) {
  const foundUserId = getUserByFullName(userFullName).userId;

  const medicationFrequency: medicationsUsed = {}
  let mostUsedMedication: [string, number] = ["", 0]

  typedClinicalRecordData.forEach((service) => {
    if (service.userId === foundUserId) {
      service.medicationsUsed.forEach((medication) => {
        if (!medicationFrequency[medication]) {
          medicationFrequency[medication] = 0
        }

        medicationFrequency[medication] += 1

        if (medicationFrequency[medication] > mostUsedMedication[1]) {
          mostUsedMedication = [medication, medicationFrequency[medication]]
        }

      })
    }
  })

  if (Object.keys(medicationFrequency).length === 0) {
    throw new Error("El usuario no posee medicamentos registrados");
  }

  return mostUsedMedication[0]

};

const PATIENT_NAME = "Saray Serna"

try {
  console.log(`\n El medicamento más utilizado por el paciente ${PATIENT_NAME} es:`, userMostConsumedMedication(PATIENT_NAME))
} catch (error) {
  console.error(`ERROR: ${error}`)
}
/*

  1. necesitamos crear una funcion que nos de la informacion de un servicio dado, 
  para esto crea una funcion llamada serviceData que reciba por parametro el id del servicio
  y retorne el objeto de ese servicio en nuestra base de datos.

*/

import { type MedicalRecord } from "../types/entities-schema.ts";
import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };

const typedClinicalRecordData: MedicalRecord[] = clinicalRecordDataJson as MedicalRecord[];

const serviceData = function (serviceid: string): MedicalRecord {
  serviceid = serviceid.toLowerCase().trim()

  const foundClinicalRecord = typedClinicalRecordData.find((medicalRecord) => {
    return medicalRecord.serviceId === serviceid
  })

  if (!foundClinicalRecord) {
    throw new Error("Clinical record wasnt found");
  }

  return foundClinicalRecord
}

try {
  console.log(`\n 💊 Información del servicio indicado:\n`,serviceData("srv_0002"))
} catch (error) {
  console.error(`ERROR: ${error}`)
}
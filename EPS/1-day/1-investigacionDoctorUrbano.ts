import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };

import type { MedicalRecord } from "../types/entities-schema.ts";

import { normalizeString } from "../utils/helpers.ts";

const typedClinicalRecordData: MedicalRecord[] =
  clinicalRecordDataJson as MedicalRecord[];

const DOCTOR_NAME = "Dr. Luis Burbano";

const hospitalsWereDoctorWorked = function (doctorsName: string) {
  doctorsName = normalizeString(doctorsName);
  const hospitalsNameSet: Set<string> = new Set();

  typedClinicalRecordData.forEach((service) => {
    if (normalizeString(service.doctor) === doctorsName) {
      hospitalsNameSet.add(service.hospitalName);
    }
  });

  const hospitalsNameArray: string[] = [...hospitalsNameSet];

  if (hospitalsNameArray.length === 0) {
    throw new Error(
      "Este doctor nunca ha trabajado en alguno de los hospitales registrados"
    );
  }

  return hospitalsNameArray;
};

try {
  console.log(`\n\t🏥 Hospitales donde llegó a trabajar el doctor ${DOCTOR_NAME}: \n`)
  hospitalsWereDoctorWorked(DOCTOR_NAME).forEach((hospitalName) => {
    console.log(`\t•  ${hospitalName}`)
  })
} catch (error) {
  console.error(`ERROR: ${error}`);
}

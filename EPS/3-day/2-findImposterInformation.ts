/*

  2. resulta que en medio de una reunion con nuestros medicos el doctor Alberto Martínez
  nos informo que un paciente se comunico con el para preguntarle acerca de unas indicaciones 
  que el doctor le habia dado en su cita de Alergología pero el doctor Alberto no da esa especialidad,
  eso solo quiere decir que tenemos un impostor! realiza un script que nos permita identificar 
  tanto a los pacientes que este impostor halla atendido como a los hospitales en 
  los que estuvo para poder realizar nuestro respectivo informe.

*/

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord } from "../types/entities-schema.ts";
import { normalizeString } from '../utils/helpers.ts';
import type { ContactResume } from '../types/entities-schema.ts';
import { getUserById } from '../utils/helpers.ts';
const typedClinicalRecordData: MedicalRecord[] = clinicalRecordDataJson as MedicalRecord[];

interface ImposterReport {
  affectedPatients: ContactResume[];
  involvedHospitals: string[];
}

const findImposterInformation = function (doctorName: string): ImposterReport {
  let normalizedDoctorName = normalizeString(doctorName);

  if (!normalizedDoctorName.includes("Dr.")) {
    normalizedDoctorName = `Dr. ${normalizedDoctorName}`
  }
  
  const usersToContactMap = new Map<string, ContactResume>();
  const hospitalsToContactSet = new Set<string>();
  
  typedClinicalRecordData.forEach((service) => {
    const currentDoctor = normalizeString(service.doctor);

    if (currentDoctor === normalizedDoctorName) {
      
      if (!usersToContactMap.has(service.userId)) {
        const foundUser = getUserById(service.userId);
        usersToContactMap.set(service.userId, {
          userName: `${foundUser.firstName} ${foundUser.lastName}`,
          userEmail: foundUser.email
        });
      }
    
      hospitalsToContactSet.add(service.hospitalName);
    }
  });

  return {
    affectedPatients: Array.from(usersToContactMap.values()),
    involvedHospitals: Array.from(hospitalsToContactSet)
  };
}

const DOCTOR_NAME = "Alberto Martínez";

try {
  const imposterReport = findImposterInformation(DOCTOR_NAME);

  console.log("\n--- INFORME DE SEGURIDAD: CASO IMPOSTOR ---");
  console.log("\n\n\tHospitales identificados:");
  console.table(imposterReport.involvedHospitals);

  console.log("\n\tPacientes a contactar:");
  console.table(imposterReport.affectedPatients);

} catch (error) {
  console.error(`\nERROR: ${error}`)
}




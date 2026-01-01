/*

  4. la Warfarina es un anticoagulante muy potente y su dosis debe ser controlada con una exactitud 
  muy alta, nos informaron que existen doctores en nuestra red que han suministrado este medicamente 
  mas de 1 vez en una misma visita medica, encuentra esos doctores y da un 
  informe detallado sobre que dia hicieron esa mala practica y en que pacientes lo utilizaron. el 
  informe debe tener la siguiente estructura:

    [ 
      { 
        doctor: "Dr. Mario Vargas" 
        fechas: [ "2023-07-13T17:36:17.616Z", "2024-08-14T21:17:05.780Z", "2023-10-18T10:38:20.499Z" ],
        pacientes: [ "Andrés Gomez", "Nicolás Torres", "Alejandro Moreno" ] 
      },
      { 
        doctor: "Dra. Isabela Rosales" 
        fechas: [ "2023-06-11T17:36:17.616Z", "2024-04-18T21:17:05.780Z", "2023-12-04T10:38:20.499Z" ],
        pacientes: [ "Lorena Bermúdez", "Cristian Toro", ] 
      }, 
    ]

*/
import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord } from "../types/entities-schema.ts";
import { getUserFullNameById } from '../utils/helpers.ts';

const typedClinicalRecordData: MedicalRecord[] = clinicalRecordDataJson as MedicalRecord[];

interface DoctorMalpracticeReport {
  doctor: string;
  fechas: string[];
  pacientes: string[];
}

const generateWarfarinMalpracticeReport = (): DoctorMalpracticeReport[] => {
  const MEDICATION_TO_CHECK = "Warfarina";
  
  const reportMap = new Map<string, DoctorMalpracticeReport>();

  typedClinicalRecordData.forEach((service) => {
    const warfarinOccurrences = service.medicationsUsed.filter(medication => medication === MEDICATION_TO_CHECK).length;

    if (warfarinOccurrences > 1) {
      const doctorName = service.doctor;
      const patientFullName = getUserFullNameById(service.userId);
      const serviceDate = service.date;

      if (!reportMap.has(doctorName)) {
        reportMap.set(doctorName, {
          doctor: doctorName,
          fechas: [serviceDate],
          pacientes: [patientFullName]
        });
      } else {
        const existingEntry = reportMap.get(doctorName)!;
        existingEntry.fechas.push(serviceDate);
        existingEntry.pacientes.push(patientFullName);
      }
    }
  });

  return Array.from(reportMap.values());
};

try {
  console.log("--- INFORME DETALLADO DE MALA PRAXIS: WARFARINA ---");
  console.dir(generateWarfarinMalpracticeReport(), { depth: null });
} catch (error) {
  console.error(`\nERROR: ${error}`)
}
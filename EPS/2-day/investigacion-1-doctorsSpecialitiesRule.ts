/*

  1. El gobierno nacional nos acaba de informar sobre una irregularidad en nuestros
  centros de atencion, resulta que por ley ningun doctor puede atender mas 
  de 4 especialidades diferentes entonces el gobierno nos esta pidiendo un informe sobre
  los doctores que han atendido mas de 4 especialidades, 
  crea un script para encontrar una lista de esos doctores y
  las especialidades que han impartido. 
  (nota: debes crear una lista con objetos donde cada objeto tenga el nombre del doctor y una lista con las especialidades que ha dado).

*/

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord } from "../types/entities-schema.ts";
const typedClinicalRecordData: MedicalRecord[] =
  clinicalRecordDataJson as MedicalRecord[];

interface DoctorsSpecialitiesResume {
  doctorName: string;
  specialities: string[];
}

const doctorsWithManySpecialities = function (): DoctorsSpecialitiesResume[] {
  const doctorMap = new Map<string, Set<string>>();

  typedClinicalRecordData.forEach((service) => {
    if (service.doctor) {
      if (!doctorMap.has(service.doctor)) {
        doctorMap.set(service.doctor, new Set());
      }
      doctorMap.get(service.doctor)!.add(service.speciality);
    }
  });

  const doctorsList: DoctorsSpecialitiesResume[] = [];

  doctorMap.forEach((specialitiesSet, doctorName) => {
    if (specialitiesSet.size > 4) {
      doctorsList.push({
        doctorName,
        specialities: Array.from(specialitiesSet)
      });
    }
  });

  return doctorsList;
};

console.log(`\n\t Lista de doctores con más de 4 especialidades: `);
console.log(doctorsWithManySpecialities());

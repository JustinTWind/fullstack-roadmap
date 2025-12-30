/*

  1. Por orden del gobierno debemos informar cuales hospitales del pais estan 
  atendiendo la mayor cantidad de pacientes, para esto crea una funcion llamada 
  busiestHospitals que retorne una lista de los 3 hospitales mas usados, 
  los objetos de la lista deben tener la siguiente estrucutra:

    { hospitalName: "Clínica Especialistas de Sincelejo" usersServed: 1200 }

*/

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord, VisitedHospitals } from "../types/entities-schema.ts";

const typedClinicalRecordData: MedicalRecord[] =
  clinicalRecordDataJson as MedicalRecord[]

interface BusyHospital {
  hospitalName: string;
  usersServed: number;
}

const busiestHospitals = function (): BusyHospital[] {

  const hospitalFrequency: VisitedHospitals = {}

  typedClinicalRecordData.forEach((service) => {
    hospitalFrequency[service.hospitalName] = (hospitalFrequency[service.hospitalName] || 0) + 1;
  })

  // Se puede hacer en menos ciclos, pero, por probar el método Sort y tener N cantidad de top

  const sortedFrequency = Object.entries(hospitalFrequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);
  
  return sortedFrequency.map(([hospitalName, usersServed]) => {
    return {hospitalName: hospitalName, usersServed: usersServed}
  });
  
};

console.log(`Los Hospitales más visitados son:`, busiestHospitals())



/*

  3. acabamos de ser demandados por la familia de un paciente que murio luego de una visita
  a uno de nuestros centros medicos, resulta que en la investigacion sobre su muerte encontraron
  que en uno de nuestros centros medicos le suministraron Warfarina y Meloxicam en una misma visita, 
  esta combinacion puede ser mortal porque no se debe combinar anticoagulantes con antiinflamatorios 
  no esteroides, no tenemos una lista de los medicamentos que usamos pero con la 
  base de datos que tenemos podemos determinar cuales son los medicamentos que utilizamos 
  luego de que tengas esa lista de medicamentos investiga cuales de ahi son antiinflamatorios 
  no esteroides y luego de eso realiza un script que permita identificar a los doctores que 
  suministraron Warfarina con alguno de esos antiinflamatorios no esteroides, los hospitales 
  que permitieron esto tambien tienen responsabilidad por lo tanto tambien debemos obtener el 
  nombre los hospitales donde sucedio esto y ademas el nombre de los usuarios para poder 
  contactarlos y llegar a una conciliacion con ellos antes de que se sumen a esta demanda.

*/

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord } from "../types/entities-schema.ts";
import { getUserById } from '../utils/helpers.ts';

const typedClinicalRecordData: MedicalRecord[] = clinicalRecordDataJson as MedicalRecord[];

interface CriticalIncident {
  patientName: string;
  doctorName: string;
  hospitalName: string;
}

const findLethalInteractions = (): CriticalIncident[] => {
  const ANTICOAGULANT = "Warfarina";
  
  const NSAIDS = [
    "Meloxicam", "Ibuprofeno", "Naproxeno", "Diclofenaco", 
    "Aspirina", "Ketorolaco", "Celecoxib", "Ketoprofeno"
  ];

  const criticalCases: CriticalIncident[] = [];

  typedClinicalRecordData.forEach((service) => {
    const serviceMedications = service.medicationsUsed;

    const hasWarfarina = serviceMedications.includes(ANTICOAGULANT);
    
    const foundNSAID = serviceMedications.find(medication => NSAIDS.includes(medication));

    if (hasWarfarina && foundNSAID) {
      const foundUser = getUserById(service.userId);
      
      criticalCases.push({
        patientName: `${foundUser.firstName} ${foundUser.lastName}`,
        doctorName: service.doctor,
        hospitalName: service.hospitalName,
      });
    }
  });

  return criticalCases;
};


try {
  console.table(findLethalInteractions());
} catch (error) {
  console.error(`\nERROR: ${error}`)
}
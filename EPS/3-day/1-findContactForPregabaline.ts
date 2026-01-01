/*

  1. Un proveedor internacional de medicamentos nos acaba de informar
  que hubo un error con un lote de pregabalina que suministramos en nuestros centros medicos,
  de nuestro sistema de informacion de inventario nos informan que ese
  lote fue consumido en su totalidad durante el 2024, teniendo esta informacion 
  crea un script que permita identificar que pacientes fueron medicados con pregabalina durante el 2024,
  rapidooo necesitamos contactar a estos usuarios 
  (en el resultado debe estar el correo de los usuarios para poder contactarlos)

*/
import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord } from "../types/entities-schema.ts";
import { getUserById } from '../utils/helpers.ts';
import type { ContactResume } from '../types/entities-schema.ts';

const typedClinicalRecordData: MedicalRecord[] = clinicalRecordDataJson as MedicalRecord[];

// Lo estaba probando a hacer con un weak Set, pero me enteré a las malas lo que significa
// Que no sea iterable de ninguna forma

const findContactForPregabaline = function (medicationName: string): ContactResume[] {
  const usersToContactMap = new Map<string, ContactResume>();

  typedClinicalRecordData.forEach((service) => {
    const serviceYear = new Date(service.date).getFullYear();

    if (service.medicationsUsed.includes(medicationName) && serviceYear === 2024) {
      if (!usersToContactMap.has(service.userId)) {
        const foundUser = getUserById(service.userId);
        
        usersToContactMap.set(service.userId, {
          userName: `${foundUser.firstName} ${foundUser.lastName}`,
          userEmail: foundUser.email
        });
      }
    }
  });

  return Array.from(usersToContactMap.values());
}

const MEDICATION_NAME = "Pregabalina"

try {
  console.table(findContactForPregabaline(MEDICATION_NAME));
} catch (error) {
  console.error(`\nERROR: ${error}`)
}


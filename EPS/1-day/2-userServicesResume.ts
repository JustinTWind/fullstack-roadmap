/*

  2. necesitamos un resumen sobre los servicios que a usado un paciente, 
  para esto crea una funcion llamada userServicesResume, 
  que reciba como parametro el nombre de un usuario de nuestra base de datos.

    la funcion debe retornar el siguiente informe:

    { userId: "", firstName: "", lastName: "", totalMedicalAppointments: 1302, }

*/

import { type MedicalRecord } from "../types/entities-schema.ts";

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };

import { getUserIdByFullName } from "../utils/helpers.ts";

interface UserServicesResume {
  userId: string;
  firstName: string;
  lastName: string;
  totalMedicalAppointments: number;
  
}

const typedClinicalRecordData: MedicalRecord[] = clinicalRecordDataJson as MedicalRecord[];

const userServicesResume = function (userFullName: string): UserServicesResume {
  const foundUser = getUserIdByFullName(userFullName)

  const totalMedicalAppointments: number = typedClinicalRecordData.reduce((totalAppointments, currentService) => {
    if (foundUser.userId === currentService.userId) {
      return ++totalAppointments
    }
    return totalAppointments
  },0)

  return {
    userId: foundUser.userId,
    firstName: foundUser.firstName,
    lastName: foundUser.lastName,
    totalMedicalAppointments: totalMedicalAppointments
  }
};

try {
  console.log(`🫡 La Información del usuario es la siguiente: `,userServicesResume("andres gomez"))
} catch (error) {
  console.error(`ERROR: ${error}`)
}



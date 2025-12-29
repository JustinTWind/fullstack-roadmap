/*

  3. necesitamos obtener informacion de la ultima cita que el paciente tuvo con nosotros, para esto
  crea una funcion llamada userLastAppointment que reciba como parametro el nombre completo del usuario o su id, 
  la funcion debe retornar la siguiente informacion.

  { userId: "", fullName: "", serviceId: "" speciality: "", hospitalName: "", medicalNotes: "", medicationsUsed: "", date: "" }

*/

import usersData from '../user-database.json' with { type: 'json' };

import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };

import { type User, type MedicalRecord, type SearchCriteria, type QueryResponse} from '../types/entities-schema.ts';

const typedClinicalRecordData = clinicalRecordDataJson as MedicalRecord[];

const getUserFullNameById = function (userId: string): string {
  const foundUser = usersData.find((user: User) => {
      return user.userId === userId
  })

  if (foundUser) {
    return `${foundUser.firstName} ${foundUser.lastName}`
  }

  throw new Error("User Not Found");
};


const getUserIdByFullName = function (userFullName: string): string {
  const foundUserId = (usersData.find((user: User) => {
    const actualUserFullName: string = `${user.firstName} ${user.lastName}`
    return actualUserFullName === userFullName
  }))?.userId 

  if (foundUserId) {
    return foundUserId
  }

  throw new Error("User Not Found");
  
};

const userLastAppointment = function (criteria: SearchCriteria): QueryResponse {
  let userId: string;
  let fullName: string;

  if (criteria.fullName) {
    fullName = criteria.fullName;
    userId = getUserIdByFullName(criteria.fullName);
  } else if (criteria.id) {
    userId = criteria.id;
    fullName = getUserFullNameById(criteria.id);
  } else {
    throw new Error("Se debe proporcionar un 'id' o un 'fullName'.");
  }

  const servicesByPatient = typedClinicalRecordData.filter((service: MedicalRecord) => {
    return service.userId === userId;
  });

  if (servicesByPatient.length === 0) {
    throw new Error(`No se encontraron citas para el usuario: ${fullName}`);
  }

   const latestAppointment = servicesByPatient.reduce((latestService, currentService) => {
    return new Date(currentService.date) > new Date(latestService.date) ? currentService : latestService;
  });

  const queryResponse: QueryResponse = {
    userId: latestAppointment.userId,
    fullName: fullName,
    serviceId: latestAppointment.serviceId,
    speciality: latestAppointment.speciality,
    hospitalName: latestAppointment.hospitalName,
    medicalNotes: latestAppointment.medicalNotes,
    medicationsUsed: latestAppointment.medicationsUsed,
    date: latestAppointment.date,
  };

  return queryResponse;

}

console.log(userLastAppointment({fullName:"Andrés Gómez"}))
console.log(userLastAppointment({id:"usr_001"}))
console.log(userLastAppointment({id:"usr_124"}))

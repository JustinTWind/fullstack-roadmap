/*

  2. Por control medico debemos informar sobre la ultima vez que un usuario se le administro cierto medicamento,
  para esto crea una funcion llamada medicationUsedTracker, la funcion debe recibir 2 parametros,
  el primer parametro puede ser el id del usuario o su nombre completo y el segundo
  parametro debe ser el nombre del medicamento, la respuesta de la funcion debe dar la siguiente informacion:

    { userId: "", fullName: "", date: "", hospitalName: "" doctor: "" }

    esos datos deben ser de la ultima vez que se le suministro el medicamento al usuario.

*/
import clinicalRecordDataJson from '../medical_history.json' with { type: 'json' };
import type { MedicalRecord } from "../types/entities-schema.ts";
import { getUserById, getUserFullNameById, normalizeString } from '../utils/helpers.ts';

const typedClinicalRecordData: MedicalRecord[] =
  clinicalRecordDataJson as MedicalRecord[];

interface MedicationResume {
  userId: string;
  fullName: string;
  date: string;
  hospitalName: string;
  doctor: string;
}

const medicationUsedTracker = function (
  userId: string,
  medicationName: string
):MedicationResume {
  userId = userId.toLowerCase().trim();
  medicationName = normalizeString(medicationName)

  const foundUser = getUserById(userId)
  let medicationExistsFlag:boolean = false

  const medicationResume: MedicationResume = {
    userId: foundUser.userId,
    fullName: `${foundUser.firstName} ${foundUser.lastName}`,
    date: "0",
    hospitalName: "",
    doctor: ""
  }

  typedClinicalRecordData.forEach((service) => {
    if (service.userId === foundUser.userId) {
      if (service.medicationsUsed.includes(medicationName) && service.date > medicationResume.date) {
        medicationResume.date = service.date
        medicationResume.hospitalName = service.hospitalName
        medicationResume.doctor = service.doctor
        medicationExistsFlag = true
      }
    }
  })

  if (!medicationExistsFlag) {
    throw new Error("Al usuario nunca se le ha sido recetado dicho medicamento, o el medicamento no existe");
  }

  return medicationResume
};

const USER_ID = "usr_001"
const MEDICATION_NAME = "Ibuprofeno"

try {
console.log(`\n\tEl servicio donde el medicamento ${MEDICATION_NAME} fue suministrado
\tpor última vez al usuario ${getUserFullNameById(USER_ID)} fue:\n\n`, medicationUsedTracker(USER_ID, MEDICATION_NAME))
} catch (error) {
  console.error(`\nERROR: ${error}`)
}


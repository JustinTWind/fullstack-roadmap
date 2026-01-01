export interface User {
  readonly userId: string;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  email: string;
}

export interface MedicalRecord {
  serviceId: string;
  userId: string;
  date: string;
  hospitalName: string;
  medicalNotes: string;
  doctor: string;
  speciality: string;
  medicationsUsed: string[];
}

export interface SearchCriteria {
  id?: string;
  fullName?: string;
}

export interface VisitedHospitals {
  [key: string]: number;
}

export interface QueryResponse {
  userId: string;
  fullName: string;
  serviceId: string;
  speciality: string;
  hospitalName: string;
  medicalNotes: string;
  medicationsUsed: string[];
  date: string;
}

export interface ContactResume {
  userName: string;
  userEmail: string;
}
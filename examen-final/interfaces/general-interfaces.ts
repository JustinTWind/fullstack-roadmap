export interface IStudent {
  userId: string;
  firstName: string;
  lastName: string;
  originCity: string;
  universityCode: string;
  career: string;
  age: number;
  email: string;
  status: string;
  entryYear: number;
}

export interface IUniversity {
  code: string;
  universityName: string;
  accreditation: string;
  offeredCareers: string[];
  additionalInfo: {
    foundationYear: number;
    type: string;
    globalRanking: number;
  };
}

export interface IGrades {
  userId: string;
  grade: number;
  subject: string;
  passed: boolean;
}

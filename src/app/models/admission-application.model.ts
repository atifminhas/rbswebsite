export class AdmissionApplication {
    Id: number;
    SchoolYearId: number;
    SemesterId: number;
    ParentTypeId: number;
    ParentId: number;
    Parents: Parent[];
    Students: Student[];
}

export class Parent {
    Id: number;
    CivilId: string;
    FirstNameEn: string;
    SecondNameEn: string;
    ThirdNameEn: string;
    FourthNameEn: string;
    FirstNameAr: string;
    SecondNameAr: string;
    ThirdNameAr: string;
    FourthNameAr: string;
    MartilaStatusId: number;
    NationalityId: number;
    GenderId: number;
    DegreeId: number;
    JobTitleId: number;
    JobSectorId: number;
    JobPlace: string;
    Mobile: string;
    WorkPhone: string;
    Email: string;
}

export class Student {
    Id: number;
    CivilId: string;
    CivilIdSerial: string;
    PassportNo: string;
    FirstNameEn: string;
    SecondNameEn: string;
    ThirdNameEn: string;
    FourthNameEn: string;
    FirstNameAr: string;
    SecondNameAr: string;
    ThirdNameAr: string;
    FourthNameAr: string;
    ReligionId: number;
    NationalityId: number;
    GenderId: number;
    BirthDate: Date;
    BirthCountryId: number;
    BirthCertificate: string;
    BirthCertificateIssueDate: Date;
    BirthCertificateIssueCountryId: number;
    Mobile: string;
    WorkPhone: string;
    Email: string;
}
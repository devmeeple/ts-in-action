/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string;
    age: number;
};

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
};

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: 'xxxyyyyzzz',
};

type PetType = {
    petName: string;
    petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '미플',
    age: 17,

    // CompanyType
    company: '인사이트',
    companyRegistrationNumber: 'xxxyyyzzz',

    // PetType
    petName: '오리',
    petAge: 8,

};
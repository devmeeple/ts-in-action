/**
 * Intersection
 *
 * And
 */
interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '미플',
    age: 3,
    phone: '01012341234',
    address: '서울특별시',
};

type NumberAndString = number & string; // never 존재할 수 없다.

// let numberAndString: NumberAndString = never;

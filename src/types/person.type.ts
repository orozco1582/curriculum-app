import { Experience } from "./experience.type";
import { Education } from "./education.type";
import { Lenguage } from "./lenguage.type";


export class Person {

    name: string = "";
    profileSummary: string = "";
    linkedinUserID: string = "";
    occupation: string = "";
    email: string = "";
    phone: string = "";
    location: string = "";
    skills: Array<string> = [];
    experience: Array<Experience> = [];
    education: Array<Education> = [];
    lenguages: Array<Lenguage> = [];

    constructor() {}

    static import(rawData: any): Person {
        let person: Person = new Person();
        Object.assign(person, rawData);
        return person;
    }

}

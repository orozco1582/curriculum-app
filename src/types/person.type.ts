import { Experience, Education, Lenguage } from ".";

export class Person {

    private name: string = "";
    private profileSummary: string = "";
    private linkedinUserID: string = "";
    private occupation: string = "";
    private email: string = "";
    private phone: string = "";
    private location: string = "";
    private skills: Array<string> = [];
    private experience: Array<Experience> = [];
    private education: Education = new Education();
    private lenguages: Array<Lenguage> = [];

    constructor() {}

    static import(rawData: any): Person {
        let person: Person = new Person();
        Object.assign(person, rawData);
        return person;
    }

}

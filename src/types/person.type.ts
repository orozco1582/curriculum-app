import { Experience, Education, Lenguage } from ".";

export class Person {

    private profileSummary: string;
    private linkedinUserID: string;
    private email: string;
    private phone: string;
    private location: string;
    private skills: Array<string>;
    private experience: Array<Experience>;
    private education: Education;
    private lenguages: Array<Lenguage>;

    constructor() {}

    import(rawData: any): Person {
        let person: Person = new Person();
        Object.assign(person, rawData);
        return person;
    }

}

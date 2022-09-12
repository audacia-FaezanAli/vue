export class User {
    firstName!: string;
    lastName!: string;
    dateOfBirth!: string;
    startDate!: string;
    role!: string;
    salary!: string;

    constructor(firstName: string, lastName: string, dateOfBirth: string, startDate: string, role: string, salary: string) {
        this.firstName = firstName;
        this.lastName= lastName;
        this.dateOfBirth= dateOfBirth;
        this.startDate = startDate;
        this.role = role;
        this.salary = salary;
    }
}
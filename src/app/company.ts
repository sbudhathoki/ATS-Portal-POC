export class Company {
    // companyId: number;
    companyName: string;
    industry: string;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    phoneNumber: string;

    constructor(companyName: string, 
                industry: string, 
                firstName: string, 
                lastName: string,
                title: string,
                email: string,
                phoneNumber: string) {
                    this.companyName = companyName;
                    this.industry = industry;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.title = title;
                    this.email = email;
                    this.phoneNumber = phoneNumber;
                }
}
export class EmailDTO {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  from?: string;
  enterprise?: string;
  post?: string;
  subject?: string;

  constructor(firstName?: string, lastName?: string, phoneNumber?: string, from?: string,enterprise?: string,post?: string, subject?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.from = from;
    this.enterprise = enterprise;
    this.post = post;
    this.subject = subject;
  }
}

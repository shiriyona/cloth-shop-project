export class Contact {
    public name: string;
    public phoneNumber: number;
    public email: string;
    public about: any;
    public tellUsMore: string;



  
    constructor(name: string, phoneNumber: number, email: string, about: any, tellUsMore: string) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.about = email;
      this.tellUsMore = tellUsMore;

    }    
}


export class Imag {
  public imagePath: string;
  
  
  
  constructor(imagePath: string) {
    this.imagePath = imagePath;
  }
  }
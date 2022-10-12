export class Jewel {
    public name: string;
    public description: string;
    public imagePath: string;
    public amount: number;

  
    constructor(name: string, desc: string, imagePath: string, amount: number) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.amount = amount;
    }
}
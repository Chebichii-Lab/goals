export class Goal {
    showDescription: boolean;
  static completeDate: string | number | Date;
  static id: number;
    constructor(public id: number, public name: string, public description: string ,public completeDate: Date){
        this.showDescription = false;
    }
}

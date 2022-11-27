export class PetShop {
  constructor(
    public id: number,
    public clientId: number,
    public petId: number,
    public description: string,
    public active: boolean,
    public startDateTime: Date,
    public doneDateTime: Date 
  ) {};
}

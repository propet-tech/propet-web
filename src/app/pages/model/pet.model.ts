import { Breed } from "./bread.model";

export class Pet {
    constructor(
      public id?: number,
      public name?: string,
      public clientId?: string,
      public weight?: number,
      public description?: string,
      public category?: any,
      public breed?: Breed
    ) {}

}
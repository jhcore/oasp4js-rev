export class Offer {
  id: number;
  description: String;
  name: String;
  state: number;
  price: number;

  constructor(id:number,name:String, description:String, state:number, price:number){
  	this.id = id;
  	this.description = description;
  	this.name = name;
  	this.state = state;
  	this.price = price;
  }
}
 
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
 
export class Position{
  id:number;
  offer:Offer;
  number:number;
  comment:String;
  state:number;

  constructor(id:number, offer:Offer, number:number, state:number, comment:String){
    this.id = id;
    this.offer = offer;
    this.number = number
    this.comment = comment;
    this.state = state;
  }  
}
import { Injectable } from '@angular/core'; 
import { Offer } from './offer'; 
import { OFFERS } from './mock-offers';  
/*
  This class represent a bridge between the components and all service classes (http, mocks, etc). In this case the class is like a sample with a mock OFFERS. In the future we need to use OfferManagementRestService
*/
@Injectable()
export class OfferService { 

  getOffer(id:number){  
    var result;
    for(var i = 0; i < OFFERS.length; i++){
      if(i == id)
        result = OFFERS[i];
    }
    return Promise.resolve(result);
  }

  getOffers(){
    return Promise.resolve(OFFERS);
  }

  getPaginatedOffers(pagenumber:number, pagesize:number){
    return Promise.resolve(OFFERS); //There are not pages in this mock
  }

  createOffer(id:number, Offer:Offer){
    Offer.id = id;
    OFFERS.push(Offer); 
  }

  deleteOffer(id:number){ 
    for(var i = 0; i < OFFERS.length; i++){
      if(i != id)
        OFFERS.splice(i, i+1);
    }
  }

  saveOffer(Offer:Offer){
    for(var i = 0; i < OFFERS.length; i++){
      if(i != Offer.id)
        OFFERS.splice(i, i+1, Offer);
    } 
  } 
}

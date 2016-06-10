import { Component, Input, OnInit, Injectable,ElementRef } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common'; 
import { TableService } from '../table.service'; 
import { OfferService } from '../../offer-mgmt/offer.service';  
import { TABLES } from '../mock-tables';
import { Table } from '../table';
import { Offer } from '../../offer-mgmt/offer';
import { OFFERS } from '../../offer-mgmt/mock-offers';
import { ButtonBarComponent } from '../../oasp/oasp-ui/button-bar/button-bar.component'

/**
  1) THIS IS A TEST!!! THE DATES OF THIS TEST DOESN'T HAVE SENSE, I need to change it. 
  2) I need to fix the problems with the service classes because dont work.
  3) This component is a way to test the functionality of the Angular2 and define a structure for the future WebComponents 
**/

@Component({
  selector: 'table-mgmt-details',
  templateUrl: './app/table-mgmt/table-details/table-details.component.html',
  styleUrls: ['./app/oasp4js-sample.component.css'],
  directives: [ButtonBarComponent]
}) 
export class TableDetailsComponent implements OnInit { 
	@Input() id:number; 
  
	TABLE:Table; 
  offer:Offer;
  OFFERS = OFFERS; //Only for test  
  selectedPositon:Offer;

  /*
  //TODO -> Pagination
  public totalItems:number = 64;
  public currentPage:number = 4;

  public maxSize:number = 5;
  public bigTotalItems:number = 175;
  public bigCurrentPage:number = 1;

  public setPage(pageNo:number):void {
    this.currentPage = pageNo;
  };

  public pageChanged(event:any):void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  };
  */

  selectedOption:number; 

  noOrderAssigned:boolean;
  orderAssigned:boolean;

  tableService:TableService = new TableService(); //doesnt work...

  constructor() {
    this.checkOrderAsigned();   
  } 
  
	ngOnInit() {   
		this.TABLE = this.getTable(this.id); //Check why doesn't work
    //this.TABLE = TABLES[this.id]; //Only for the test
	}
 
  addPosition(){
    console.log("Option = " + this.selectedOption)
    this.createOffer(this.selectedPositon);
  }
  
  checkOrderAsigned(){
    this.noOrderAssigned = OFFERS.length > 0;
    this.orderAssigned = !this.noOrderAssigned;
  }

  onClick(offer){
    console.log("Click position = " + offer.id);
    this.offer = offer;
  }

  onChange(opt){
    this.selectedPositon = opt;
  }

	buttonDefs:Object = [ 
      {
          label: 'Remove',
          onClick: function () {  
          alert("Remove item");

          //this.deleteTable(this.TABLE.id); //I dont know how can I use the methods of the father class
          },
          isActive: function () {
              return true;
          }
      }
  ];


  //TEST BECAUSE THE CLASS SERVICE DOESN'T WORK
   getTable(id:number){  
    var result;
    for(var i = 0; i < TABLES.length; i++){
      if(i == id)
        result = TABLES[i];
    }
    return result;
  }

  getTables(){
    return Promise.resolve(TABLES);
  }

  getPaginatedTables(pagenumber:number, pagesize:number){
    return TABLES; //There are not pages in this mock
  }

  createTable(id:number, table:Table){
    table.id = id;
    TABLES.push(table); 
  }

  deleteTable(id:number){ 
    for(var i = 0; i < TABLES.length; i++){
      if(i != id)
        TABLES.splice(i, i+1);
    }
  }

  //TEST OF OFFERS

  getOffer(id:number){  
    var result;
    for(var i = 0; i < OFFERS.length; i++){
      if(i == id)
        result = OFFERS[i];
    }
    return result;
  }

  createOffer(offer:Offer){
    offer.id = OFFERS.length;
    OFFERS.push(offer); 
  }

  deleteOffer(id:number){ 
    for(var i = 0; i < OFFERS.length; i++){
      if(i != id)
        OFFERS.splice(i, i+1);
    }
  }

  saveOffer(offer:Offer){
    for(var i = 0; i < OFFERS.length; i++){
      if(i != offer.id)
        OFFERS.splice(i, i+1, offer);
    } 
  } 

} 
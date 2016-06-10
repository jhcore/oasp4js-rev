import { Injectable } from '@angular/core'; 
import { Table } from './table';
import { TableManagementRestService } from './table-mgmt.rest.service';
import { TABLES } from './mock-tables';  
/*
  This class represent a bridge between the components and all service classes (http, mocks, etc). In this case the class is like a sample with a mock TABLES. In the future we need to use TableManagementRestService
*/ 
export class TableService { 
  
  getTable(id:number){  
    var result;
    for(var i = 0; i < TABLES.length; i++){
      if(i == id)
        result = TABLES[i];
    }
    return Promise.resolve(result);
  }

  getTables(){
    return Promise.resolve(TABLES);
  }

  getPaginatedTables(pagenumber:number, pagesize:number){
    return Promise.resolve(TABLES); //There are not pages in this mock
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

  saveTable(table:Table){
    for(var i = 0; i < TABLES.length; i++){
      if(i != table.id)
        TABLES.splice(i, i+1, table);
    } 
  } 
}

import { Injectable } from 'angular2/core'; 
import { Table } from './table'; 

/*
  Need to know how to do a http connection with the server
*/
@Injectable()
export class TableManagementRestService {
  
  //servicePath = currentContextPath + 'services/rest/tablemanagement/v1';
  
  getTable(id:number){

  }

  getTables(){

  }

  getPaginatedTables(pagenumber:number, pagesize:number){

  }

  createTable(id:number, table:Table){

  }

  deleteTable(id:number){
    
  }

  saveTable(table:Table){

  } 
}
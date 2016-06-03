import { Injectable } from 'angular2/core'; 
import { Table } from './table';
import { TABLES } from './mock-tables';
/*
  This class represent a bridge between the components and all service classes (http, mocks, etc). In this case the class is like a sample with a mock TABLES
*/
@Injectable()
export class TableService {
  
  
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

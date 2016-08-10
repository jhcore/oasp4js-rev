import { Component, OnInit } from '@angular/core';
import { TableDetailsComponent } from './table-mgmt/table-details/table-details.component';
import { TableSearchComponent } from './table-mgmt/table-search/table-search.component';
import { ButtonBarComponent } from './oasp/oasp-ui/button-bar/button-bar.component'
import { ModalDialogComponent } from './oasp/oasp-ui/modal-dialog/modal-dialog.component'
import { TableManagementRestService } from './table-mgmt/table-mgmt.rest.service'
import { TableService } from './table-mgmt/table.service';
import { OfferService } from './offer-mgmt/offer.service';
import { PositionService } from './offer-mgmt/position.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Table } from './table-mgmt/table'; 

@Component({
  moduleId: module.id,
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['oasp4js-sample.component.css'],
  directives: [TableDetailsComponent, TableSearchComponent, ButtonBarComponent,ModalDialogComponent],
  providers: [TableService, PositionService, OfferService,HTTP_PROVIDERS,TableManagementRestService]
})
export class Oasp4jsSampleAppComponent  implements OnInit{
  title = 'oasp4js-sample works!';

	constructor(private _tableService: TableService, private _tableManagementRestService:TableManagementRestService) {}

    TABLE:Table;

    ngOnInit() {  
      Promise.resolve(this._tableManagementRestService.getTable(101).subscribe(table => {
        this.TABLE = this.toTable(table); 
      }))
    }

    toTable(JSONTable:any){ 
      return new Table(JSONTable.id,JSONTable.waiterId,JSONTable.state);
    }

    dialog_header:String = "Eliminar Tabla";

    dialog_body:String = "¿Está seguro que desea eliminar esta Tabla?";

    dialog_buttons:Object = [ 
      {
          label: 'Accept',
          onClick: function (context) {   
            console.log("ACEPTAR");
          },
          isActive: function (context) {
              return true;
          },
          class: 'btn btn-primary',
          hidden: false
      },
      {
          label: 'Cancel',
          onClick: function (context) {     
            document.getElementById("modal-dialog").hidden = true ;
          },
          isActive: function (context) {
              return true;
          },
          class: 'btn btn-warning',
          hidden: false
      }
    ]; 

    show(){ 
      document.getElementById("modal-dialog").hidden = !document.getElementById("modal-dialog").hidden;
    }
}

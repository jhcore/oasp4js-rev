import { Component } from '@angular/core';
import { TableDetailsComponent } from './table-mgmt/table-details/table-details.component';
import { TableSearchComponent } from './table-mgmt/table-search/table-search.component';
import {ButtonBarComponent} from './oasp/oasp-ui/button-bar/button-bar.component'
@Component({
  moduleId: module.id,
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['oasp4js-sample.component.css'],
  directives: [TableDetailsComponent, TableSearchComponent, ButtonBarComponent]
})
export class Oasp4jsSampleAppComponent {
  title = 'oasp4js-sample works!';
}

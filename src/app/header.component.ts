/**
 * Created by andreykubasov on 03.05.17.
 */
import {Component} from '@angular/core';
import {SharedService} from './shared-service';
@Component({
  selector: 'app-header',
  template: require('./header.component.html')
})
export class HeaderComponent {
  headerTitle: string = 'Header of App';
  currentusername: string;
  constructor(private sharedservice: SharedService) { }
  getUser(): void {
    this.currentusername = this.sharedservice.getUser().name;
  }
}

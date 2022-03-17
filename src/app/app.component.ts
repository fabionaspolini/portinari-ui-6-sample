import { Component } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public poNotification: PoNotificationService){}
  disabled = false;
  title = 'angular-debug';

  showNotification() {
    this.poNotification.success('PO Notification!')
    this.disabled = true
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent {
  public pageTitleArray: any = [];
  viewNotifiations: boolean = false


  // pass closed notification
  @Output() closeNotificationOut = new EventEmitter<boolean>();



  constructor (public dialog: MatDialog) {
  }

  ngOnInit(): void {

  }



  // notification
  viewDropNotifiations() {
    this.viewNotifiations = !this.viewNotifiations;
    this.closeNotificationOut.emit(this.viewNotifiations);
  }


  // change language

  toggleLang() {
  }

}

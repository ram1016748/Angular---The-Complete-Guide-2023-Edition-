import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succss-alert',
  templateUrl: './succss-alert.component.html',
  styleUrls: ['./succss-alert.component.css']
})
export class SuccssAlertComponent implements OnInit {
  allowNewServer = false;
  eventBinding = 'My event not bind';
  serverName='';

  constructor() {
    setTimeout (() => {
      this.allowNewServer = true;
    }, 2000);
  }

  id = 10;
  status = 'Offline';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  eventBind() {
    this.eventBinding = 'My event binding started';
  }

  passingAndUsingDataEvent(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  // passingAndUsingDataEvent(event: any) {
  //   console.log(event);
  // }
}

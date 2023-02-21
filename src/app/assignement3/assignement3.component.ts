import { Component } from '@angular/core';

@Component({
  selector: 'app-assignement3',
  templateUrl: './assignement3.component.html',
  styleUrls: ['./assignement3.component.css']
})
export class Assignement3Component {
 showSecret = false;
 log: any[] = [];

 onToggleDetails(){
  this.showSecret = !this.showSecret;
  this.log.push(this.log.length + 1);
 }
}

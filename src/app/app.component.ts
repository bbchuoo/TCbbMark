import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'alvinTest4';
  items = [];
  bb = '';
  danger = '';
  bbC() {
    this.danger = '';

    this.items = [];
    const index1 = this.bb.indexOf('app');
    const index2 = this.bb.indexOf('.');
    const index3 = this.bb.lastIndexOf('/');
    const index4 = this.bb.lastIndexOf('.ts');
    const index5 = this.bb.indexOf('.ts');

    this.items.push(this.bb.slice(index1, index3))
    this.items.push(this.bb.slice(index3 + 1, index4))
    this.items.push(this.bb.slice(index1, index5))

    if ((this.items[2] + '.ts').length >= 160) {
      this.danger = '請注意！長度已大於等於160'
    }
    if ((this.items[2] + '.ts').length >= 170) {
      this.danger = '請注意！長度已大於等於170'
    }
    // console.log(this.bb.slice(index1,index2));
    // console.log(this.bb.slice(index1,index3));
    // console.log(this.bb.slice(index3+1));

  }

  copyEvent() {

  }
}

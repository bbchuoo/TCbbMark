import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alvinTest4';
  items = [];
  bb='';
  bbC(){
    this.items = [];
    const index1 = this.bb.indexOf('app');
    const index2 = this.bb.indexOf('.');
    const index3 = this.bb.lastIndexOf('/');
    const index4 = this.bb.lastIndexOf('.ts');
    
    this.items.push(this.bb.slice(index1,index3))
    this.items.push(this.bb.slice(index3+1,index4))
    this.items.push(this.bb.slice(index1,index2))
    
    // console.log(this.bb.slice(index1,index2));
    // console.log(this.bb.slice(index1,index3));
    // console.log(this.bb.slice(index3+1));
    
      }
}

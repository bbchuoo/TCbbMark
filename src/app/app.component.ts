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
  items2 = [];
  description = '';
  name = '';
  month = '';
  day = '';
  year = '';
  option1 = false;
  option2 = false;
  option3 = false;
  // window的 反斜線
  // src\app\pages\nfn\nfn07\twngdt03\share\service\gold-purchase-period.service.ts
  // os的 正斜線
  // src/app/pages/nap/nap04/twnapt35/shared/component/deduct-payment-view/deduct-payment-view.component.ts

  // 規則要的是 反斜線
  bbC() {
    setTimeout(() => {
      this.option1 = false;
      this.option2 = false;
      this.option3 = false;
    });

    this.danger = '';
    this.bb = this.bb.replace(/\//g, '\\');
    console.log('bb 2= ', this.bb);
    // this.bb = this.bb.replace(/:/g, '\\');

    console.log('bb 33= ', this.bb);
    this.items = [];
    this.items2 = [];
    const index1 = this.bb.indexOf('app');
    const index2 = this.bb.indexOf('.');
    const index3 = this.bb.lastIndexOf('\\');
    console.log('index3=', index3)
    const index4 = this.bb.lastIndexOf('.ts');
    const index5 = this.bb.indexOf('.ts');

    this.items.push(this.bb.slice(index1, index3));
    this.items.push(this.bb.slice(index3 + 1, index4));
    this.items.push(this.bb.slice(index1, index5));

    if ((this.items[2] + '.ts').length >= 160) {
      this.danger = '請注意！長度已大於等於160';
    }
    if ((this.items[2] + '.ts').length >= 170) {
      this.danger = '請注意！長度已大於等於170';
    }
    // console.log(this.bb.slice(index1,index2));
    // console.log(this.bb.slice(index1,index3));
    // console.log(this.bb.slice(index3+1));
    const a1 = '/**';
    const a2 = ' *';
    const a3 = ' * 本類別詳細說明。';
    const a4 = ' * <p/>';
    const a5 = ' * Package: ' + this.items[0];
    const a6 = ' * File Name: ' + this.items[1] + ' <br>';
    const a7 = a4;
    const a8 = ' * Purpose: ' + '<br>';
    const a9 = a2;
    const a10 = ' * @ClassName: ' + this.items[2];
    const a11 = ' * @Description: ' + this.description;
    const a12 = ' * @Copyright : Copyright (c) TCB Corp. 2021. All Rights Reserved.';
    const a13 = ' * @Company: TCB EA Team.';
    const a14 = ' * @author ' + this.name;
    const a15 = ' * @version 1.0, ' + (this.year ? this.year : (new Date().getFullYear())) + '年' + (this.month ? this.month : (new Date().getMonth() + 1)) + '月' + (this.day ? this.day : new Date().getDate()) + '日';
    const a16 = ' */';
    this.items2.push(a1);
    this.items2.push(a2);
    this.items2.push(a3);
    this.items2.push(a4);
    this.items2.push(a5);
    this.items2.push(a6);
    this.items2.push(a7);
    this.items2.push(a8);
    this.items2.push(a9);
    this.items2.push(a10);
    this.items2.push(a11);
    this.items2.push(a12);
    this.items2.push(a13);
    this.items2.push(a14);
    this.items2.push(a15);
    this.items2.push(a16);
  }

  copyEvent() {

  }

  checkBoxChange(checkBox: number) {
    switch (checkBox) {
      case 1:
        if (this.option1) {
          this.description = this.description + '-';
        } else {
          this.description = this.description.replace('-', '');
        }
        this.bbC()
        break;
      case 2:
        if (this.option2) {
          this.description = this.description + '上行';
        } else {
          this.description = this.description.replace('上行', '');
        }
        this.bbC()
        break;
      case 3:
        if (this.option3) {
          this.description = this.description + '下行';
        } else {
          this.description = this.description.replace('下行', '');
        }
        this.bbC()
        break;
    }

  }
}

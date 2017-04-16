import { Component } from '@angular/core';
import { MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public snackBar: MdSnackBar) {

  }

  checked: boolean =false;

  title = 'app works!';

  states = ['Delhi', 'Karnataka', 'Tamilnadu'];

  openSnackBar() {
    // this.snackBar.openFromComponent(AppComponent, {
    //   duration: 1000
    // });

let text = this.checked? "You have checked me": "You did not check me";
    this.snackBar.open(text,undefined, {duration: 2000});
  }
}

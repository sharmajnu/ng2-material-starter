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

  title = 'app works!';

  states = ['Delhi', 'Karnataka', 'Tamilnadu'];

  openSnackBar() {
    // this.snackBar.openFromComponent(AppComponent, {
    //   duration: 1000
    // });

    this.snackBar.open("Hello how are you",undefined, {duration: 2000});
  }
}

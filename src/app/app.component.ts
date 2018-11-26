import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    const btnContainer = document.getElementById('myDIV');
    console.log(btnContainer);
    const btns = btnContainer.getElementsByClassName('btn');

    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += ' active';
      });
    }
  }

}

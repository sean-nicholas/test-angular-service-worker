import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  swChecking = false

  constructor(
    private swUpdate: SwUpdate
  ) { }

  checkUpdate() {
    this.swChecking = true
    this.swUpdate.checkForUpdate()
      .then(() => this.swChecking = false)
      .catch(console.error)
  }
}

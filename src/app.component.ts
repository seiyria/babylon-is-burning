import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [`
    :host {
      width: 100vw;
      height: 100vh;
    }
  `],
  template: `
    <game></game>
  `
})
export class AppComponent {}

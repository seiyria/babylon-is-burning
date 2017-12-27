
import { Component, OnInit } from '@angular/core';
import { Renderer } from './game';

@Component({
  selector: 'game',
  template: `
    <canvas id="render-canvas"></canvas>
  `,
  styles: [`    
    #render-canvas {
      width: 100vw;
      height: 100vh;
      touch-action: none;
    }
  `]
})
export class GameComponent implements OnInit {

  private renderer: Renderer;

  ngOnInit() {
    this.renderer = new Renderer();
    this.renderer.initialize(<HTMLCanvasElement>document.getElementById('render-canvas'));
  }
}

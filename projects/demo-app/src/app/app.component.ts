import { Component } from '@angular/core';
//import { NgxDomVisualizerComponent } from 'ngx-dom-visualizer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-app';
  toggleVisualizer() {
    //console.log('Visualizer toggled:', NgxDomVisualizerComponent);
  }
}

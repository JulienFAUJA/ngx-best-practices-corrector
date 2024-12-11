import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-element-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './element-visualizer.component.html',
  styleUrl: './element-visualizer.component.css',
})
export class ElementVisualizerComponent {
  @Input() tagName!: string; // Nom du tag HTML (par exemple : DIV, BUTTON, A)
  @Input() boundingRect!: DOMRect; // Position et dimensions de l'élément
  @Output() action = new EventEmitter<string>(); // Émet des actions spécifiques

  // Détermine la couleur en fonction du type de tag
  get borderColor(): string {
    switch (this.tagName) {
      case 'DIV':
        return 'blue';
      case 'BUTTON':
        return 'green';
      case 'A':
        return 'orange';
      default:
        return 'red'; // Couleur par défaut
    }
  }

  onAction(action: string) {
    this.action.emit(action); // Émet l'action au composant parent
    console.log('action', action, ' dans le component du tag');
  }
}

import { Component, ElementRef, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementVisualizerComponent } from './Visualizer/Componants/element-visualizer/element-visualizer.component';


@Component({
  selector: 'lib-ngx-dom-visualizer',
  standalone: true,
  imports: [CommonModule, ElementVisualizerComponent],
  templateUrl: './ngx-dom-visualizer.component.html',
  styleUrls: ['./ngx-dom-visualizer.component.css'],
})
export class NgxDomVisualizerComponent {
  hoveredElement: HTMLElement | null = null;
  boundingRect: DOMRect | null = null;

  @HostListener('mouseover', ['$event.target'])
  onMouseOver(target: HTMLElement) {
    // Ignore les événements pour le conteneur racine ou les bordures/headers
    if (this.shouldIgnore(target)) {
      return;
    }

    this.hoveredElement = target;
    this.boundingRect = target.getBoundingClientRect();
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    const relatedTarget = event.relatedTarget as HTMLElement;

    // Si la souris reste dans le conteneur principal, ne réinitialise pas
    if (this.el.nativeElement.contains(relatedTarget)) {
      return;
    }

    // Réinitialise si la souris quitte complètement le conteneur
    this.hoveredElement = null;
    this.boundingRect = null;
  }

  private shouldIgnore(target: HTMLElement): boolean {
    // Vérifie si l'élément survolé est le conteneur racine ou ses enfants
    return (
      target === this.el.nativeElement ||
      this.el.nativeElement.contains(target.closest('.visualizer-header'))
    );
  }

  constructor(private el: ElementRef) {}
}


import { Component, Input } from '@angular/core';
import { GridStackNode } from 'gridstack';
import { GridstackModule } from 'gridstack/dist/angular';
import { PrimengUIModule } from '../../srared/modules/primeng-ui/primeng-ui.module';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [
    GridstackModule,
    NgTemplateOutlet,
    PrimengUIModule
  ],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.css'
})
export class GridItemComponent {

  @Input() parameters: GridStackNode = {
    noResize: true,
    h:2,
    w:2
  }

}

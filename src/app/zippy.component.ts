import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  template: `
    <div class="zippy">
        <div class="zippy-title" (click)="toggle()">
          {{ title }}      
          <i class="pull-right glyphicon"
            [ngClass]="{
              'glyphicon-chevron-down': !isExpanded,
              'glyphicon-chevron-up': isExpanded
            }"></i>
        </div>
        <div *ngIf="isExpanded" class="zippy-content">
            <ng-content></ng-content>
        </div>
    </div>
  `,
  styles: [
    `
      .zippy {
        width: 400px;
      }
    `
  ]
})
export class ZippyComponent implements OnInit {
  @Input() title: string;
  isExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isExpanded = !this.isExpanded
  }

}

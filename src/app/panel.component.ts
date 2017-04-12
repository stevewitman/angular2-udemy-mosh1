import { Component } from '@angular/core';

@Component({
    selector: 'panel',
    template: `
        <h2>Panel Component</h2>
        <div class="panel panel-default">
            <div class="panel-heading">
                <ng-content select=".heading"></ng-content>
            </div>
            <div class="panel-body">
                <ng-content selectt=".body"></ng-content>
            </div>
        </div>
    `
})
export class PanelComponent {

}
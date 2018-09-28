import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkyhookDndService } from "@angular-skyhook/core";
import { BoxWithLocation } from '../box-with-location.interface';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-drag-container',
    template: `
  <div [ngStyle]="styles" >
    <app-draggable-box [left]="x" [top]="y" id="23" title="ToDo Nr 1"></app-draggable-box>
  </div>
  `,
    styles: []
})
export class DragContainerComponent implements OnInit, OnDestroy {

    x = 20;
    y = 50;

    styles = {
        minHeight: '300px',
        maxWidth: (this.platform.width() - 40) / 2,
        maxHeight: '400px',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        border: '1px solid black',
        position: 'relative',
    };



    constructor(private dnd: SkyhookDndService, private platform: Platform) { }


    ngOnInit() {
    }

    ngOnDestroy() {

    }

}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkyhookDndService } from "@angular-skyhook/core";
import { BoxWithLocation } from '../box-with-location.interface';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-drag-container',
    template: `
  <div [ngStyle]="styles" [dropTarget]="boxTarget">
    <app-draggable-box [left]="x" [top]="y" id="23" title="ToDo Nr 1"></app-draggable-box>
    <app-draggable-box [left]="x" [top]="y+50" id="24" title="ToDo Nr 2"></app-draggable-box>
    <app-draggable-box [left]="x" [top]="y+100" id="25" title="ToDo Nr 3"></app-draggable-box>
    <app-draggable-box [left]="x" [top]="y+150" id="26" title="ToDo Nr 4"></app-draggable-box>
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

    boxTarget = this.dnd.dropTarget<BoxWithLocation>('BOX', {
        drop: (monitor) => {
            console.log("----------------------");
            console.log(monitor.getClientOffset());
            console.log(monitor.getDifferenceFromInitialOffset());
            console.log(monitor.getInitialClientOffset());
            console.log(monitor.getInitialSourceClientOffset());
            console.log(monitor.getSourceClientOffset());
            console.log('Screen Width is: ', this.platform.width());

            const delta = monitor.getDifferenceFromInitialOffset();
            const item = monitor.getItem();
            this.moveBox(item.id, item.left + delta.x - this.platform.width() / 2, item.top + delta.y);
        }
    });

    constructor(private dnd: SkyhookDndService, private platform: Platform) { }

    moveBox(id: any, x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.boxTarget.unsubscribe();
    }

}
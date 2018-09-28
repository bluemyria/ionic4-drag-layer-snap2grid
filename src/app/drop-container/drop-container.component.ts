import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkyhookDndService } from "@angular-skyhook/core";
import { BoxWithLocation } from '../box-with-location.interface';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-drop-container',
    template: `
  <div [ngStyle]="styles" [dropTarget]="boxTarget">
   
  </div>
  `,
    styles: []
})
export class DropContainerComponent implements OnInit, OnDestroy {

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
        zIndex: 1000,
    };

    boxTarget = this.dnd.dropTarget<BoxWithLocation>('BOX', {
        drop: (monitor) => {
            console.log("----------IN DROP container ------------");
            console.log(monitor.getClientOffset());
            console.log(monitor.getDifferenceFromInitialOffset());
            console.log(monitor.getInitialClientOffset());
            console.log(monitor.getInitialSourceClientOffset());
            console.log(monitor.getSourceClientOffset());
            console.log('Screen Width is: ', this.platform.width());

            const delta = monitor.getDifferenceFromInitialOffset();
            console.log(delta);
            const item = monitor.getItem();
            console.log(item);
            this.moveBox(item.id, 400, 50);
            //this.moveBox(item.id, item.left + delta.x, item.top + delta.y);
        }
    });

    constructor(private dnd: SkyhookDndService, private platform: Platform) { }

    moveBox(id: any, x: number, y: number) {
        console.log('Move ', id, x, y);
        this.x = x;
        this.y = y;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.boxTarget.unsubscribe();
    }

}
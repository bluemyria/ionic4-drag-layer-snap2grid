import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { SkyhookDndModule } from "@angular-skyhook/core";

import { CustomDragLayerComponent } from '../custom-drag-layer/custom-drag-layer.component';
import { BoxComponent } from '../box-component/box.component';
import { DraggableBoxComponent } from '../draggable-box/draggable-box.component';
import { DragContainerComponent } from '../drag-container/drag-container.component';
import { BoxDragPreviewComponent } from '../box-drag-preview/box-drag-preview.component';

import { SkyhookMultiBackendModule } from '@angular-skyhook/multi-backend';

import { SkyhookDndService } from "@angular-skyhook/core";

import { customMultiBackend } from '../customMultiBackend';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkyhookMultiBackendModule,
    SkyhookDndModule.forRoot({ backendFactory: customMultiBackend }),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    CustomDragLayerComponent,
    BoxComponent,
    DraggableBoxComponent,
    DragContainerComponent,
    BoxDragPreviewComponent
  ],
  providers: [SkyhookDndService]
})
export class HomePageModule { }

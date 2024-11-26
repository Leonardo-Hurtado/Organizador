import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';
import { AgregarComponent } from 'src/app/components/agregar/agregar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPageRoutingModule
  ],
  declarations: [AgregarPage, AgregarComponent]
})
export class AgregarPageModule {}

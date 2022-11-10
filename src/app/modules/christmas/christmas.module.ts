import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlaceHolderService } from 'src/app/core/services/place-holder.service';
import { IconsModule } from 'src/app/icons/icons.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChristmasComponent } from './christmas.component';
import { ChristmasRoutingModule } from './christmas-routing.module';


@NgModule({
  declarations: [
ChristmasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChristmasRoutingModule,
    IconsModule,
    SharedModule
  ],
  providers: [
    HttpClientModule,
    PlaceHolderService
  ]
})
export class ChristmasModule { }

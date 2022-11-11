import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlaceHolderService } from 'src/app/core/services/place-holder.service';
import { IconsModule } from 'src/app/icons/icons.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChristmasNewComponent } from 'src/app/modules/christmas2/christmas-new.component';
import { ChristmasNewRoutingModule } from './christmas-new-routing.module';



@NgModule({
  declarations: [
ChristmasNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChristmasNewRoutingModule,
    IconsModule,
    SharedModule
  ],
  providers: [
    HttpClientModule,
    PlaceHolderService
  ]
})
export class ChristmasNewModule { }

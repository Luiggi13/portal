// import * as shared from "./index";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import * as shared from "./index";
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [...shared.components, SpinnerComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...shared.components,
  ],
  entryComponents: [],
})
export class SharedModule {}

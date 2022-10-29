import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Camera, Columns, Heart, Github, Settings, Power, Menu } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  Settings,
  Columns,
  Power,
  Menu
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule {}
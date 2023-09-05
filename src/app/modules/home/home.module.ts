import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadSheetComponent } from './components/spread-sheet/spread-sheet.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class HomeModule { }

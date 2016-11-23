import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { SlideComponent } from './dashboard/slide/slide.component';
import { NavigatorComponent } from './dashboard/navigator/navigator.component';
import { PhysiologicalComponent } from './dashboard/physiological/physiological.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    SlideComponent,
    NavigatorComponent,
    PhysiologicalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

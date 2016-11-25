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
import { CustomerBehaviorComponent } from './dashboard/physiological/customer-behavior/customer-behavior.component';
import { CustomerPhysinfoComponent } from './dashboard/physiological/customer-physinfo/customer-physinfo.component';
import { DevicesInfoComponent } from './dashboard/physiological/devices-info/devices-info.component';
import { IndoorBehaviorComponent } from './dashboard/physiological/indoor-behavior/indoor-behavior.component';
import { SleepStatusComponent } from './dashboard/physiological/customer-physinfo/sleep-status/sleep-status.component';
import { HeartbeatComponent } from './dashboard/physiological/customer-physinfo/heartbeat/heartbeat.component';
import { BreathComponent } from './dashboard/physiological/customer-physinfo/breath/breath.component';
import { BodyTemperatureComponent } from './dashboard/physiological/customer-physinfo/body-temperature/body-temperature.component';
import { BloodOxygenComponent } from './dashboard/physiological/customer-physinfo/blood-oxygen/blood-oxygen.component';
import { GlycemiaComponent } from './dashboard/physiological/customer-physinfo/glycemia/glycemia.component';
import { UricAcidComponent } from './dashboard/physiological/customer-physinfo/uric-acid/uric-acid.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    SlideComponent,
    NavigatorComponent,
    PhysiologicalComponent,
    CustomerBehaviorComponent,
    CustomerPhysinfoComponent,
    DevicesInfoComponent,
    IndoorBehaviorComponent,
    SleepStatusComponent,
    HeartbeatComponent,
    BreathComponent,
    BodyTemperatureComponent,
    BloodOxygenComponent,
    GlycemiaComponent,
    UricAcidComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdSidenavModule, MdDialogModule, MdMenuModule, MdToolbarModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MdUniqueSelectionDispatcher} from "@angular2-material/core";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    NavbarComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,
    MdDialogModule,
    MdMenuModule,
    MdToolbarModule
  ],
  providers: [MdUniqueSelectionDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }

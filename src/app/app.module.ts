import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { AdminLinkDirective } from './admin-link.directive';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    AdminLinkDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

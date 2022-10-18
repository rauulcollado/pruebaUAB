import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comunes/header/header/header.component';
import { FooterComponent } from './comunes/footer/footer/footer.component';
import { HomeComponent } from './components/home/home/home.component';
import { HeroesComponent } from './components/home/heroes/heroes/heroes.component';
import { AboutComponent } from './components/home/about/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WathWeDoComponent } from './components/wath-we-do/wath-we-do.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, NotFoundComponent, WathWeDoComponent, OurWorkComponent, WhoWeAreComponent, ContactUsComponent, ModalComponent, CarouselComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

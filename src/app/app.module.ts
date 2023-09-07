import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CertificationComponent } from './certification/certification.component';
import { ProgramsComponent } from './programs/programs.component';
import { TeamComponent } from './team/team.component';
import { VerfiedComponent } from './verification/verfied/verfied.component';
import { CheckComponent } from './verification/check/check.component';
import { CertificateComponent } from './verification/certificate/certificate.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    RegistrationComponent,
    CertificationComponent,
    ProgramsComponent,
    TeamComponent,
    VerfiedComponent,
    CertificationComponent,
    CheckComponent,
    CertificateComponent,
    LoadingComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

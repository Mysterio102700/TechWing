import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { CertificationComponent } from './certification/certification.component';
import { ProgramsComponent } from './programs/programs.component';
import { TeamComponent } from './team/team.component';
import { CheckComponent } from './verification/check/check.component';
import { VerfiedComponent } from './verification/verfied/verfied.component';
import { CertificateComponent } from './verification/certificate/certificate.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CoursesComponent } from './courses/courses.component';
import { BookingComponent } from './booking/booking.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegistrationComponent},
  {path:"certification",component:CertificationComponent},
  {path:"programs",component:ProgramsComponent},
  {path:"team",component:TeamComponent},
  {path:"check",component:CheckComponent},
  {path:"verify/:id",component:VerfiedComponent},
  {path:"cerificate/:id",component:CertificateComponent},
  {path:"courses",component:CoursesComponent},
  {path:"book",component:BookingComponent},
  {path:"Privacy&Policy",component:PrivacyPolicyComponent},
  {path:"terms&Conditions",component:TermsConditionsComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

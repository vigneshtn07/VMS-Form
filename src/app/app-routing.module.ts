import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignUpComponent } from './components/registration/skill-source/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'registration', children: [
      {
        path: 'skill-source', component: RegistrationComponent, children: [
          { path: 'signUp', component: SignUpComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';

import { ThemeModule } from 'src/theme';
import { darkTheme } from 'src/theme/variants/app-dark-theme';
import { lightTheme } from 'src/theme/variants/app-light-theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignUpComponent } from './components/registration/skill-source/sign-up/sign-up.component';
import { SignupPhaseOneComponent } from './components/registration/skill-source/sign-up/signup-phase-one/signup-phase-one.component';
import { SignupPhaseTwoComponent } from './components/registration/skill-source/sign-up/signup-phase-two/signup-phase-two.component';
import { SignupPhaseThreeComponent } from './components/registration/skill-source/sign-up/signup-phase-three/signup-phase-three.component';
import { SignupPhaseFourComponent } from './components/registration/skill-source/sign-up/signup-phase-four/signup-phase-four.component';
export abstract class AppModuleConstants {
  static readonly MODULE_IMPORTS = [
    BrowserModule,
    AppRoutingModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light',
    }),
    SharedModule,
  ];
  static readonly MODULE_DECLARATIONS = [
    AppComponent,
    RegistrationComponent,
    SignUpComponent,
    SignupPhaseOneComponent,
    SignupPhaseTwoComponent,
    SignupPhaseThreeComponent,
    SignupPhaseFourComponent,
  ];
  static readonly MODULE_PROVIDERS = [];
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
AuthGuard;

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  // {
  //   path: '',
  //   component: LoginComponent,
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

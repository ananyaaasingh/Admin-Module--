import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserQuizComponent } from './user/user-quiz/user-quiz.component';


const routes: Routes = [
  {
    path : "login" , component : LoginComponent
  },
  {
    path : "register" , component : RegisterComponent
  },
  {
    path : 'user-dashboard' , component : UserDashboardComponent,
    canActivate : [AuthGuard],
    children : [
      {
        path : "user-header" , component : UserHeaderComponent
      },
      {
        path : "user-footer" , component : UserFooterComponent
      },
      {
        path : "user-home" , component : UserHomeComponent
      },
      {
        path : "user-profile" , component : UserProfileComponent
      },
      {
        path : "user-quiz" , component : UserQuizComponent
      },
      {
        path : "" , redirectTo : "/user-dashboard/user-home" , pathMatch : "full"
      }
    ]
  },
  {
    path : "" , redirectTo : "/register" , pathMatch : "full"
  },
  
  {
    path : 'admin' , 
    canActivate : [AuthGuard],
    loadChildren : () =>
     import ('./modules/admin/admin.module')
     .then((m) => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent]
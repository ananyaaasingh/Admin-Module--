import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { QuestComponent } from './modules/admin/components/quest/quest.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserQuizComponent } from './user/user-quiz/user-quiz.component';
import { UserHomeComponent } from './user/user-home/user-home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    QuestComponent,
    UserDashboardComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserProfileComponent,
    UserQuizComponent,
    UserHomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordService } from './service/password.service';
import { FormsModule } from '@angular/forms';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { PasswordAddComponent } from './password-add/password-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordListComponent,
    PasswordUpdateComponent,
    PasswordAddComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }

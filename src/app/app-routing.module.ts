import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { PasswordAddComponent } from './password-add/password-add.component';

const routes: Routes = [
  { path: '', component: PasswordListComponent },
  { path: 'update/:id', component: PasswordUpdateComponent },
  { path: 'add', component: PasswordAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

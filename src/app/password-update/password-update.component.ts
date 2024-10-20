import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Password } from '../models/password.model';
import { Observable } from 'rxjs';
import { PasswordService } from '../service/password.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {
  passwordForm: FormGroup;
  showPassword: boolean = false;
  passwordId: string | null | undefined;
  password$: Observable<Password> | undefined;

  constructor(
    private route: ActivatedRoute,
    private passwordService: PasswordService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.passwordForm = this.fb.group({
      category: [''],
      app: [''],
      userName: [''],
      encryptedPassword: [''],
    });
  }

  ngOnInit(): void {
    this.passwordId = this.route.snapshot.paramMap.get('id');
    if (this.passwordId) {
      this.passwordService.getPassword(this.passwordId).subscribe(
        (data: Password) => {
          this.passwordForm.patchValue(data);
        }
      );
    }
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword; // Toggle the showPassword flag
  }
  onSubmit(): void {
    if (this.passwordId) {
      const updatedPassword: Password = {
        id: this.passwordId,
        category: this.passwordForm.value.category,
        app: this.passwordForm.value.app,
        userName: this.passwordForm.value.userName,
        encryptedPassword: this.passwordForm.value.encryptedPassword
      };

      this.passwordService.updatePassword(updatedPassword).subscribe(
        (response: Password) => {
          console.log('Password updated successfully!', response);
          this.router.navigate(['/']);
        }
      );
    }
  }
}

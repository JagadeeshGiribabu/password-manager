import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from '../service/password.service';
import { Password } from '../models/password.model';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-password-add',
  templateUrl: './password-add.component.html',
  styleUrls: ['./password-add.component.css']
})
export class PasswordAddComponent {
  password: Password = { category: '', app: '', userName: '', encryptedPassword: ''};
  submitted = false;

  constructor(private passwordService: PasswordService, private router: Router, private notificationService: NotificationService) {}

  addPassword(): void {
    this.passwordService.addPassword(this.password).subscribe({
      next: () => {
        this.notificationService.showNotification('Password added successfully!', 'success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.notificationService.showNotification('Failed to add password.', 'error');
      }
    });
  }
}

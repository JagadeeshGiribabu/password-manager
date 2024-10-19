import { Password } from './../models/password.model';
import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../service/password.service';
import { NotificationService } from '../service/notification.service';
@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent implements OnInit {
  passwords: Password[] = [];
  isPasswordVisible: boolean = false;

  constructor(private passwordService: PasswordService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadPasswords();
  }

  togglePasswordVisibility(password: Password) {
    password.show = !password.show; // Toggle the visibility
  }
  
  loadPasswords(): void {
    this.passwordService.getPasswords().subscribe((data:Password[]) => {
      this.passwords = data.map(password => ({ ...password, show: false , decriptedPassword: atob(password.encryptedPassword)}));
    });
  }

  deletePassword(id: number): void {
    this.passwordService.deletePassword(id).subscribe(() => {
      this.notificationService.showNotification('Password deleted successfully!', 'success');
      this.loadPasswords();
    },
    error => {
      this.notificationService.showNotification('Failed to delete password.', 'error');
  });
  }
}

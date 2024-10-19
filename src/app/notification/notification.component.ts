import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
    notification: { message: string; type: 'success' | 'error' } | null = null;

    constructor(private notificationService: NotificationService) {}

    ngOnInit(): void {
        this.notificationService.notification$.subscribe(
            notification => {
                this.notification = notification;
            }
        );
    }
}

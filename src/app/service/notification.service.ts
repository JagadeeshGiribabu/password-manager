import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Notification {
    message: string;
    type: 'success' | 'error';
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private notificationSubject = new BehaviorSubject<Notification | null>(null);
    notification$ = this.notificationSubject.asObservable();

    showNotification(message: string, type: 'success' | 'error') {
        this.notificationSubject.next({ message, type });
        setTimeout(() => {
            this.notificationSubject.next(null);
        }, 5000); // Hide notification after 5 seconds
    }
}

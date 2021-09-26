import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService, private router: Router, public auth: AuthService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value: boolean) => {
        this.showAddTask = value;
      });
  }

  ngOnInit(): void {
    console.log(this.auth);
  }

  toggleAddTask: () => void = () => {
    this.uiService.toggleAddTask();
  };

  hasRoute(route: string) {
    return this.router.url === route;
  }
}

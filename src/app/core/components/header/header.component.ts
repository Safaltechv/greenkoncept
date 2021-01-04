import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/core.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    private readonly authService: AuthService,
    readonly router: Router,
  ) {
    this.user = this.authService.getUser();
   }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logoutHelper().subscribe(_ => {
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }
}

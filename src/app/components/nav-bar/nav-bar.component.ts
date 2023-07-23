// nav-bar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  ngOnInit(): void {
    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/module-auth/auth/login']);
  }
}

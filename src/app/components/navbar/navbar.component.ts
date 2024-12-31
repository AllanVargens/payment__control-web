import { ChangeDetectorRef, Component, effect, Input, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConfirmButtonComponent } from '../confirm-button/confirm-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ConfirmButtonComponent],
  providers: [LoginService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLogged: boolean = this.router.url !== "/" ? true : false;
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout();
  }
}

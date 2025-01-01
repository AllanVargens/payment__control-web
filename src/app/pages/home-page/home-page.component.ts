import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent ,NavbarComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor() {
  }
}

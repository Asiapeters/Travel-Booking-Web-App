import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}

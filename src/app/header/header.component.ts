import { Component } from '@angular/core';
import {AuthService} from '../authentication/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get user(): Observable<User | null> {
    return this.authService.user$;
  }

  signOut(): void {
    this.authService.signOut().then((_) => {
      this.router.navigate(['sign-in']).then(() => {});
    });
  }
}


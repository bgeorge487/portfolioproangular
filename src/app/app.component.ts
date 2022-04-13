import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioproangular';

  constructor(private _authService: AuthService){}

  ngOnInit(): void {
    if(this._authService.isUserAuthenticated())
      this._authService.sendAuthStateChangeNotification(true);
  }
}

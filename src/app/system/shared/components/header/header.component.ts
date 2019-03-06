import {Component, OnInit} from '@angular/core';
import {Data, Router} from '@angular/router';
import {User} from '../../../../shared/models/user.model';
import {AuthenticationService} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'isd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Data = new Date();
  user: User;

  constructor(
    private  authService: AuthenticationService,
    private  router: Router
  ) {
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

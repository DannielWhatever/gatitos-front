import { Injectable } from '@angular/core';
import { Session } from './session.interfaces';
import { Router } from '@angular/router';
import { UtilService } from '../util-service/util.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';

declare var gapi: any;

@Injectable()
export class SessionService {

  private session: Session = null;

  constructor(private router: Router, private utilService: UtilService) { }

  public isSignedIn(): boolean {
    return localStorage.getItem('session') != null;
  }

  public getSession(): Observable<Session> {
    if (this.session != null) {
      return of(this.session);
    }
    // intenta recuperar del localStorage
    const sessionString = localStorage.getItem('session');
    if (sessionString) {
      const googleSession = new Session(JSON.parse(sessionString));
      // backedn
      return this.utilService.post<any>('/login/google', googleSession)
        .pipe(map(res => new Session(res)));
    }
    return of(null);
  }

  public signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( () => {
      console.log('User signed out.');
    });
    localStorage.removeItem('session');
    this.goHome();
  }

  public goHome() {
    this.router.navigate(['/home']);
  }

}

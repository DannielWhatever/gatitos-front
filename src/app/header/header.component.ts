import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/takeWhile';

import { SessionService } from '../session-service/session.service';
import { Session } from '../session-service/session.interfaces';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu = [
    {title: 'Inicio', link: '/home' },
    {title: 'Adoptame!', link: '/adoptame' }
  ];

  public isSignedIn = false;
  private session: Session;


  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.loadSession();
  }

  loadSession() {
    let waiting = true;
    interval(1000)
      .takeWhile(() => waiting)
      .subscribe(i => {
        console.log('waiting for session...');
        this.sessionService.getSession().subscribe(session => {
          if (session) {
            this.session = session;
            console.log(this.session);
            this.isSignedIn = session != null;
          }
          waiting = false;
        });
      });

  }

  signOut() {
    this.sessionService.signOut();
    this.isSignedIn = false;
  }

}

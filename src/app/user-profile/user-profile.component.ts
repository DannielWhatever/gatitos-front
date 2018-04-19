import { Component, OnInit } from '@angular/core';
import { Session } from '../session-service/session.interfaces';
import { SessionService } from '../session-service/session.service';
import { AdoptionsService } from '../adoptions/adoptions.service';
import { CatForAdoption } from '../adoptions/adoptions.interfaces';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public title = 'Mi Perfil';
  public session: Session;

  public publishedAdoptions: CatForAdoption[];

  constructor(private sessionService: SessionService, private adoptionsService: AdoptionsService) { }

  ngOnInit() {
    this.sessionService.getSession().subscribe(session => {
      this.session = session;
      if (!this.session) {
        this.sessionService.goHome();
        return;
      }
      this.loadPublishedAdoptions();
    });

  }


  getFromSession(attr, defaultVal = null) {
    console.log(defaultVal);
    return this.session && this.session[attr] ? this.session[attr] : defaultVal;
  }

  loadPublishedAdoptions() {
    this.adoptionsService.getAdoptionsByAuthor(this.session.id).subscribe(_ => this.publishedAdoptions = _);
  }

  delete(id: string) {
    this.adoptionsService.deleteAdoption(id).subscribe(ok => {
      this.loadPublishedAdoptions();
    }, err => {
      console.log(err);
    });
  }

}

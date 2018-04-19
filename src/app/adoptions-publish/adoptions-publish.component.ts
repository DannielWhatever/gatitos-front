import { Component, OnInit } from '@angular/core';
import { AdoptionsService } from '../adoptions/adoptions.service';
import { CatAge } from '../adoptions/adoptions.interfaces';
import { SessionService } from '../session-service/session.service';
import { Session } from '../session-service/session.interfaces';
import { UtilService } from '../util-service/util.service';

@Component({
  selector: 'app-adoptions-publish',
  templateUrl: './adoptions-publish.component.html',
  styleUrls: ['./adoptions-publish.component.scss']
})
export class AdoptionsPublishComponent implements OnInit {

  public title = 'Publicar';
  public previous = [
    { title: 'Adoptame', link: '/adoptame' }
  ];
  public isSubmitted = false;

  public genres: string[];
  public ages: CatAge[];
  public cities: string[];

  // newCat
  public nc: any;
  public file: File;

  public session: Session;

  constructor(private adoptionsService: AdoptionsService
    , private sessionService: SessionService
    , private utilService: UtilService) { }

  ngOnInit() {
    this.genres = this.adoptionsService.getGenres();
    this.ages = this.adoptionsService.getAges();
    this.adoptionsService.getCities().subscribe(_ => this.cities = _);
    this.nc = {
      age: 1,
      genre: this.genres[0],
      // tslint:disable-next-line:max-line-length
      picture: 'https://images.pexels.com/photos/62321/kitten-cat-fluffy-cat-cute-62321.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      author: {}
    };

    this.sessionService.getSession().subscribe(session => {
      this.session = session;

      // init default model fr new-cat
      this.nc.author = {
        id: this.getFromSession('id'),
        name: this.getFromSession('name'),
        email: this.getFromSession('email'),
        phone: this.getFromSession('phone'),
        city: this.getFromSession('city', 'Santiago'),
        publishEmail: true,
        publishPhone: true
      };
    });



  }

  onSubmit() {
    // console.log(this.nc);
    this.utilService.uploadFile(this.file).subscribe(responseUpload => {
      console.log(responseUpload);
      this.nc.picture = responseUpload.data;
      this.adoptionsService.publishCat(this.nc).subscribe(res => {
        console.log(res);
        this.isSubmitted = true;
      });
    });
  }

  validEmailOrPhone(): boolean {
    return this.session ? (this.nc.author.phone && this.nc.author.publishPhone) || (this.nc.author.email && this.nc.author.publishEmail)
      : (this.nc.author.phone && this.nc.author.phone !== '') || (this.nc.author.email && this.nc.author.email !== '');
  }

  getFromSession(attr, defaultVal = null) {
    console.log(defaultVal);
    return this.session && this.session[attr] ? this.session[attr] : defaultVal;
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      console.log(this.file);
    }
  }

}

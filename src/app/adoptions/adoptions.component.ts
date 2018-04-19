import { Component, OnInit } from '@angular/core';
import { AdoptionsService } from './adoptions.service';
import { CatForAdoption, CatAge } from './adoptions.interfaces';
import { UtilService } from '../util-service/util.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.scss']
})
export class AdoptionsComponent implements OnInit {

  public title = 'Adoptame';
  public cats: Array<CatForAdoption>;

  constructor(private adoptionsService: AdoptionsService,
    private utilService: UtilService) {
  }

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.adoptionsService.getCats()
      .subscribe(cats => this.cats = cats);
  }

  getImageUrl(imageId: string) {
    return this.utilService.getImageUrl(imageId);
  }

}

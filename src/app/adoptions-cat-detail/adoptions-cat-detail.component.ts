import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdoptionsService } from '../adoptions/adoptions.service';

import { CatForAdoption } from '../adoptions/adoptions.interfaces';
import { UtilService } from '../util-service/util.service';

@Component({
  selector: 'app-adoptions-cat-detail',
  templateUrl: './adoptions-cat-detail.component.html',
  styleUrls: ['./adoptions-cat-detail.component.scss']
})
export class AdoptionsCatDetailComponent implements OnInit, OnDestroy {

  public title = 'Detalle';
  public previous = [
    { title: 'Adoptame', link: '/adoptame' }
  ];

  private id: string;
  private sub: any;

  public cat: CatForAdoption;
  public showContact = false;

  constructor(private route: ActivatedRoute, private adoptionsService: AdoptionsService,
    private utilService: UtilService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];

       this.adoptionsService.getCatById(this.id).subscribe(cat => this.cat = cat);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleShowContact() {
    this.showContact = !this.showContact;
  }

  getImageUrl(imageId: string) {
    return this.utilService.getImageUrl(imageId);
  }

}

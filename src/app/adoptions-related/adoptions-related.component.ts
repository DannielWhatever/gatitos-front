import { Component, OnInit } from '@angular/core';
import { AdoptionsService } from '../adoptions/adoptions.service';
import { CatForAdoption } from '../adoptions/adoptions.interfaces';

@Component({
  selector: 'app-adoptions-related',
  templateUrl: './adoptions-related.component.html',
  styleUrls: ['./adoptions-related.component.scss']
})
export class AdoptionsRelatedComponent implements OnInit {

  public cats: CatForAdoption[];

  constructor(private adoptionsService: AdoptionsService ) {}

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.adoptionsService.getCatsRelated().subscribe(cats => this.cats = cats);
  }

}

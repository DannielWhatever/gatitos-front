import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CatForAdoption, CatAge } from './adoptions.interfaces';

import { of } from 'rxjs/observable/of';
import { UtilService } from '../util-service/util.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class AdoptionsService {

  private sampleCat = {
    id: '@123',
    name: 'Grisesito',
    genre: 'Gatito',
    age: 4,
    picture: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
    description: 'soy un gatito muy kawai',
    author: {
      id: '@ax01',
      name: 'Rosa Espinoza',
      email: 'rosa@espinoza.tti',
      phone: '+569-2222-2222',
      city: 'Santiago'
    },
    publishedDate: '31 de febrero de 2019'
  };
  private cats: CatForAdoption[];
  private genres = ['Gatita', 'Gatito'];
  private ages: CatAge[];
  private cities = ['Santiago', 'Valparaíso'];


  constructor(private utilService: UtilService) {
    this.cats = [];
    let iterator = this.utilService.range(6);
    let item: IteratorResult<number>;
    while ((item = iterator.next()) && !item.done) {
      const newCat = this.utilService.deepClone(this.sampleCat);
      newCat.id = '@00' + item.value;
      this.cats.push(newCat);
    }

    // fill ages
    this.ages = [];
    iterator = this.utilService.range(11, 1);
    while ((item = iterator.next()) && !item.done) {
      this.ages.push(new CatAge(item.value));
    }
    iterator = this.utilService.range(20, 1);
    while ((item = iterator.next()) && !item.done) {
      this.ages.push(new CatAge(item.value * 12));
    }
  }

  getCats(): Observable<CatForAdoption[]> {
    // return of(this.cats);
    return this.utilService.get<CatForAdoption[]>('/adoptions');
  }

  getCatById(id: string): Observable<CatForAdoption> {
    console.log('searched cat: ', id);
    // const filteredCats = this.cats.filter(cat => cat.id === id);
    // return of(filteredCats[0]);
    return this.utilService.get<CatForAdoption>('/adoptions/' + id);
  }

  getCatsRelated(): Observable<CatForAdoption[]> {
    return of(this.cats.slice(0, 4));
  }

  getGenres(): string[] {
    return this.genres;
  }

  getAges(): CatAge[] {
    return this.ages;
  }

  getCities(): Observable<string[]> {
    // return of(this.cities);
    return this.utilService.get<string[]>('/commons/cities');
  }

  getAdoptionsByAuthor(authorId: string): Observable<CatForAdoption[]> {
    return this.utilService.get<CatForAdoption[]>(`/adoptions/author/${authorId}`);
  }

  deleteAdoption(catId: string): Observable<any> {
    console.log(catId);
    return this.utilService.delete<any>(`/adoptions/${catId}`);
  }

  publishCat(cat): Observable<CatForAdoption> {
    return this.utilService.post<CatForAdoption>('/adoptions', cat);
  }

}

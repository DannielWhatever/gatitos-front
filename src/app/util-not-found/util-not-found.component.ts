import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-util-not-found',
  templateUrl: './util-not-found.component.html',
  styleUrls: ['./util-not-found.component.scss']
})
export class UtilNotFoundComponent implements OnInit {

  public title = 'Not Found';

  constructor() { }

  ngOnInit() {
  }

}

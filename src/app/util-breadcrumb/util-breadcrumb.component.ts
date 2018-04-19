import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-util-breadcrumb',
  templateUrl: './util-breadcrumb.component.html',
  styleUrls: ['./util-breadcrumb.component.scss']
})
export class UtilBreadcrumbComponent implements OnInit {

  @Input() root = false;
  @Input() active = '';
  @Input() previous = [];

  constructor() { }

  ngOnInit() {
  }

}

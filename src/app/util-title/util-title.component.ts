import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-util-title',
  templateUrl: './util-title.component.html',
  styleUrls: ['./util-title.component.scss']
})
export class UtilTitleComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}

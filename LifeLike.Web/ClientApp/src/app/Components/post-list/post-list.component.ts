import {Component, Input, OnInit} from '@angular/core';
import {Page} from "../../Models/Page";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 @Input() List: Page[];
  constructor() { }

  ngOnInit() {
  }

}
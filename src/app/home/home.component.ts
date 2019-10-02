import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(() => {
      $('a[href^="#"]').on('click', () => {
        event.preventDefault();

        const section = $(event.currentTarget).attr('href');
        const sectionPosition = $(section).offset().top;

        $('html, body').animate({scrollTop: sectionPosition}, 1000);
      });
    });
  }
}

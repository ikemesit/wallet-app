import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    
    function stickyHeader () {
      if ($('header').length) {
        var stickyScrollPos = 100;
        if($(window).scrollTop() > stickyScrollPos) {
          $('header').removeClass('normal fadeInDown');
              $('header').addClass('static fadeInDown animated');
              $('.scroll-to-top').fadeIn(500);
        }
        else if($(this).scrollTop() <= stickyScrollPos) {
          $('header').removeClass('static fadeInDown animated');
              $('header').addClass('normal fadeInDown animated');
              $('.scroll-to-top').fadeOut(500);
        }
      };
    }
  
    $(window).on('scroll', function () {	
      (function ($) {
        stickyHeader();
      })($);
    });
  }

}

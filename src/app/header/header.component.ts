import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#toggle_menu').click(function() {
      //console.log('toggle menu was clicked');
      //alert('toggle menu was clicked');

      $(this).toggleClass('active');
	    $('#overlay').toggleClass('open');
    });
  }

}

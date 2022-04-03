import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
   // collapse();
  // status: boolean = false;
  // clickEvent(){
  //     this.status = !this.status;       
  // }
  opened = true;
  constructor() { }
  // toggleSidebar() {
  //   this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  // }
  // toggleBackgroundImage() {
  //   this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  // }
  // getSideBarState() {
  //   return this.sidebarservice.getSidebarState();
  // }

  // hideSidebar() {
  //   this.sidebarservice.setSidebarState(true);
  // }
  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  //    // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
     (<any>$('.sidebar .collapse')).collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      (<any>$('.sidebar .collapse')).collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      (<any>$('.sidebar .collapse')).collapse('hide');
    };
  });

 // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  // $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
  //   if ($(window).width() > 768) {
  //     var e0 = e.originalEvent,
  //       delta = e0.wheelDelta || -e0.detail;
  //     this.scrollTop += (delta < 0 ? 1 : -1) * 30;
  //     e.preventDefault();
  //   }
  // });
  }

}

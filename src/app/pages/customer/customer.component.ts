import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'selector-customer',
    templateUrl: 'customer.component.html',
    styleUrls: ['customer.component.css']
})

export class CustomerComponent implements OnInit {
    isCollapsed: boolean = false;    
    // opened = true;
    title = 'ang-material-owneraccount';
    constructor() { }

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
     }


}
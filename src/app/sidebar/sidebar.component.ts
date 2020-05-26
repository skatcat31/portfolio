import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }
  expanded = false;
  hasSetFocus = false;
  @Input() mobile = false;
  @ViewChild('focusTarget') el: ElementRef;

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.expanded = false;
      }
    });
  }

  toggleChecked() {
    this.expanded = !this.expanded;
    if ( this.expanded ) {
      this.el.nativeElement.focus();
    }
  }
}

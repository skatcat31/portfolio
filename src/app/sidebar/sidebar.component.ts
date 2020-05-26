import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((val) => {
        this.expanded = false;
    });
  }

  toggleChecked() {
    this.expanded = !this.expanded;
    if ( this.expanded ) {
      this.el.nativeElement.focus();
    }
  }
}

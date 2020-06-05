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
  @ViewChild('closeFocus') focusButton: ElementRef;
  @ViewChild('focusTarget') focusLink: ElementRef;

  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
        this.expanded = false;
        window.scroll(0, 0);
        this.focusButton.nativeElement.focus();
    });
  }

  toggleChecked() {
    this.expanded = !this.expanded;
    if ( this.expanded ) {
      this.focusLink.nativeElement.focus();
    }
  }
}

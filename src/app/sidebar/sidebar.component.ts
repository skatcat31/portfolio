import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  checked = false;

  @Input() id: string;
  ngOnInit(): void {
  }

  toggleChecked = () => {
    this.checked = !this.checked;
    return true;
  }
}

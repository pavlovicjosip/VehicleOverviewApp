import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = 'Vehicle Overview app';
  @Output() logout = new EventEmitter<void>();

  onLogoutClick(): void {
    this.logout.emit();
  }
}

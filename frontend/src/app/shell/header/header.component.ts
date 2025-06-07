import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() userName: string = "Jane Doe"; // Replace with actual user info.
  @Output() toggleChatbot = new EventEmitter<void>();

  onToggleChatbot() {
    this.toggleChatbot.emit();
  }
  
}

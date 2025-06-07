import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-chat',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './text-chat.component.html',
  styleUrl: './text-chat.component.css'
})
export class TextChatComponent {
  @Output() toggleChatbot = new EventEmitter<void>();
  
  onToggleChatbot() {
    this.toggleChatbot.emit();
  }
}

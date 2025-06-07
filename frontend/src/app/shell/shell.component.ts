import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TextChatComponent } from './text-chat/text-chat.component';
import { ContactViewComponent } from '../widgets/contact-view/contact-view.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,CommonModule, HeaderComponent, TextChatComponent, ContactViewComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {
  userName = "Jane Doe"; // Replace with actual user info.
  chatbotOpen = false;
  
  toggleChatbot() {
    console.log("Toggling chatbot");
    this.chatbotOpen = !this.chatbotOpen;
    console.log(this.chatbotOpen);
  }
}

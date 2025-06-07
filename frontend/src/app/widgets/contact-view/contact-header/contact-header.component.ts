import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'app-contact-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-header.component.html',
  styleUrl: './contact-header.component.css'
})
export class ContactHeaderComponent implements OnInit {
  @Input() contact!: Contact;

  ngOnInit(): void {
    console.log('contact in header:', this.contact);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/contact.model';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ClientGoalsComponent } from './client-goals/client-goals.component';
import { ClientGoal } from '../../models/goal.model';
import { Opportunity } from '../../models/opportunities.models';
import { Activity } from '../../models/activities.model';
import { Risk } from '../../models/risk.model';
import { ClientOpportunitiesComponent } from './client-opportunities/client-opportunities.component';
import { ClientActivitiesComponent } from './client-activities/client-activities.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { ClientWealthComponent } from './client-wealth/client-wealth.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-view',
  standalone: true,
  imports: [CommonModule, ContactHeaderComponent, ClientGoalsComponent, ClientOpportunitiesComponent, ClientActivitiesComponent, RiskAssessmentComponent, ClientWealthComponent],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent implements OnInit {
  contact!: Contact;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('contact in contact-view:', this.contact);
    this.http.get<Contact>('http://localhost:5000/contact').subscribe({
      next: (data) => {
        this.contact = data;
        console.log('contact in contact-view:', this.contact);
      },
      error: (err) => {
        console.error('Failed to load contact:', err);
      }
    });
  }

}

import { Component } from '@angular/core';
import { ContactOverviewComponent} from './contact-overview/contact-overview.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { OpportunitiesOverviewComponent } from './opportunities-overview/opportunities-overview.component';
import { KeyAlertsComponent } from './key-alerts/key-alerts.component';
import { NextEventsComponent } from './next-events/next-events.component';
import { TasksOverviewComponent } from './tasks-overview/tasks-overview.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ContactOverviewComponent, AccountOverviewComponent, 
    OpportunitiesOverviewComponent, KeyAlertsComponent, 
    NextEventsComponent, TasksOverviewComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

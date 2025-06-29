import { Component } from '@angular/core';
import { ContactOverviewComponent} from './contact-overview/contact-overview.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { OpportunitiesOverviewComponent } from './opportunities-overview/opportunities-overview.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ContactOverviewComponent, AccountOverviewComponent, OpportunitiesOverviewComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

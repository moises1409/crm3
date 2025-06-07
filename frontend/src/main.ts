import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MatCardModule } from '@angular/material/card';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    importProvidersFrom(HttpClientModule, MatCardModule),
    provideAnimations(),
    provideCharts(withDefaultRegisterables()), provideAnimationsAsync()
  ]
})
  .catch((err) => console.error(err));

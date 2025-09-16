import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CandidateDashboardComponent } from './pages/candidate-dashboard/candidate-dashboard.component';

export const routes: Routes = [


{ path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: CandidateDashboardComponent }












];

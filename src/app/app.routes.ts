import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AnalyticsDashboardComponent } from './components/analytics/analytics.component';
import { ApplyJobsComponent } from './components/apply-jobs/apply-jobs.component';
import { LoginComponent } from './components/login/login.component';
import { PostJobsComponent } from './components/post-jobs/post-jobs.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecruitersComponent } from './components/recruiters/recruiters.component';
import { SigninComponent } from './components/sign-in/sign-in.component';
import { ResourcesComponent } from './components/resources/resources.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'analytics', component: AnalyticsDashboardComponent },
  { path: 'apply-jobs', component: ApplyJobsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post-jobs', component: PostJobsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recruiters', component: RecruitersComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '**', redirectTo: 'Home' },
  { path: 'sign-in', loadComponent: () => import('./components/sign-in/sign-in.component').then(m => m.SigninComponent) },
  { path: 'resources',loadComponent: () => import('./components/resources/resources.component').then(m => m.ResourcesComponent)},
  { path: 'signup', component: SigninComponent }

];

import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-dashboard',
  imports: [],
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.css'
})
export class CandidateDashboardComponent {
// 🔹 Simuler des candidatures sans backend
  applications = [
    { job: 'Développeur Angular', company: 'TechCorp', date: '10/09/2025', status: 'En attente' },
    { job: 'Ingénieur DevOps', company: 'CloudSys', date: '05/09/2025', status: 'Acceptée' },
    { job: 'Analyste Data', company: 'DataPlus', date: '01/09/2025', status: 'Rejetée' }
  ];
}

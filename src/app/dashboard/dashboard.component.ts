import { Component } from '@angular/core';

export interface linkProperty {
  id: number;
  route: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  linkProperties: linkProperty[] = [
    {
      id: 1,
      route: 'alumnos',
      name: 'Menú Principal',
    },
    {
      id: 2,
      route: 'alumnos',
      name: 'Lista general',
    },
    {
      id: 3,
      route: 'forms/altas',
      name: 'Altas',
    },
  ];

  showFiller = false;
}

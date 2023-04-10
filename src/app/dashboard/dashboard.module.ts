import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../content/alumnos/alumnos.component';
import { AltasComponent } from '../content/forms/altas/altas.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'forms/altas', component: AltasComponent },
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot(routes),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}

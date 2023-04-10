import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [AlumnosComponent],
  imports: [CommonModule, MatTableModule, MatCardModule,MatListModule, PipesModule, DirectivesModule],
  providers: [],
  exports: [AlumnosComponent],
})
export class AlumnosModule {}

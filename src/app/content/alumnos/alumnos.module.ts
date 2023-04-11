import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AltasModule } from '../forms/altas/altas.module';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    PipesModule,
    DirectivesModule,
    MatFormFieldModule,
    MatInputModule,
    AltasModule,
    MatButtonModule,
    MatIconModule,
    AltasModule
  ],
  providers: [],
  exports: [AlumnosComponent],
})
export class AlumnosModule {}

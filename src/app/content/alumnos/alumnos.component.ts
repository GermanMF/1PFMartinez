import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { AltasComponent } from '../forms/altas/altas.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditarComponent } from '../forms/editar/editar.component';

const milisecondsHour = 3600000;

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  randomHours = function getRandomInt(top: number) {
    return Math.floor(Math.random() * top);
  };

  alumnos: Alumno[] = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Perez',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 5,
      espanol: 5,
      cienciasNaturales: 5,
      civismo: 8,
      online: false,
    },
    {
      id: 2,
      firstName: 'Benito',
      lastName: 'Palurdo',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 6,
      espanol: 7,
      cienciasNaturales: 9,
      civismo: 5,
      online: true,
    },
    {
      id: 3,
      firstName: 'Constantino',
      lastName: 'Gomez',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 10,
      espanol: 10,
      cienciasNaturales: 9,
      civismo: 10,
      online: false,
    },
    {
      id: 4,
      firstName: 'Querubinosa',
      lastName: 'Rodriguez',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 5,
      espanol: 5,
      cienciasNaturales: 6,
      civismo: 5,
      online: false,
    },
    {
      id: 5,
      firstName: 'Alibaba',
      lastName: 'Zamudio',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 9,
      espanol: 10,
      cienciasNaturales: 5,
      civismo: 8,
      online: true,
    },
    {
      id: 6,
      firstName: 'Golondrino',
      lastName: 'Amaterasu',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 7,
      espanol: 9,
      cienciasNaturales: 5,
      civismo: 6,
      online: false,
    },
    {
      id: 7,
      firstName: 'Valentin',
      lastName: 'Elizalde',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 10,
      espanol: 10,
      cienciasNaturales: 10,
      civismo: 10,
      online: false,
    },
    {
      id: 8,
      firstName: 'Cuauhtemoc',
      lastName: 'Valdivia',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 6,
      espanol: 6,
      cienciasNaturales: 5,
      civismo: 5,
      online: false,
    },
    {
      id: 9,
      firstName: 'Tom',
      lastName: 'Hanks',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 10,
      espanol: 5,
      cienciasNaturales: 9,
      civismo: 10,
      online: true,
    },
    {
      id: 10,
      firstName: 'Jonathan',
      lastName: 'Sardino',
      update: new Date(Date.now() - this.randomHours(1000) * milisecondsHour),
      matematicas: 6,
      espanol: 10,
      cienciasNaturales: 6,
      civismo: 8,
      online: false,
    },
  ];

  getAlumno(alumnoId: number): Alumno {
    return this.alumnos.find((alumno) => alumno.id == alumnoId)!;
  }

  getTotal(alumnoId: number): number {
    const alumno = this.getAlumno(alumnoId);
    return (
      (alumno.espanol +
        alumno.matematicas +
        alumno.cienciasNaturales +
        alumno.civismo) /
      4
    );
  }

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog) {}

  abrirAltas(): void {
    const dialog = this.matDialog.open(AltasComponent);
    dialog.afterClosed().subscribe((valor) => {
      this.add(valor);
    });
  }

  abrirEdicion(alumno: Alumno) {
    const dialog = this.matDialog.open(EditarComponent, {
      data: alumno,
    });
    dialog.afterClosed().subscribe((valor) => {
      this.modify(valor);
    });
  }

  eliminarUsuario(alumno: Alumno) {
    const dialog = this.matDialog.open(DeleteDialogComponent, {
      data: alumno,
    });
    dialog.disableClose = true;
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.delete(alumno);
      }
    });
  }

  add(alumno: Alumno) {
    if (alumno.firstName || alumno.lastName || alumno.online) {
      alumno = {
        ...alumno,
        id: this.alumnos[this.alumnos.length - 1].id + 1,
      };
      this.alumnos.push(alumno);
      this.dataSource = new MatTableDataSource(this.alumnos);
    }
  }

  delete(alumno: Alumno): void {
    this.alumnos.splice(this.alumnos.indexOf(alumno), 1);
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  modify(alumno: Alumno) {
    const index = this.alumnos.findIndex((alumnoI) => {
      return alumnoI.id === alumno.id;
    });
    this.alumnos[index] = alumno;
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  dataSource = new MatTableDataSource(this.alumnos);

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'update',
    'matematicas',
    'espanol',
    'cienciasNaturales',
    'civismo',
    'total',
    'online',
    'accion',
  ];
}

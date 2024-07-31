import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  items: any[] = []; // Lista de ítems

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.loadItems(); // Cargar ítems al inicializar el componente
  }

  loadItems(): void {
    this.crudService.getAll().subscribe((data: any[]) => {
      this.items = data; // No es necesario mapear el id a número
    });
  }

  editItem(id: string) {
    if (id) {
      this.router.navigate(['/update', id]);
    } else {
      console.error('ID is undefined or null');
    }
  }

  deleteItem(id: string) {
    if (id) {
      this.crudService.delete(id).subscribe(() => {
        console.log('Item deleted');
        this.loadItems(); // Actualiza la lista después de eliminar
      });
    } else {
      console.error('ID is undefined or null');
    }
  }
}

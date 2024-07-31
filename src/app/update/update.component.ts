// update.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  item: any = { cedula: '', nombre: '', correo: '' };
  id: string = '';  // Cambiado a cadena

  constructor(private crudService: CrudService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadItem();
  }

  loadItem() {
    this.crudService.getById(this.id).subscribe(data => {
      this.item = data;
    });
  }

  updateItem() {
    this.crudService.update(this.id, this.item).subscribe(response => {
      console.log('Item actualizado:', response);
      this.router.navigate(['/read']);  // Redirige a la vista de lectura después de actualizar
    });
  }
}

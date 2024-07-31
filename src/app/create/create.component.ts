import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  newItem = { cedula: '', nombre: '', correo: '' };
 // Ajusta los campos según tu API
  constructor(private crudService: CrudService, private router: Router) { }

  createItem() {
    this.crudService.create(this.newItem).subscribe(response => {
      console.log('Item creado:', response);
      this.router.navigate(['/read']); // Redirige a la vista de lectura después de crear
    });
  }
}

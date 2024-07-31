import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  itemId: string | null = null; // Cambiado a string

  constructor(private crudService: CrudService) { }

  deleteItem() {
    if (this.itemId !== null) {
      this.crudService.delete(this.itemId).subscribe(response => {
        console.log('Item eliminado:', response);
      });
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  modalImage: string = '';
  isModalVisible: boolean = false;

  verDetalles(src: string): void {
    this.modalImage = src;
    this.isModalVisible = true;
  }

  cerrarModal(): void {
    this.isModalVisible = false;
  }
}

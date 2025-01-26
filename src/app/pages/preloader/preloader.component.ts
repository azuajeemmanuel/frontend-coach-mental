import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: false,
  
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent {
  ngAfterViewInit() {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('preloader-deactivate');
      }, 30);
    }
  }
}

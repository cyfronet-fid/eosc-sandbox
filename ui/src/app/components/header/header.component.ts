import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @HostListener('window:scroll', []) onScroll(): void {
    const topMenu = document.getElementById('top-menu');
    if (!topMenu) return;

    if (window.scrollY > 50) {
      topMenu.style.padding = '10px 0';
    } else {
      topMenu.style.padding = '25px 0';
    }
  }
}

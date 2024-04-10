import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  public navegacionResponsive(): void {

    const navegacion = document.querySelector('.navegacion')
    if (navegacion?.classList.contains('mostrar')) {
      navegacion.classList.remove('mostrar');
    } else {
      navegacion?.classList.add('mostrar');
    }
  }

  public showMenu(): void {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu?.addEventListener('click', this.navegacionResponsive)
  }

  public darkMode(): void {
    const btnDarkMode = document.querySelector('.dark-mode-boton');
    btnDarkMode?.addEventListener('click', function () {
      document.body.classList.toggle('bg-neutral-400');
    });
  }
}

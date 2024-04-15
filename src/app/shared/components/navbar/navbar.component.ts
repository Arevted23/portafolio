import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  public active: boolean = false
  ngOnInit(): void{}

  setActive():void{
    this.active = !this.active
  }

}



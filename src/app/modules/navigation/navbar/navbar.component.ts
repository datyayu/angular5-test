import { Component } from '@angular/core';
import { NavigationLink } from '../navigation.types';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  links = [
    {url: '/speeches', text: 'View all speeches'},
    {url: '/new', text: 'Add new speech'},
    {url: '/search', text: 'Search speeches'},
  ];
}

import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {
    LinkComponent
} from "../link/link.component";
import {LinkData} from "../../interfaces/link-data";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        LinkComponent,
        NgForOf,
        RouterLink,
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  linksDatas: LinkData[] = [
    {
      content: 'Home',
      routeLink: '/'
    },
    {
      content: 'Sobre',
      routeLink: '/sobre'
    },
    {
      content: 'Login',
      routeLink: '/login'
    },
    {
      content: 'Fazer cadastro',
      routeLink: '/cadastro',
      isButton: true
    },
  ]
}

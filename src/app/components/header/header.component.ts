import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {
    ButtonLinkDirective,
    ButtonLinkLogoAfter,
    ButtonLinkLogoBefore,
    LinkComponent,
    TextLinkDirective
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
        ButtonLinkDirective,
        ButtonLinkLogoAfter,
        ButtonLinkLogoBefore,
        RouterLink,
        TextLinkDirective
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

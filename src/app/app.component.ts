import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {
    ButtonLinkDirective,
    ButtonLinkLogoAfter,
    ButtonLinkLogoBefore,
    TextLinkDirective
} from "./components/link/link.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, ButtonLinkDirective, ButtonLinkLogoAfter, ButtonLinkLogoBefore, RouterLink, TextLinkDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-testing';
}

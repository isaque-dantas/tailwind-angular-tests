import {Component, Input} from '@angular/core';
import {LinkData} from "../../interfaces/link-data";
import {RouterLink} from "@angular/router";
import {NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgTemplateOutlet,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() linkData!: LinkData
  linkType!: string

  constructor() {
    console.log(this.linkData)
    document.addEventListener('DOMContentLoaded', () => {
      if (this.linkData.isButton) {
        if (this.linkData.logo) {
          if (this.linkData.logoPosition === 'after') {
            this.linkType = 'buttonLinkLogoAfter'
          } else if (this.linkData.logoPosition === 'before') {
            this.linkType = 'buttonLinkLogoBefore'
          }
        } else {
          this.linkType = 'buttonLink'
        }
      } else {
        this.linkType = 'textLink'
      }
    })
  }
}


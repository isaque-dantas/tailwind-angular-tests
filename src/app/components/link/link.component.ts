import {Component, ContentChild, Directive, Input, TemplateRef} from '@angular/core';
import {LinkData} from "../../interfaces/link-data";
import {RouterLink} from "@angular/router";
import {NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet} from "@angular/common";

@Directive({
  standalone: true,
  selector: '[textLink]'
})
export class TextLinkDirective {
  constructor(public templateRef: TemplateRef<unknown>) {
  }
}

@Directive({
  standalone: true,
  selector: '[buttonLink]'
})
export class ButtonLinkDirective {
  constructor(public templateRef: TemplateRef<unknown>) {
  }
}

@Directive({
  standalone: true,
  selector: '[buttonLinkLogoAfter]'
})
export class ButtonLinkLogoAfter {
  constructor(public templateRef: TemplateRef<unknown>) {
  }
}

@Directive({
  standalone: true,
  selector: '[buttonLinkLogoBefore]'
})
export class ButtonLinkLogoBefore {
  constructor(public templateRef: TemplateRef<unknown>) {
  }
}

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    TextLinkDirective,
    ButtonLinkDirective,
    ButtonLinkLogoAfter,
    ButtonLinkLogoBefore,
    NgTemplateOutlet,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() linkData!: LinkData
  usedTemplate!: TemplateRef<unknown>

  @ContentChild(TextLinkDirective) textLinkDirective!: TextLinkDirective;
  @ContentChild(ButtonLinkDirective) buttonLinkDirective!: ButtonLinkDirective;
  @ContentChild(ButtonLinkLogoAfter) buttonLinkLogoAfter!: ButtonLinkLogoAfter;
  @ContentChild(ButtonLinkLogoBefore) buttonLinkLogoBefore!: ButtonLinkLogoBefore;

  constructor() {
    console.log(this.linkData)
    document.addEventListener('DOMContentLoaded', () =>{
      if (this.linkData.isButton) {
        if (this.linkData.logo) {
          if (this.linkData.logoPosition === 'after') {
            this.usedTemplate = this.buttonLinkLogoAfter.templateRef
          } else if (this.linkData.logoPosition === 'before') {
            this.usedTemplate = this.buttonLinkLogoBefore.templateRef
          }
        } else {
          this.usedTemplate = this.buttonLinkDirective.templateRef
        }
      } else {
        this.usedTemplate = this.textLinkDirective.templateRef
      }
    })
  }

  logData() {
    console.log(this.usedTemplate)
    console.log(this.textLinkDirective)
    console.log(this.buttonLinkDirective)
    console.log(this.buttonLinkLogoAfter)
    console.log(this.buttonLinkLogoBefore)
  }
}


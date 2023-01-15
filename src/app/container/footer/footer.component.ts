import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatToolbarModule, MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  phoneNumber: string = '+45 22 33 76 08';
  email: string = 'mark@bjørnskov-ehmsen.dk';
  firmName: string = 'Bjørnskov & Ehmsen tømrer og snedker';
  address: string = 'Hededammen 9, 6705 Esbjerg Ø';

  private iconPath: string = "../../assets/icons";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
      .addSvgIcon("linkedin", this.setPath(`${(this.iconPath)}/linkedin.svg`))
      .addSvgIcon("instagram", this.setPath(`${(this.iconPath)}/instagram.svg`));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  callPhoneNo() {
    window.open(`tel:${this.phoneNumber}`);
  }

  mailTo() {
    window.open(`mailto:${this.email}`);
  }

  navigateToAddress() {
    window.open(`https://www.google.com/maps/search/${encodeURI(this.address)}`);
  }
}

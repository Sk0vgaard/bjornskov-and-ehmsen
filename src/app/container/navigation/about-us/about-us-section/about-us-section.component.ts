import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsSectionComponent {

}

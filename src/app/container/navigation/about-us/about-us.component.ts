import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, TimelineComponent, FaqComponent, AboutUsSectionComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent {

}

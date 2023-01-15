import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
}

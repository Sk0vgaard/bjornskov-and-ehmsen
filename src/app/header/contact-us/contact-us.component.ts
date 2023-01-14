import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../_shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent {

}

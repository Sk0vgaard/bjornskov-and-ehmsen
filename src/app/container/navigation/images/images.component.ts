import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesComponent implements OnInit {

  ngOnInit(): void {
    console.log('test')
  }

}

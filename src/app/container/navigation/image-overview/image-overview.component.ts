import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ImageRoutingModule } from './image-routing.module';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Image {
  id: number;
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-image-overview',
  standalone: true,
  imports: [CommonModule, MatCardModule, ImageRoutingModule, SwiperModule],
  templateUrl: './image-overview.component.html',
  styleUrls: ['./image-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ImageOverviewComponent {
  images: Image[] = [
    {
      id: 1,
      title: 'Image 1',
      url: 'assets/images/120034608_2708637782718165_7918138857527630262_n.jpg',
      description: 'Image 1 Description'
    },
    {
      id: 2,
      title: 'Image 2',
      url: 'assets/images/122550057_3537125253001989_7221914740336158703_n.jpg',
      description: 'Image 2 Description'
    },
    {
      id: 3,
      title: 'Image 3',
      url: 'https://via.placeholder.com/250x300',
      description: 'Image 3 Description'
    },
    {
      id: 4,
      title: 'Image 4',
      url: 'assets/images/311462781_1996719743854758_4004257398874546759_n.jpg',
      description: 'Image 4 Description'
    },
    {
      id: 5,
      title: 'Image 5',
      url: 'assets/images/120034608_2708637782718165_7918138857527630262_n.jpg',
      description: 'Image 5 Description'
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: true,
    fadeEffect: {
      crossFade: true
    },
    scrollbar: {draggable: true},
  };

  loadImageDetails(id: number) {
    this.router.navigate(['image-details', id]);
  }
}

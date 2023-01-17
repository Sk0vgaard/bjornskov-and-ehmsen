import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { FreeMode, Navigation, SwiperOptions, Thumbs } from 'swiper';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImagesComponent } from './images/images.component';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface Image {
  id: number;
  title: string;
  url: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-image-overview',
  standalone: true,
  imports: [CommonModule, MatCardModule, SwiperModule, MatDialogModule],
  templateUrl: './image-overview.component.html',
  styleUrls: ['./image-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ImageOverviewComponent {
  images: Image[] = [
    {
      id: 1,
      title: 'Gulve',
      url: 'assets/images/120034608_2708637782718165_7918138857527630262_n.jpg',
      description: 'Image 1 Description',
      category: 'floor'
    },
    {
      id: 2,
      title: 'Vinduer',
      url: 'assets/images/122550057_3537125253001989_7221914740336158703_n.jpg',
      description: 'Image 2 Description',
      category: 'window'
    },
    {
      id: 3,
      title: 'Døre',
      url: 'https://via.placeholder.com/250x300',
      description: 'Image 3 Description',
      category: 'door'
    },
    {
      id: 4,
      title: 'Tag',
      url: 'assets/images/311462781_1996719743854758_4004257398874546759_n.jpg',
      description: 'Image 4 Description',
      category: 'roof'
    },
    {
      id: 5,
      title: 'Udbygning',
      url: 'assets/images/120034608_2708637782718165_7918138857527630262_n.jpg',
      description: 'Image 5 Description',
      category: 'extension'
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: true,
    navigation: true,
    scrollbar: {draggable: true},
  };

  openImageCategoryDialog(category: string) {
    const imagesByCategory = this.images.filter(image => image.category === category);
    this.dialog.open(ImagesComponent, {
      data: {images: imagesByCategory},
      panelClass: 'fullscreen-dialog'
    });
  }
}

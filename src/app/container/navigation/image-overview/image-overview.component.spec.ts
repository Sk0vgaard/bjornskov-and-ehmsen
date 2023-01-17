import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOverviewComponent } from './image-overview.component';

describe('ImageOverviewComponent', () => {
  let component: ImageOverviewComponent;
  let fixture: ComponentFixture<ImageOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImageOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>import('./header/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'about-us',
    loadChildren: () =>import('./header/about-us/about-us.component').then((m) => m.AboutUsComponent)
  },
  {
    path: 'contact-us',
    loadChildren: () =>import('./header/contact-us/contact-us.component').then((m) => m.ContactUsComponent)
  },
  {
    path: 'images',
    loadChildren: () =>import('./header/images/images.component').then((m) => m.ImagesComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

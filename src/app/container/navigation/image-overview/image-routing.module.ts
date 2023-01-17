import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

export const ROUTES: Route[] = [
  {path: 'image-details/:id', loadComponent: () => import('./images/images.component').then(mod => mod.ImagesComponent)},
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class ImageRoutingModule {
}

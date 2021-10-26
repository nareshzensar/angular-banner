import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {path: '', redirectTo: 'banner-page', pathMatch: 'full'},
  {path: 'banner-page', component: BannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

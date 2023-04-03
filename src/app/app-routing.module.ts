import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';

const routes: Routes = [
  {path: "", component:HeroComponent},
  {path: "pembayaran", component:PembayaranComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

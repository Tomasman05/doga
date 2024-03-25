import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './parts/home/home.component';
import { KolcsonzokComponent } from './parts/kolcsonzok/kolcsonzok.component';
import { KolcsonzesekComponent } from './parts/kolcsonzesek/kolcsonzesek.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kolcsonzok', component: KolcsonzokComponent },
  { path: 'kolcsonzesek', component: KolcsonzesekComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

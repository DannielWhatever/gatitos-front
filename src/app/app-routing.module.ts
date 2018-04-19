import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { AdoptionsCatDetailComponent } from './adoptions-cat-detail/adoptions-cat-detail.component';
import { UtilNotFoundComponent } from './util-not-found/util-not-found.component';
import { AdoptionsPublishComponent } from './adoptions-publish/adoptions-publish.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  // home
  { path: 'home', component: HomeComponent },

  // adoptions
  { path: 'adoptame', component: AdoptionsComponent },
  { path: 'adoptame/publicar', component: AdoptionsPublishComponent },
  { path: 'adoptame/:id', component: AdoptionsCatDetailComponent },

  // profile
  { path: 'mi-perfil', component: UserProfileComponent },

  // falbacks
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: UtilNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

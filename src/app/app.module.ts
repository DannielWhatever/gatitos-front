import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


import { AdoptionsComponent } from './adoptions/adoptions.component';
import { AdoptionsCatDetailComponent } from './adoptions-cat-detail/adoptions-cat-detail.component';
import { UtilNotFoundComponent } from './util-not-found/util-not-found.component';
import { UtilBreadcrumbComponent } from './util-breadcrumb/util-breadcrumb.component';
import { UtilTitleComponent } from './util-title/util-title.component';
import { AdoptionsRelatedComponent } from './adoptions-related/adoptions-related.component';
import { AdoptionsPublishComponent } from './adoptions-publish/adoptions-publish.component';

import { AdoptionsService } from './adoptions/adoptions.service';
import { UtilService } from './util-service/util.service';
import { SessionService } from './session-service/session.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { CatAgePipe } from './adoptions/cat-age.pipe';
import { StringToDate } from './util/string-date.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdoptionsComponent,
    HomeComponent,
    AdoptionsCatDetailComponent,
    UtilNotFoundComponent,
    UtilBreadcrumbComponent,
    UtilTitleComponent,
    AdoptionsRelatedComponent,
    AdoptionsPublishComponent,
    UserProfileComponent,
    CatAgePipe,
    StringToDate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    AdoptionsService,
    UtilService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from './angular-material.module'
import { NewsComponent } from './news/news.component'
import { HttpClientModule } from '@angular/common/http'
import { TechnologyComponent } from './news/technology/technology.component'
import { SerbianComponent } from './news/serbian/serbian.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { NewsDetailsComponent } from './news/news-details/news-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TechnologyComponent,
    SerbianComponent,
    PageNotFoundComponent,
    NewsDetailsComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

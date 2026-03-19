import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from './angular-material.module'
import { NewsComponent } from './news/news.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TechnologyComponent } from './news/technology/technology.component'
import { SerbianComponent } from './news/serbian/serbian.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { NewsDetailsComponent } from './news/news-details/news-details.component'
import { TranslocoRootModule } from './transloco-root.module'
import { DecodeHtmlPipe } from './pipes/decode-html.pipe'
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TechnologyComponent,
    SerbianComponent,
    PageNotFoundComponent,
    NewsDetailsComponent,
    DecodeHtmlPipe
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

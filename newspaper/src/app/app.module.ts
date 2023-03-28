import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiServiceService } from '../app/services/news-api-service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { NewspageComponent } from './newspage/newspage.component';
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    HotNewsComponent,
    MainTemplateComponent,
    NewspageComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

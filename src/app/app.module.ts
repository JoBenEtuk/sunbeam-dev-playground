import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageDetailsHeadComponent } from './pages/page-details/page-details-head/page-details-head.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { InputBotCheckerComponent } from './input-bot-checker/input-bot-checker.component';
import { HttpClientModule } from '@angular/common/http'
import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageDetailsHeadComponent,
    InputBotCheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

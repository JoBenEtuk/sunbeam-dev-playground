import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBodyComponent } from './pages/home/home-body/home-body.component';
import { HomeFootComponent } from './pages/home/home-foot/home-foot.component';
import { HomeHeadComponent } from './pages/home/home-head/home-head.component';
import { HomeComponent } from './pages/home/home.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { AppComponent } from './app.component';
import { PlaygroundHeaderComponent } from './general/playground-header/playground-header.component';
import { PlaygroundFooterComponent } from './general/playground-footer/playground-footer.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageDetailsBodyComponent } from './pages/page-details/page-details-body/page-details-body.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NewArticleBodyComponent } from './pages/new-article/new-article-body/new-article-body.component';
import { InputBotCheckerComponent } from './input-bot-checker/input-bot-checker.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home-head', component: HomeHeadComponent},
  { path: 'home-body', component: HomeBodyComponent },
  { path: 'home-foot', component: HomeFootComponent},
  { path: 'new-article', component: NewArticleComponent },
  { path: 'new-article-body', component: NewArticleBodyComponent },
  { path: 'page-details', component: PageDetailsComponent },
  { path: 'input-bot-checker', component: InputBotCheckerComponent },
  { path: 'home', component: HomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeBodyComponent, HomeComponent, HomeHeadComponent, HomeFootComponent, NewArticleComponent,PlaygroundHeaderComponent, PlaygroundFooterComponent, AppComponent, NewArticleComponent, PageDetailsComponent, PageNotFoundComponent, NewArticleBodyComponent, PageDetailsBodyComponent, HomeComponent, HomeHeadComponent, HomeBodyComponent, HomeFootComponent]


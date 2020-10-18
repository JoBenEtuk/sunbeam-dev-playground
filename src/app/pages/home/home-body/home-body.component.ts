import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {

  public articles: any = []

  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this._articleService.getArticles();
  }

}

import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';
import { User } from '../../../user';

@Component({
  selector: 'app-new-article-body',
  templateUrl: './new-article-body.component.html',
  styleUrls: ['./new-article-body.component.scss']
})
export class NewArticleBodyComponent implements OnInit {
  submitted = false;
  errorMsg = '';
  successMsg = ''
  
  articleModel = new User ('image','A UX Case Study Part II', 'Id sunt anim commodo est voluptate esse mollit laborum occaecat in. Laboris exercitation ad ea ex fugiat do dolore adipisicing laboris officia eiusmod. In veniam enim nisi officia ut.', '1st January, 2020', 'UX-Writing', '/home')


  public articles: any = []

  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this._articleService.getArticles();
  }
  
  botChecked(evt: any): void {}


  onSubmit() {
    this.articles.push(this.articleModel);
    console.log(this.articles);
  }
}

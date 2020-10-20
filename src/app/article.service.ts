import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles() {
    return [
      {
        "images": "",
        "head": "The creative process behind Diana Etuk Design - A UX writing case study",
        "body": "I am highly organized, motivated and disciplined with great integrity and the ability to work und...",
        "date":"14th June, 2020",
        "highlight":"Ux Writing",
        "link": "/page-details"
      },
      {
        "images": "",
        "head": "Spread love - Pandemic Poem",
        "body": "I am the guy who prefers to take the last bus home later at night for the sake of solitude. Looking at Jakarta’s road behind the window while having the two seats just for myself (^.^)...",
        "date":"14th June, 2020",
        "highlight":"Spoken Word",
        "link": "/spokenword-details"
      },
      {
        "images": "",
        "head": "The Maestrom - Flash Fiction",
        "body": "I am highly organized, motivated and disciplined with great integrity and the ability to work und...",
        "date":"14th June, 2020",
        "highlight":"Flash Fiction",
        "link": "/flashfiction"
      },
      {
        "images": "",
        "head": "The creative process behind Diana Etuk Design - A UX writing case study",
        "body": "I am highly organized, motivated and disciplined with great integrity and the ability to work und...",
        "date":"14th June, 2020",
        "highlight":"Ux Writing",
        "link": "/page-details"
      },
      {
        "images": "",
        "head": "Spread love - Pandemic Poem",
        "body": "I am the guy who prefers to take the last bus home later at night for the sake of solitude. Looking at Jakarta’s road behind the window while having the two seats just for myself (^.^)...",
        "date":"14th June, 2020",
        "highlight":"Spoken Word",
        "link": "/spokenword-details"
      },
      {
        "images": "",
        "head": "The Maestrom - Flash Fiction",
        "body": "I am highly organized, motivated and disciplined with great integrity and the ability to work und...",
        "date":"14th June, 2020",
        "highlight":"Flash Fiction",
        "link": "/flashfiction"
      }
    ]
  }
}
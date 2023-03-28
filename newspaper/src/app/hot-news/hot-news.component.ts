import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../services/news-api-service.service';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})
export class HotNewsComponent implements OnInit{

  top_headlines:any[] = []
  constructor(private movie_service_child:NewsApiServiceService){
  }

  ngOnInit(): void {
    this.movie_service_child.get_top_news().subscribe((news) =>{
      /*
      news.articles.forEach((element: any )=>{
        if(news.articles.title.length > 27){
          news.articles.title = news.articles.title.substring(0, 27)
          news.articles.title = news.articles.title + '...'
        }
      })  */

      this.top_headlines = news.articles
      console.log(news.articles, 'headlines#')
    })     
  }

  fix_title_length(news: any): any{
    
    return news
  }
}

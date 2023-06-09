import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor(private http:HttpClient) { }
  news_api_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654'

  get_top_news():Observable<any>{
    return this.http.get(this.news_api_url)
  }
}

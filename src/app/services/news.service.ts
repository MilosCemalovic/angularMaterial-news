import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { News } from './../interfaces/news'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  technologyNews = environment.technologyApi
  serbianNews = environment.serbianApi

  constructor(private http: HttpClient) { }

  getTechnologyNews(order: string): Observable<News> {
    return this.http.get<News>(`${this.technologyNews}${order}`)
  }

  getSerbianNews(order: string): Observable<News> {
    return this.http.get<News>(`${this.serbianNews}${order}`)
  }
}

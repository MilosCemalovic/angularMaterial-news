import { Component, OnInit } from '@angular/core'
import { NewsService } from 'src/app/services/news.service'
import { NewsDetailsService } from 'src/app/services/news-details.service'
import { Article } from 'src/app/interfaces/article'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  articles: Article[] = []
  loading = true
  term = ''
  sort = 'desc'

  constructor(
    private newsService: NewsService,
    // public newsDetails: NewsDetailsService
  ) {
    // this.term = this.newsDetails.term
    // this.articles = this.newsDetails.articles
    // this.loading = this.newsDetails.loading
    // this.sort = this.newsDetails.sort
  }

  ngOnInit(): void {
    this.getTechnology()
  }

  getTechnology() {
    this.newsService.getTechnologyNews(this.sort).subscribe(
      (news) => {
        this.loading = false
        this.articles = news.data
      },
      (err) => {
        this.loading = false
        this.articles = []
        console.log(err)
      }
    )
  }

  sortDirection(direction: string) {
    this.sort = direction
    this.getTechnology()
  }

}

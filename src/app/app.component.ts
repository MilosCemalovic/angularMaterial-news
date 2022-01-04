import { Component, OnInit } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'
import { NavLink } from './interfaces/nav-link'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  activeLang = 'en'

  navLinks: NavLink[] = [
    { id: 'news', label: 'news', route: ['news'], icon: 'newspaper' },
    { id: 'reporters', label: 'reporters', route: ['reporters'], icon: 'people' },
    { id: 'flights', label: 'flights', route: ['flights'], icon: 'flight' }
  ]

  languages = ['en', 'rs']

  constructor(private transloco: TranslocoService) { }

  ngOnInit(): void {

    // Get language from Local Storage - mora da ide prvo ovo
    if (!localStorage.getItem('lang')) {
      this.transloco.setActiveLang('en')
    } else {
      this.transloco.setActiveLang(localStorage.getItem('lang'))
    }

    // pa onda ovo
    this.activeLang = this.transloco.getActiveLang()

  }

  changeLang(lang) {
    this.activeLang = lang
    this.transloco.setActiveLang(lang)

    // Set language to Local Storage
    this.transloco.langChanges$.subscribe(
      () => localStorage.setItem('lang', lang)
    )
  }
}

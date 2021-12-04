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
    { id: 'news', label: 'news', route: ['news'], icon: 'language' },
    { id: 'reporters', label: 'reporters', route: ['reporters'], icon: 'people' }
  ]

  languages = ['en', 'rs']

  constructor(private transloco: TranslocoService) { }

  ngOnInit(): void {
    // Get language from Local Storage - mora da ide prvo ovo
    this.transloco.setActiveLang(localStorage.getItem('lang'))
    // pa onda ovo
    this.activeLang = this.transloco.getActiveLang()

    // Ukoliko je activeLang === nul
    // - pogledaj da li je to ovde potrebno
    // - ako jeste, seci deo po deo da vidis da li je nesto visak
    // if (!this.activeLang) {
    //   this.activeLang = this.transloco.getActiveLang()
    //   this.transloco.setActiveLang(localStorage.getItem('lang'))
    //   this.transloco.langChanges$.subscribe(
    //     () => localStorage.setItem('lang', this.activeLang)
    //   )
    // }
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

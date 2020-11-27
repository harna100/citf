import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkModeSelectorService } from './services/dark-mode-selector/dark-mode-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'citf';
  private darkModeSub: Subscription;

  @HostBinding('class') className = '';

  constructor(private darkModeService: DarkModeSelectorService) { }

  ngOnInit(): void {
    this.darkModeSub = this.darkModeService.getDarkModeUpdated().subscribe((darkMode: Boolean) => {
      this.className = darkMode ? 'darkMode' : '';
    });
  }

  ngOnDestroy(): void {
    this.darkModeSub.unsubscribe();
  }

}

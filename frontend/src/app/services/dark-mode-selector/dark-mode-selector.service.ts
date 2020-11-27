import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeSelectorService {
  private darkMode: Boolean = false;
  private darkModeUpdated = new Subject<Boolean>();

  constructor() { }

  getDarkModeUpdated() {
    return this.darkModeUpdated.asObservable();
  }

  updateDarkMode(newDarkMode: Boolean) {
    this.darkMode = newDarkMode;
    this.darkModeUpdated.next(this.darkMode);
  }

}

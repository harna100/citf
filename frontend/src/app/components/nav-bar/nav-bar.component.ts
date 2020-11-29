import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DarkModeSelectorService } from 'src/app/services/dark-mode-selector/dark-mode-selector.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  darkModeToggle = new FormControl(false);

  constructor(private darkModeService: DarkModeSelectorService) { }

  ngOnInit(): void {
    const darkModePersist = localStorage.getItem("darkModeSet") === "true" ? true : false;

    this.darkModeToggle.setValue(darkModePersist);
    this.darkModeService.updateDarkMode(darkModePersist);

    this.darkModeToggle.valueChanges.subscribe((darkModeSet) => {
      localStorage.setItem("darkModeSet", String(darkModeSet));
      this.darkModeService.updateDarkMode(darkModeSet);
    });
  }

}

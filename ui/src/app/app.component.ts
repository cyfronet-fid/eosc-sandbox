import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainPageModule } from './pages/main-page/main-page.module';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainPageModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent  implements  OnInit {
  title = 'EOSC Sandbox';

  ngOnInit() {
    window.addEventListener("load", () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    });
  }
}

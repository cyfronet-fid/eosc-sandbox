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
export class AppComponent implements OnInit {
  title = 'EOSC Sandbox';
  zammadUrl: string = 'https://helpdesk.sandbox.eosc-beyond.eu/assets/form/form.js'

  ngOnInit(): void {
    this._loadScript(this.zammadUrl);
  }

  private _loadScript(url: string) {
    const header = <HTMLHeadElement> document.head;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    script.id = 'zammad_form_script';
    header.appendChild(script);
  }

}

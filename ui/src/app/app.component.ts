import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FeaturesComponent } from "./pages/features/features.component";
import { PilotNodesComponent } from "./pages/pilot-nodes/pilot-nodes.component";
import { EndUsersComponent } from "./pages/end-users/end-users.component";
import { ServicesComponent } from "./pages/services/services.component";
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    HeaderComponent,
    MainHeaderComponent,
    FeaturesComponent,
    PilotNodesComponent,
    EndUsersComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EOSC Sandbox';
}

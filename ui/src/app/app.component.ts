import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FeaturesComponent } from "./pages/features/features.component";
import { PilotNodesComponent } from "./pages/pilot-nodes/pilot-nodes.component";
import { EndUsersComponent } from "./pages/end-users/end-users.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FeedbackPanelComponent } from './pages/contact/feedback-pannel.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    MainHeaderComponent,
    FooterComponent,
    FeaturesComponent,
    PilotNodesComponent,
    EndUsersComponent,
    ContactComponent,
    FeedbackPanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EOSC Sandbox';
}

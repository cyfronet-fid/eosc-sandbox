import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MainHeaderComponent } from "./main-header/main-header.component";
import { FeaturesComponent } from "./features/features.component";
import { PilotNodesComponent } from "./pilot-nodes/pilot-nodes.component";
import { EndUsersComponent } from "./end-users/end-users.component";
import { FeedbackPanelComponent } from './contact/feedback-pannel.component';
import { MainPageComponent } from "./main-page.component";

@NgModule({
    declarations: [
      MainPageComponent,
      MainHeaderComponent,
      FeaturesComponent,
      PilotNodesComponent,
      EndUsersComponent,
      FeedbackPanelComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', pathMatch: 'full', redirectTo: '/' },
        
      ]),
    ],
    exports: [MainPageComponent],
  })
  export class MainPageModule {}
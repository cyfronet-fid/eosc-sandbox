import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EndUsersComponent } from './pages/end-users/end-users.component';
import { PilotNodesComponent } from './pages/pilot-nodes/pilot-nodes.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'end-users', component: EndUsersComponent },
  { path: 'pilot-nodes', component: PilotNodesComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

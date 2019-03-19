import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LogComponent } from './pages/log/log.component';
import { AdminPage } from './pages/admin-page/admin-page.component';
import { ConfigComponent } from './pages/config/config.component';
import { VideosComponent } from './pages/videos/videos.component';

const heroesRoutes: Routes = [
  { path: '', component: AdminPage },
  { path: 'video', component: VideosComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'log', component: LogComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {
}

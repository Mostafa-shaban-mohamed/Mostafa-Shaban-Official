import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppStoreComponent } from './app-store/app-store.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: IntroPageComponent  },
  {path: 'app-store', component: AppStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomePageComponent } from './pages/main-home-page/main-home-page.component';

const routes: Routes = [
  {path: '',
  children: [
    {
      path: '', component: MainHomePageComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainHomeRoutingModule { }

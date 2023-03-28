import { TechComponent } from './tech/tech.component';
import { NewspageComponent } from './newspage/newspage.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'tech', component:TechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

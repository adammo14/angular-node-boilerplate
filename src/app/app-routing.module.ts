import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { PostsRoutingModule } from './posts/posts-routing.module';

const routes: Routes = [
  { path: '', loadChildren: () => HomeRoutingModule },
  { path: 'posts', loadChildren: () => PostsRoutingModule },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

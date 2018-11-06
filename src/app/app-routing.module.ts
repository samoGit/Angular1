import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe/rooted/recipe-list/recipe-list.component';
import { RecipeOverviewComponent } from './recipe/rooted/recipe-overview/recipe-overview.component';

const routes: Routes = [{
  path: 'recipes',
  component: RecipeListComponent
},
{
  path: 'recipes/:id',
  component: RecipeOverviewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

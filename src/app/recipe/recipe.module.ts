import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './rooted/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './rooted/recipe-detail/recipe-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeOverviewComponent } from './rooted/recipe-overview/recipe-overview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeOverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomMaterialModule,
    RouterModule
  ]
})

export class RecipeModule { }

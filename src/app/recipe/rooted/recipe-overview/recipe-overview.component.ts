import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {
  recipeOfOverview: Recipe;

  constructor(
    private route: ActivatedRoute,
    private _recipeService: RecipeService
  ) {
    console.log('RecipeOverviewComponent::constructor');

    const id = this.route.snapshot.paramMap.get('id');
    console.log('id = ' + id);

    this._recipeService.getRecipe(id).subscribe(recipe => {
      this.recipeOfOverview = recipe;
      console.log('onSUBSCRIBE >>> recipes = ' + this.recipeOfOverview);
    });
  }

  ngOnInit() {
    console.log('onInit >>> recipes = ' + this.recipeOfOverview);
  }
}

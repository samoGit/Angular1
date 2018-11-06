import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Input()
  showDetail = false;

  @Input()
  showInfo = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShowDetail() {
    this.showDetail = !this.showDetail;
  }
}

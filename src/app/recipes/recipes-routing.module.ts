import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard-service';

const recipesRoutes: Routes = [
    {path: '', component: RecipesComponent, children:[//child-routing children components of recipe
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
      ]},
];

@NgModule({
    imports: [
        //for child is used for routeModule built oustide app-routing-module.ts
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule],
    providers:[AuthGuard]
})
export class RecipesRoutingModule{}
import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { recipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
 
const appRoutes:Routes = [
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component: recipesComponent },
    {path:'shopping-list', component:ShoppingListComponent},

]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
}) 


export class AppRoutingModule {

}
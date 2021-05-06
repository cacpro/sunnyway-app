import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'savings',
    loadChildren: () => import('./savings/savings.module').then( m => m.SavingsPageModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
  },
  {
    path: 'savings-detail',
    loadChildren: () => import('./savings-detail/savings-detail.module').then( m => m.SavingsDetailPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'recipe-detail',
    loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  },
  {
    path: 'pump-perks',
    loadChildren: () => import('./pump-perks/pump-perks.module').then( m => m.PumpPerksPageModule)
  },
  {
    path: 'add-list-item',
    loadChildren: () => import('./add-list-item/add-list-item.module').then( m => m.AddListItemPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

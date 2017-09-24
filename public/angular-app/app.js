//
angular.module('cookingrecipes', ['ngRoute']).config(config);

//
function config($routeProvider) {
  $routeProvider
    .when('/recipes', {
      templateUrl: 'angular-app/recipe-list/recipes.html',
      controller: RecipesController,
      controllerAs: 'vm'
    })
    .when('/recipe/:id', {
      templateUrl: 'angular-app/recipe-display/recipe.html',
      controller: RecipeController,
      controllerAs: 'vm'
    })
    .when('/addrecipe', {
      templateUrl: 'angular-app/recipe-form/recipe-form.html',
      controller: RecipeFormController,
      controllerAs: 'vm'
    })
    .when('/recipes/:id', {
      templateUrl: 'angular-app/recipe-delete/recipe-delete.html',
      controller: RecipeDeleteController,
      controllerAs: 'vm'
    })
    ;
}

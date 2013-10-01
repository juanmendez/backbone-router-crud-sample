/*
The router orchestrates what should be displayed in the application.
Any controler can request a url update, when it takes effect, router notifies the application
by using app as the dispatcher.
 */
define( ['app'], function(app){

    var Router = Backbone.Router.extend({
        routes: {
            'view/all':'viewRecipes',
            'recipe/create':'createRecipe', /**recipe/create should be before recipe/:id so it is not overriden*/
            'recipe/:id': 'viewRecipe'
        },
        /**
         * url update causes to show all recipes
         */
        viewRecipes:function(){
          this.cached = { state:'recipe:viewall' };

          app.trigger( 'recipe:viewall' );
        },
        /**
         * url update causes to edit one recipe
         * @param id
         */
        viewRecipe: function (id) {
            this.cached = { state:'recipe:edit', id:id };
            app.trigger('recipe:edit', id );
        },
        /**
         * url update cause to create a new recipe
         */
        createRecipe:function(){
            this.cached = { state:'recipe:create' };
            app.trigger( 'recipe:create' );
        }
    });

    var router = new Router();

    return router;
});
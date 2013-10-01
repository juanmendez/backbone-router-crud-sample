define( [ 'app', 'model/RecipeCol', 'model/Recipe', 'control/RecipeView'], function( app, RecipeCol, Recipe, RecipeView ){

    return Backbone.View.extend({
        initialize:function(){

            var last_event;

            this.collection.on( 'reset', function(e){ self.fetch.apply( this, arguments ); }, this );
            this.collection.on( 'add', function(){ self.add.apply( this, arguments);}, this );

            var self = {};

            self.add = function( model ){

                var recipeView = new RecipeView( {model:model} );
                this.$el.append( recipeView.render().$el );

                this.collection.sort();
            }


            self.fetch = function(){

                var recipeView;
                this.$el.empty();
                this.collection.each( function(model){

                    recipeView = new RecipeView( {model:model} );
                    this.$el.append( recipeView.render().$el );
                }, this);
            }

            this.collection.on( 'change', function(){
                this.collection.sort();
            }, this);


            this.collection.on( 'all', function(event){
               last_event = event;
            }, this );

            /***
             * upon sorting. i saw twice sort to happen when a new recipe was created.
             * therefore I only handle sorting after 'add' takes effect.
             */
            this.collection.on( 'sort', function(){

                //we mimic sorting for the list of recipes.
                if( last_event != 'add ')
                {
                    var $recipe, $tr;
                    var trs = this.$el.find( "tr" );

                    this.collection.each( function(model, i ){

                        $recipe = $("#recipe_" + model.get('id') );
                        $tr = $(trs[i]);

                        $tr.after( $recipe );
                    }, this);
                }

            }, this);
        }
    });
});
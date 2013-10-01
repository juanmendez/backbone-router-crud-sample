requirejs.config({
   baseUrl:'backbone',
   paths:{
      'jquery':'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
       'underscore':'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
       'backbone':'//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
       'ts':'../templates'
   },
    shim:{

        'underscore':{
            exports:'_'
        },
        'backbone':{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        'imports/bootstrap':{
            deps:['jquery'],
            exports:'Bootstrap'
        }
    }
});

/**
 * Main file creates models and assigns them to their respective view. It initializes router operations once the first fetch
 * takes place.
 */
requirejs( [  'app', 'model/RecipeCol', 'control/TableView', 'control/FormView', 'proxy/RecipeRouter' ], function( app, RecipeCol, TableView, FormView, router ){
    $(function(){

        var recipes = new RecipeCol();
        var tableView = new TableView( {el:'tbody', collection:recipes} );
        var formView = new FormView( {el:'#realModal', collection:recipes} );

        var $refresh = $("#refresh_recipes");
        var $open = $( "#add_recipe");

        $refresh.on('click', function(e){
            recipes.fetch({reset:true});
        });

        $open.on( 'click', function(e){
            router.navigate( 'recipe/create', {trigger: true, replace:false } );
        });



        /**
         * I realized that for router to start is best if the application is ready and then handle the initial
         * router action. :) Here I rely on recipes collection. So once it is fetch lets handle it.
         */

        //handle reset only once!
        var history_start = function(){
            Backbone.history.start();
            recipes.off( 'reset', history_start );
        };

        recipes.on( 'reset', history_start );

        //programatically lets click the refresh button to fetch the collection.
        $refresh.click();
    });
});


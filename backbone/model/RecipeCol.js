/**
 * RecipeCol has a list of recipes which are found at TableView
 */
define( ['backbone', 'model/Recipe'], function( Backbone, Recipe ){

    var RecipeCol =  Backbone.Collection.extend( {
        url:"server_side/collection.php",
        model:Recipe ,
        comparator:function( o1, o2 ){
            return o1.get('title' ) > o2.get('title');
        }

    } );

    return RecipeCol;
});
/*
This is the model use for each RecipeView
 */
define( ['backbone'], function( Backbone ){

    return Backbone.Model.extend({

        defaults:{page:0,title:"",rating:0},
        initialize:function(){

        },
        validate:function( attrs, options ){

            if( isNaN(attrs.page) || isNaN(attrs.rating) )
            {
                return "value is not numeric";
            }

            if( attrs.page <0  )
            {
                return "page value is less than 0";
            }

            if( attrs.rating <0 || attrs.rating > 5 )
            {
                return "rating is not in range between 0 and 5";
            }

            return false;
        }
    });

});
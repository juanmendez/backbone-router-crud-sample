define( ['app', 'proxy/RecipeRouter', 'ts/template'], function(app, router, template){
    return Backbone.View.extend({

        initialize:function(){

            var self = this;

            //upon model changes made by the server, update the view.
            this.model.on('change', function(){

                this.$el.attr( 'id', 'recipe_' + this.model.get('id') );

                var tds = this.$el.find( "td" );
                $(tds[0]).text( this.model.get('id') );
                $(tds[1]).text( this.model.get('page') );
                $(tds[2]).text( this.model.get('title') );
                $(tds[3]).text( this.model.get('rating') );
            }, this);

            //if model is being removed from the server, then remove this view as well.
            this.model.on('remove', function(){
                this.$el.remove();
            }, this);

        },
        render:function(){
            var self = this;
            var recipe = this.model.toJSON();

            //we use https://github.com/wycats/handlebars.js/#precompiling-templates to
            //generate the view.
            $row = $( template.table_row( recipe ) );
            $row.data('recipe', recipe );

            $row.on( 'click', function(){
                router.navigate('recipe/' + encodeURI(self.model.get('id')), {trigger: true, replace:false });

                return false;
            } ) ;

            this.$el = $row;

            return this;
        }
    });
});
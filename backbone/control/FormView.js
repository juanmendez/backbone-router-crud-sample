/**
 * FormView is in charge of handling editing of a recipe, creating a new recipe or destroying an existing one.
 */
define(['app', 'model/Recipe', 'proxy/RecipeRouter', 'ts/template', 'imports/bootstrap' ], function (app, Recipe, router, template) {
    return Backbone.View.extend({
        initialize: function () {

            var self = this;
            var $submit_form = $("#submit_form");
            var $modal_body = $("#realModal .modal-body");

            //display dialog
            var pop_up = function( recipe )
            {
                self.model = recipe;

                //var t = _.template($('#f').html(), recipe );
                var t = template.form(self.model.toJSON());
                $modal_body.empty();
                $modal_body.append(t);
                self.$el.modal('show');
            }

            //handle app event to edit recipe
            var edit_handler = function( id ){
                var recipe;

                if( !_.isUndefined(id)) {
                    recipe = self.collection.findWhere( {id:id} );

                    if( recipe instanceof Recipe )
                    {
                       pop_up( recipe );
                    }
                }
            };

            //handle app event when creating a new event
            var create_handler = function()
            {
                   var recipe = new Recipe();
                   pop_up( recipe );
            }

            //handle app event to reveal all recipes, meaning hide the view
            var viewall_handler = function()
            {
                self.$el.modal('hide');
            }


            app.on( 'recipe:edit', edit_handler, this );
            app.on( 'recipe:create', create_handler, this );
            app.on( 'recipe:viewall', viewall_handler, this );

            //cheap method to close the view
            var close_modal = function () {
                self.$el.modal('hide');
            };

            //save handler
            $submit_form.on('click', function () {

                var recipe = self.getRecipeForm();

                //making sure of new recipe if id is empty, remove it
                //so it doesn't confuse Backbone to update instead.
                if(_.isEmpty( recipe.id ) )
                {
                    delete recipe.id;
                }

                self.model.set(recipe);

                if (self.model.isNew()) {

                    self.collection.add(self.model);
                }


                var promise = self.model.save();

                if (_.isBoolean(promise)) {
                    alert('there was an error ' + self.model.validationError );
                    return;
                }
                else if (_.isObject(promise)) {

                    promise.success(close_modal).error(close_modal);
                }

            });

            var $delete_btn = $("#delete_btn");

            //bootstrap prep to enable tooltip on the delete button
            $delete_btn.popover({
                trigger: "hover",
                container: ".modal-footer"
            });


            $delete_btn.on('click', function (e) {

                //delete only if model is not new. :) else close the view
                if (!_.isUndefined(self.model) && !self.model.isNew()) {

                    var promise = self.model.destroy({external: 'destroy'});

                    if (_.isBoolean(promise)) {
                        alert('there was an error ' + self.model.validationError);
                        return;
                    }
                    else if (_.isObject(promise)) {

                        promise.success(close_modal).error(close_modal);
                    }

                }
                else {
                    close_modal();
                }
            });

            //upon closing the view, request router to go to 'view/all'
            this.$el.on("hidden.bs.modal",
                function (e) {
                    $modal_body.empty();
                    router.navigate( 'view/all', {trigger:true, replace:false});
                });

        },
        getRecipeForm: function () {
            return {id: $("#recipeID").val(), title: $("#recipeTitle").val(), page: parseInt($("#recipePage").val()), rating: parseInt($("#recipeRating").val()) };
        }
    });
});
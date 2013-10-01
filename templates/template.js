define(['ts/handlebars'], function() {

  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!--form.handlebars-->\r\n<div class=\"form-group\">\r\n    <label for=\"recipeTitle\">Title</label>\r\n    <input type=\"text\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"form-control\" id=\"recipeTitle\" placeholder=\"Enter Title\">\r\n    <input type=\"text\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"recipeID\" hidden=\"true\">\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"recipePage\">page</label>\r\n    <input type=\"number\"  value=\"";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"  min=\"0\" class=\"form-control\" id=\"recipePage\" placeholder=\"Enter Page\">\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"recipeRating\">rating [0-5]</label>\r\n    <input type=\"number\"  value=\"";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" min=\"0\" max=\"5\" class=\"form-control\" id=\"recipeRating\" placeholder=\"Enter Rating\">\r\n</div>";
  return buffer;
  });
templates['table_row'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!--table_row.handlebars-->\r\n<tr id=\"recipe_";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n    <td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    <td>";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    <td>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    <td>";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n</tr>";
  return buffer;
  });
return templates;
});
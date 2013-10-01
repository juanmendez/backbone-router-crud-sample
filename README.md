backbone-router-crud-sample
===========================

An example showing basic features of BackboneJS

see live example: 
http://juanmendez.info/source/tutorial/backbone/recipe/

After watching pluralsight.com's tutorial, and going over Backbone.org's documentation.
I decided to use Bootstrap for the interface of the application. It blew my mind how Backbone.js does in its background
remote crud calls. All it took me was to save a model such as model.save() for it to either udpate or save.
I had a bit of difficulties knowing how events occur in this situation as the documentation wasn't clear. I also made use
of Routers which update the based url appending a hashvalue. Backbone is able to trigger these url updates. At first I was
only handling everything through an even dispatcher, but the more I learned about Router, the more I felt eager to try to 
use it in order to navigate through this small application. I hope this exercise will ease my experience as I spent a 
good time getting to get used to it, specially having already the mindset of KnockoutJS.

This is a humble example, and would like to get any comments or suggestions. 
One thing, when I uploaded the exercise in my web host, I noticed updates were not happening on the database. I realized
in PHP file_get_contents("php://input", 'r' ) from server_side/collection.php line 58 was returning an empty string. I apologize
if you test it in my live example. I hope I can figure it out but I wasn't going to let this wait longer to be available on github.
My localhost didn't face the same issue and it was my primary location.

An explanation what each main directory mean:\n\n

--backbone (contains javascript files. I used requirejs to put the client-side together. )\n
--server_side (contains php files, and an sql file to quickly import into your mysql server )\n 
--templates (contains the templates for the application and javascript generated handlebars-template file )
index.html (the single page application file )

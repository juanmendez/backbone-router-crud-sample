following http://handlebarsjs.com/precompilation.html and after installing Handlebars
i went to command prompt, and change the path to my project
cd project_absolute_path

then i did the following.
handlebars templates -a -f templates/template.js

that generated an amd format function. based on https://github.com/wycats/handlebars.js/#precompiling-templates
i went into template.js and modified the first line as

define(['ts/handlebars'], function() {

because i set in my requirejs the path to templates directory to be 'ts', and in this way we load it up. Handlebars is
already a global object, I could have used RequireJS shim, but for making this easy I removed the Handlebars parameter.
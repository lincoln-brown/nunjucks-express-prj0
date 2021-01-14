(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["about.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("base.html", true, "about.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n<h1>About</h1>\n<p>This webpage is about ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += ".</p>\n\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <!-- CSS only -->\n  <link rel=\"stylesheet\" href=\"/css/app.css\">\n  \n  <link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n";
output += "\n\n<!-- JavaScript Bundle with Popper -->\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW\" crossorigin=\"anonymous\"></script>\n\n    <title>Nunjucks express Starter App</title>\n\n  \n  </head>\n\n  <body>\n    <header>\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("header.html", false, "base.html", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </header>\n\n    <main>\n        <div class=\"container\">\n            ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n        </div>\n    </main>\n\n    <footer>\n        <div class=\"container\">\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("footer.html", false, "base.html", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </div>\n    </footer>\n\n    <!-- JavaScript Bundle with Popper -->\n    <script src=\"https://mozilla.github.io/nunjucks/files/nunjucks.js\"></script>\n    <script src=\"js/templates.js\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW\" crossorigin=\"anonymous\"></script>\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"js/bootstrap.min.js\"></script>\n  </body>\n</html>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 30;
var colno = 15;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["footer.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<hr>\n<p>Copyright &copy; Nunjucks Inc.</p>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["header.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">nunjucks</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/\" >Home </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/profile\" >Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/about\" >About</a>\n      </li>\n    </ul>\n  </div>\n</nav>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["home.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("base.html", true, "home.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 3;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n\n<div>\n    \n\n    <p class=\"lead\">Use this starter template for your Flask apps as a way to quickly start any new project.<br>\nAll you get are these files and mostly barebones HTML/CSS files.</p>\n    <H1>yes yures yes </H1>\n    \n   \n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["profile.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("base.html", true, "profile.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<div>\n\t<div class=\"block\">\n\t\t<div class=\"upper\">\n\t\t\t<div class=\"profilepic\"> <img class=\"pfp\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "image"), env.opts.autoescape);
output += "\"> </div>\n\t\t\t<h4>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</h4>\n\t\t\t<h6>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "Tag"), env.opts.autoescape);
output += "</h6>\n\t\t\t<h6>Kingston Jamaica</h6>\n\t\t\t<h6>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "date"), env.opts.autoescape);
output += "</h6>\n\t\t\t\n\t\t</div>\n\t\t<br>\n\t\t<div class=\"lower\">\n\t\t\t<p> I am a smart and talented  young man who loves<br> website design and development. Contact me if <br> you would like to work together on a new project.</p>\n\n\t\t\t<div class=\"feed\">\n\t\t\t\t<div class=\"widgets\">\n\t\t\t\t\t<h3>20</h3>\n\t\t\t\t\t<p>Post</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"widgets\">\n\t\t\t\t\t<h3>260</h3>\n\t\t\t\t\t<p>Following</p>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"widgets\">\n\t\t\t\t\t<h3>290</h3>\n\t\t\t\t\t<p>Followers</p>\n\t\t\t\t\t\n\t\t\t\t</div>\t\n\n\t\t\t</div>\n\t\t\t<button id=\"btn\">Follow</button>\n\n\t\t</div>\n\t\t\n\n\t</div>\n\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();


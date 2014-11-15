(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <h1 id=\"thatsme\">"
    + escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"header","hash":{},"data":data}) : helper)))
    + "</h1>\n      <p>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      <p class=\"cta\"><a href=\"#/projects\" class=\"btn\">"
    + escapeExpression(((helper = (helper = helpers.cta || (depth0 != null ? depth0.cta : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cta","hash":{},"data":data}) : helper)))
    + "</a></p>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "        <li class=\""
    + escapeExpression(lambda((data && data.key), depth0))
    + "\"><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\"><span class=\"contact-icon\"><img src=\""
    + escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"icon","hash":{},"data":data}) : helper)))
    + "\"/></span></a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"home-container\">\n  <div class=\"greeting\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.greetings : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"contact-footer\">\n      <h3>Me on the interwebs:</h3>\n      <ul class=\"contact-info\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.contact : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </ul>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['projects'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Hello world!</h1>";
  },"useData":true});
templates['resume'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "      <li class=\""
    + escapeExpression(lambda((data && data.key), depth0))
    + "\"><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\"><span class=\"contact-icon\"><img src=\""
    + escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"icon","hash":{},"data":data}) : helper)))
    + "\"/></span>"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "    <div class=\"professional\">\n      <h2><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</a> <small>"
    + escapeExpression(((helper = (helper = helpers.dates || (depth0 != null ? depth0.dates : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dates","hash":{},"data":data}) : helper)))
    + "</small></h2>\n      <p><span class=\"job-title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + ": </span>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "<p>\n    </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "    <div class=\"education\">\n      <h2><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</a> <small>"
    + escapeExpression(((helper = (helper = helpers.dates || (depth0 != null ? depth0.dates : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dates","hash":{},"data":data}) : helper)))
    + "</small></h2>\n      <p><span class=\"degree\">"
    + escapeExpression(((helper = (helper = helpers.program || (depth0 != null ? depth0.program : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"program","hash":{},"data":data}) : helper)))
    + ": </span>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "<p>\n    </div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "    <div class=\"skill\">\n      <p class=\""
    + escapeExpression(lambda((data && data.key), depth0))
    + "\"><span class=\"skillkey\">"
    + escapeExpression(lambda((data && data.key), depth0))
    + ": </span><span class=\"level\">"
    + escapeExpression(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"level","hash":{},"data":data}) : helper)))
    + "</span></p>\n    </div>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "    <div class=\"skill\">\n      <p><img class=\"software-icon\" src=\""
    + escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"icon","hash":{},"data":data}) : helper)))
    + "\"/><span class=\"skillkey\">"
    + escapeExpression(lambda((data && data.key), depth0))
    + ": </span><span class=\"level\">"
    + escapeExpression(((helper = (helper = helpers.level || (depth0 != null ? depth0.level : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"level","hash":{},"data":data}) : helper)))
    + "</span></p>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"skills container\">\n  <div class=\"contact\">\n    <ul class=\"contact-info\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.contact : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </ul>\n  </div>\n  <div class=\"experience grid_16\">\n    <h1 class=\"work-header\">Work Experience:</h1>\n    <span class=\"bottom-border\"></span>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.experience : stack1)) != null ? stack1.professional : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <h1 class=\"edu-header\">Education:</h1>\n    <span class=\"bottom-border\"></span>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.experience : stack1)) != null ? stack1.education : stack1), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </div>\n  <div class=\"technical-skills grid_16\">\n    <h1>Technical Skill: <span class=\"normalize\">Achievement Attained</span></h1>\n    <span class=\"bottom-border\"></span>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.skills : stack1)) != null ? stack1.technical : stack1), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </div>\n  <div class=\"software-skills grid_16\">\n    <h1>Software Skills:</h1>\n    <span class=\"bottom-border\"></span>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.skills : stack1)) != null ? stack1.software : stack1), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</div>";
},"useData":true});
})();

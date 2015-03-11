(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            "jquery",
            "pat-base",
            "pat-registry",
            "pat-parser"
        ], function() {
            return factory.apply(this, arguments);
        });
    } else {
        factory($, Base, patterns, patterns.Parser);
    }
}(this, function($, Base, registry, Parser) {
    'use strict';
    var parser = new Parser('<%= appname.split("-")[1] %>');

    return Base.extend({
        name: '<%= appname.split("-")[1] %>',
        trigger: ".<%= appname %>",

        init: function init<%= _.classify(this.appname) %> () {  
            this.options = parser.parse(this.$el);
        }
    });
}));

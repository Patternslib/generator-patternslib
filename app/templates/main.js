require.config({
    baseUrl: "src",
    paths: {
        "ckeditor":                     "bower_components/ckeditor/ckeditor",
        "ckeditor-jquery":              "bower_components/ckeditor/adapters/jquery",
        "jquery":                       "bower_components/jquery/dist/jquery",
        "jquery.browser":               "bower_components/jquery.browser/dist/jquery.browser",
        "logging":                      "bower_components/logging/src/logging",
        "pat-base":                     "bower_components/patternslib/src/core/base",
        "pat-compat":                   "bower_components/patternslib/src/core/compat",
        "pat-jquery-ext":               "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":                   "bower_components/patternslib/src/core/logger",
        "pat-parser":                   "bower_components/patternslib/src/core/parser",
        "pat-registry":                 "bower_components/patternslib/src/core/registry",
        "pat-utils":                    "bower_components/patternslib/src/core/utils",
        "patterns":                     "bower_components/patternslib/bundle",
        "underscore":                   "bower_components/underscore/underscore",
    },
    "shim": {
        "logging": { "exports": "logging" },
        "ckeditor-jquery":{ deps:["jquery","ckeditor"] }
    }
});

require(["pat-registry", "pat-ckeditor"], function(registry, editor) {
    window.patterns = registry;
    registry.init();
});

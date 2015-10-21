var path = require('path');
var yeoman = require('yeoman-generator');

var PatternGenerator = yeoman.generators.Base.extend({

    constructor: function() {
        'use strict';
        yeoman.generators.Base.apply(this, arguments);

        this.argument('app_name', {
            type: String,
            required: true
        });
        this.appname = this.app_name || this.appname;
        this.option('appPath', {
            desc: 'Name of application directory',
            type: 'String',
            defaults: this.appname,
            banner: 'some banner'
        });
        this.env.options.appPath = this.options.appPath;
        this.config.set('appPath', this.env.options.appPath);
    },

    writing: {

        setupBase: function() {
            this.mkdir(this.env.options.appPath);
            this.mkdir(this.env.options.appPath + '/src');
        },

        setupBower: function() {
            this.template('bowerrc', this.env.options.appPath +
                '/.bowerrc');
            this.copy('_bower.json', this.env.options.appPath +
                '/bower.json');
        },

        setupNode: function() {
            this.template('_package.json', this.env.options.appPath +
                '/package.json');
        },

        setupDevEnv: function() {
            this.copy('editorconfig', this.env.options.appPath +
                '/.editorconfig');
            this.template('gitignore', this.env.options.appPath +
                '/.gitignore');
            this.copy('jshintrc', this.env.options.appPath +
                '/.jshintrc');
            this.copy('Makefile', this.env.options.appPath +
                '/Makefile');
            this.copy('README.md', this.env.options.appPath +
                '/README.md');
        },

        setupIndex: function() {
            this.indexFile = this.readFileAsString(path.join(this.sourceRoot(),
                '/index.html'));
            this.indexFile = this.engine(this.indexFile, this);
            this.write(this.env.options.appPath + '/index.html', this.indexFile);
        },

        setupDocs: function() {
            this.template("README.md", this.env.options.appPath +
                '/README.md');
        },

        setupApp: function() {
            this.template("main.js", this.env.options.appPath +
                '/main.js');
            this.template("pattern.js", this.env.options.appPath +
                '/src/' + this.appname + '.js');
        }
    }
});

module.exports = PatternGenerator;

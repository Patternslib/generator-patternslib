var path = require('path');
var yeoman = require('yeoman-generator');

var PatternGenerator = yeoman.generators.Base.extend({

  constructor: function () {
    'use strict';
    yeoman.generators.Base.apply(this, arguments);

    this.option('appPath', {
      desc: 'Name of application directory',
      type: 'String',
      defaults: './',
      banner: 'some banner'
    });
    this.argument('app_name', { type: String, required: false });
    this.appname = this.app_name || this.appname;
    this.env.options.appPath = this.options.appPath || './';
    this.config.set('appPath', this.env.options.appPath);
    this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
  },

  writing: {
    setupEnv: function () {
      this.mkdir(this.env.options.appPath);
      this.mkdir(this.env.options.appPath + '/src');
      this.write(this.env.options.appPath + '/index.html', this.indexFile);
    },

    git: function () {
      this.template('gitignore', '.gitignore');
    },

    bower: function () {
      this.template('bowerrc', '.bowerrc');
      this.copy('_bower.json', 'bower.json');
    },

    jshint: function () {
      this.copy('jshintrc', '.jshintrc');
    },

    editorConfig: function () {
      this.copy('editorconfig', '.editorconfig');
    },

    copyMakeFile: function () {
      this.copy('Makefile', 'Makefile');
    },

    packageJSON: function () {
      this.template('_package.json', 'package.json');
    },

    writeIndex: function () {
      this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
      this.indexFile = this.engine(this.indexFile, this);
    },

    createPatternFile: function () {
      this.template("pattern.js", this.env.options.appPath + '/src/pattern.js');
    }
  }
});

module.exports = PatternGenerator;

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  prompting: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your component name',
      default : this.appname
    }, function (answers) {
      var name = answers.name;

      name = name.replace(/\s+/g, '-');

      var capname = name.replace(/^z-/, '').toUpperCase();
      this.capname = capname;

      this.config.set('name', name);
      this.name = name;

      done();
    }.bind(this));
  },

  writing: {
    git: function () {
      this.copy('gitignore', '.gitignore');
    },
    bower: function () {
      this.copy('bowerrc', '.bowerrc');
      this.template('bower.json');
    },
    gulp: function () {
      this.copy('gulpfile.js');
    },
    package: function () {
      this.template('package.json');
    },
    test: function () {
      this.mkdir('test');
      this.template('test/index.html');
      this.template('test/basic.html');
    },
    main: function () {
      var name = this.config.get('name');

      this.template('index.html');
      this.template('z-foo.html', name + '.html');
    }
  }
});

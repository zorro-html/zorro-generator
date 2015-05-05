var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    // this.option('coffee'); // This method adds support for a `--coffee` flag
  },

  prompting: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your component name',
      store   : true,
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.log(answers.name);
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
      this.template('package.json', 'package.json');
    },
    main: function () {
      var name = this.config.get('name');
      this.template('demo.html');
      this.template('z-foo.html', name + '.html');
    }
  }
});

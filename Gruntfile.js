
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: [
          'src/tobi.js',
         'src/core/extend.js',
        'src/core/renderable.js',
        'src/objects/transform.js',
        'src/objects/hierarchy.js',
        'src/objects/instance.js',
        'src/render/renderlayer.js',
        'src/core/injector.js',
        'src/loader/loaderstate.js',
        'src/loader/file.js',
        'src/**/*.js'],
        // the location of the resulting JS file
        dest: 'build/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

  
  
  

};

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
    });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          '_/js/claimpartner.js': ['_/components/js/*.js','_/components/js/modules/*.js']
        } //files
      } //my_target
    }, //uglify
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, //compass
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      }, //script
      sass: {
        sourcemap: 'auto',  
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      }, //sass
      html: {
        files: ['*.html']
      }
    } //watch
  }) //initConfig
  grunt.registerTask('default', 'watch');
} //exports
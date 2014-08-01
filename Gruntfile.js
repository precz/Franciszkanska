module.exports = function(grunt){
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true,
          timeout: 15 * 1000
        },
        src: ['test/**/*.js']
      },
    },

    watch: {
      js: {
        options: {
          spawn: true,
          interrupt: true,
          debounceDelay: 250,
        },
        files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
        tasks: ['mochaTest']
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['mochaTest']);
  grunt.registerTask('test', ['mochaTest']);
};
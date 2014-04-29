module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        less: {
            compile: {
                files: {
                    "./assets/css/site.css": "./_less/site.less"
                }
            }
        },
        watch: {
            less: {
                files: ['./_less/site.less'],
                tasks: ['less:compile']
            }
        }
    });
 
    // Default task. Run standard jekyll server.
    grunt.registerTask('default', ['less:compile', 'watch']);
 
    // plugin tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
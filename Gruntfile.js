module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.initConfig({
        uglify: {
            
        },
        copy: {
            
        },
        jekyll: {
            options: {

            },
            dist: {

            },
            serve: {

            }
        }    
    });

    grunt.registerTask('default', [ 'less', 'uglify', 'copy' ]);
    grunt.registerTask('deploy', [ 'default' ]);
});
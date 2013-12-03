module.exports = function gruntConfig(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        sass: {
            all: {
                options: {},

                files: [{
                    expand: true,
                    cwd: 'styles/sass',
                    src: [
                        '*.scss',    // common style
                    ],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            styles: {
                options: {
                    livereload: true
                },
                files: ['styles/**/*.scss'],
                tasks: ['sass:all']
            },
            sites: {
                options: {
                    livereload: true
                },
                files: ['public/**/*.html']
            }
        }
    });

    grunt.registerTask('default', ['sass:all']);
};
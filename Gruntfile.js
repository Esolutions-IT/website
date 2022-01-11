module.exports = function (grunt) {
    require('jit-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            development: {
                tasks: [
					[
						'less', 
						'postcss'
					], 
					[
						'concat:development', 
						'babel'
					], 
					'watch:styles',
					'watch:scripts'
				],
                options: {
                    logConcurrentOutput: true
                }
            },
            production: {
                tasks: [
					[
						'less', 
						'postcss'
					], 
					[
						'concat:production', 
						'babel', 
						'uglify'
					]
				],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                },
                files: {
                    'public/css/<%= pkg.name %>.min.css': 'src/less/main.less'
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        
                    })
                ]
            },
            dist: {
                src: 'public/css/<%= pkg.name %>.min.css'
            }
        },
        concat: {
            development: {
                files: {
                    'public/js/<%= pkg.name %>.min.js': [
                        'src/js/modules/**/*.js'
                    ]
                }
            },
            production: {
                files: {
                    'public/js/<%= pkg.name %>.min.js': [
                        'src/js/modules/**/*.js'
                    ],
                }
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['@babel/env']
            },
            dist: {
                files: {
                    'public/js/<%= pkg.name %>.min.js': 'public/js/<%= pkg.name %>.min.js',
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            development: {
                files: {
                    'public/js/<%= pkg.name %>.min.js': 'public/js/<%= pkg.name %>.min.js',
                    'public/js/vendor.min.js': 'public/js/vendor.min.js'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/less/**/*.less'],
                tasks: ['less', 'postcss'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: ['src/js/modules/**/*.js'],
                tasks: ['concat', 'babel'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', 'concurrent:development');
    grunt.registerTask('production', 'concurrent:production');
};

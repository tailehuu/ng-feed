# Angular Feed Project

This project include Protractor (E2E testing), Environment Specific Configuration.

#### Installation:

    > npm install
    > ...

#### Command:

- Unit testing

    > grunt karma

- E2E testing

    > grunt protractor

- Full testing

    > grunt test

- Running

  - Development (default)

    > grunt serve

  - Staging

    > grunt staging

  - Production

    > grunt production

#### How it created:

1. Scaffolding

    > mkdir ng-feed
    > cd ng-feed
    > yo angular
    
2. Unit test

    > npm install grunt-karma --save-dev
    > npm install karma-jasmine --save-dev
    
3. Protractor

    > npm install karma-phantomjs-launcher --save-dev

Create protractor.conf.js file under test folder & add it contents:

    exports.config = {
        allScriptsTimeout: 11000,
    
        specs: [
            'e2e/*.js'
        ],
    
        capabilities: {
            'browserName': 'chrome'
        },
    
        chromeOnly: true,
    
        baseUrl: 'http://localhost:9000/',
    
        framework: 'jasmine',
    
        jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
        }
    };
    
Update your Gruntfile.js, add the following after the karma task:

    protractor: {
      options: {
        keepAlive: true,
        configFile: "test/protractor.conf.js"
      },
      run: {}
    }    

Add the protractor task under test, Gruntfile.js

    grunt.registerTask('test', [
      'clean:server',
      'concurrent:test',
      'autoprefixer',
      'connect:test',
      'karma',
      'protractor:run'
    ]);    

3. Development lifecycle - Environment Specific Configuration

        > npm install generator-env-config
        > npm install grunt-replace --save-dev
        > yo env-config
        > yo env-config staging
        > yo env-config production
        > yo env-config:angular config
        > grunt serve | staging | production
    
Modify Grunfile.js

replace:

    replace: {
                development: {
                    options: {
                        patterns: [
                            {
                                json: grunt.file.readJSON('./config/environments/development.json')
                            }
                        ]
                    },
                    files: [
                        {
                            expand: true,
                            flatten: true,
                            src: ['./config/config.js'],
                            dest: '<%= yeoman.app %>/scripts/services/'
                        }
                    ]
                },
                staging: {
                    options: {
                        patterns: [
                            {
                                json: grunt.file.readJSON('./config/environments/staging.json')
                            }
                        ]
                    },
                    ...
                },
                production: {
                    options: {
                        patterns: [
                            {
                                json: grunt.file.readJSON('./config/environments/production.json')
                            }
                        ]
                    },
                    ...
                }
            }

modify serve task:

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
            ...
    
            grunt.task.run([
                ...
                'replace:development',
                'watch'
            ]);
        });

add two new tasks:

    grunt.registerTask('staging', [
            'replace:staging',
    
            // run other command
            'clean:server',
            'wiredep',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    
        grunt.registerTask('production', [
            'replace:production',
    
            // run other command
            'clean:server',
            'wiredep',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);


Finish.

:smile:
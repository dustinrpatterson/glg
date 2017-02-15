module.exports = function (grunt) {

    // configuration
    grunt.initConfig({
        concat: {
            css: {
                src: ['app/styles/*.css'],
                dest: 'app/style.css'
            }
        },
        sass:{
            build:{
                files: [{
                    src: 'app/styles/style.scss',
                    dest:'app/styles/style.css'
                }]
            }
        }

    });

    // Load plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');




    // Register tasks   

    // grunt.registerTask('run',function(){
    //     console.log("hello")
    // })

};
/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        nodemon: {
            dev: {
                script: "index.js",
                options: {
                    watch: ["*.js", "!Gruntfile.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-nodemon");
    grunt.registerTask("run", ["nodemon:dev"]);
    grunt.registerTask("default", ["nodemon:dev"]);
};
Simple Sass Project
===================

Provides a basic webserver for static files, serving files from directory: public/

Prerequisites
-------------

Have grunt commandline installed globally:

    npm install --global grunt-cli

Have Compass (sass preprocessor) installed globally:
(On a MAC)

    sudo gem update --system
    sudo gem install compass

Install all project dependencies locally:

    npm install


Usage
-----

Use it like this:

In one terminal:

    node server.js

Point your browser to http://localhost:8080/hello.html

In another terminal:
(Start grunt in watch-mode)

    grunt default watch

This will notice file changes in ```styles/``` and recompile them to CSS files in ```public/css/```.

Hint: File changes will reload all connected websites if they include a livereload-script like so:

    <script src="http://localhost:35729/livereload.js"></script>


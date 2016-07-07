var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.browserify( './src/main.js', 'dist/js/build.js' );
    mix.browserSync({
        files: [
            '*.html',
            'dist/**/*',
        ],
        proxy: null,
        server: './',
    });
    // mix.sass('app.scss');
});

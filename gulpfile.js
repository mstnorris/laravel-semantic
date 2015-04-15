var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.copy(
        'vendor/bower_components/semantic-ui/dist/semantic.css',
        'public/css/vendor/semantic-ui/semantic.css'
    )
        .copy(
        'vendor/bower_components/semantic-ui/dist/semantic.js',
        'public/js/vendor/semantic-ui/semantic.js'
    )
        .copy(
        'vendor/bower_components/jquery/dist/jquery.js',
        'public/js/vendor/jquery/jquery.js'
    )
        .stylesIn("public/css");
});
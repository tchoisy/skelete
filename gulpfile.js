var elixir = require('laravel-elixir');

elixir.config.publicPath = "web";
elixir.config.appPath = "resources";
elixir.config.assetsPath = "resources";

elixir(function(mix) {
     mix.sass('master.scss');
     mix.scripts(
	     [],
	     'js/master.js'
	);
    mix.copy('resources/assets', 'web');
});
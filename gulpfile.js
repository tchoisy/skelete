var elixir = require('laravel-elixir');

elixir.config.publicPath = "web";
elixir.config.appPath = "resources";

elixir(function(mix) {
     mix.sass('master.scss');
     mix.scripts(
	     [],
	     'js/master.js'
	);
});
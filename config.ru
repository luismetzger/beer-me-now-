require 'rubygems'
require 'bundler'
Bundler.require

require 'sass/plugin/rack'
Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

require './beer_me_now'
run BeerMeNow

require 'rubygems'
require 'bundler'
Bundler.require

require 'sass/plugin/rack'
Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

# Models
require './models/beer'
require './models/comment'
require './models/venue'

# Controllers
require './beer_me_now'
require './controllers/comments'
require './controllers/venues'
require './controllers/results'


run BeerMeNow

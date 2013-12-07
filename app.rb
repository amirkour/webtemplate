require 'bundler'
Bundler.setup(:default)
require 'haml'
require 'json'
require 'sinatra/json'
require 'sinatra/base'
require 'sinatra/reloader'
require 'sinatra/multi_route'

class App < Sinatra::Base
	set :app_file, __FILE__
	set :sessions, true
	register Sinatra::MultiRoute
    register Sinatra::JSON

	# configure :development do
		register Sinatra::Reloader
		enable :logging
        # set :show_exceptions, false

	# end

	# configure :production do

	# end

	helpers do

	end

	# want errors?  uncomment this block and make sure you have views/error.haml
	# also make sure you uncommnt the line in config that reads:
	# set :show_exceptions, false
	# error do
	# 	exception=env['sinatra.error']
	# 	@unexpected_error_msg=exception.respond_to?(:message) ? exception.message : "Unknown error"
	# 	haml :error
	# end

	get "/" do
		haml :index
	end

end

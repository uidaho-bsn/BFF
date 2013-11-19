source 'https://rubygems.org'

# Rails
gem 'rails'
gem 'thin'

gem 'jquery-rails'
gem 'jquery-mobile-rails'
gem 'will_paginate', :platforms => :ruby

# Mailer
gem 'tlsmail'

# Gems used only for assets and not required in production environments by default.
group :assets do
  gem 'sass-rails'
  gem 'coffee-rails'
  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # Linux JavaScript Runtime
  gem 'therubyracer', require: "v8", :platforms => :ruby
  gem 'uglifier', '>= 1.0.3'
end

group :development do
  #gem 'debugger'
  gem 'sqlite3'
  gem 'debugger'
end

group :production do
  gem 'pg'
end

# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )


Rails.application.config.assets.precompile += ['.svg', '*.eot', '*.woff', '*.woff2', '*.ttf', '*.otf', '*.js', '*.css', '*.ico', '*.png']
# config.assets.precompile += %w( print.js )
# config.assets.precompile += %w( toggle.js )

Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'javascripts')
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'stylesheets')
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'images')
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

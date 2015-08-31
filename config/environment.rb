# Load the Rails application.
require File.expand_path('../application', __FILE__)


# Set version from GIT
APP_VERSION = `git describe --always` unless defined? APP_VERSION

# Initialize the Rails application.
Rails.application.initialize!


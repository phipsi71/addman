# -*- encoding: utf-8 -*-
# stub: less-rails-fontawesome 0.5.1 ruby lib

Gem::Specification.new do |s|
  s.name = "less-rails-fontawesome".freeze
  s.version = "0.5.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Wlodek Bzyl".freeze]
  s.date = "2013-07-14"
  s.description = "Font Awesome, LESS version, with assets pipeline for Rails Asset Pipeline".freeze
  s.email = ["matwb@ug.edu.pl".freeze]
  s.homepage = "https://github.com/wbzyl/less-rails-fontawesome".freeze
  s.rubyforge_project = "less-rails-fontawesome".freeze
  s.rubygems_version = "2.6.3".freeze
  s.summary = "Font Awesome in LESS for Rails Asset Pipeline".freeze

  s.installed_by_version = "2.6.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>.freeze, [">= 3.1.1"])
      s.add_runtime_dependency(%q<less-rails>.freeze, [">= 2.1.7"])
    else
      s.add_dependency(%q<railties>.freeze, [">= 3.1.1"])
      s.add_dependency(%q<less-rails>.freeze, [">= 2.1.7"])
    end
  else
    s.add_dependency(%q<railties>.freeze, [">= 3.1.1"])
    s.add_dependency(%q<less-rails>.freeze, [">= 2.1.7"])
  end
end

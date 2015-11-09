# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# List.create([
#   { name: 'Krebsbulletin'},
#   { name: 'HJV Einladungen'},
#   { name: 'Participants Report'},
#   { name: 'Jahresbericht'},
#   { name: 'Newsletter'},
#   { name: 'Safety Mailing'},
#   { name: 'Principal Investigators'},
#   { name: 'Alle Adressen'}
#   ])

Salutation.create( lang: 'D', gender: 'M', salutation: 'Sehr geehrter' )
Salutation.create( lang: 'D', gender: 'F', salutation: 'Sehr geehrte' )
Salutation.create( lang: 'F', gender: 'M', salutation: '' )
Salutation.create( lang: 'F', gender: 'F', salutation: '' )
Salutation.create( lang: 'E', gender: 'M', salutation: 'Dear' )
Salutation.create( lang: 'E', gender: 'F', salutation: 'Dear' )

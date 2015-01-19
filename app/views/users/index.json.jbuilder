json.array!(@users) do |user|
  json.extract! user, :id, :UserId, :Title, :Firstname, :Lastname, :Company, :Street, :Appendix, :City, :ZIP, :Country, :Fax, :Phone, :Phone2, :Email, :Email2, :Gender, :Initials, :Language, :Memo, :Prio, :Mailgroups, :Function, :created_by, :updated_by
  json.url user_url(user, format: :json)
end

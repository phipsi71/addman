json.array!(@mailgroups) do |mailgroup|
  json.extract! mailgroup, :id, :groupid, :name, :memo, :trialcode, :importance, :created_by, :updated_by, :created_at, :updated_at
  json.url mailgroup_url(mailgroup, format: :json)
end

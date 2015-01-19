create or replace function refresh_search()
returns trigger language plpgsql
as $$
begin
    refresh materialized view search_indices;
    return null;
end $$;

create trigger refresh_search
after insert or update or delete or truncate
on users for each statement 
execute procedure refresh_search();

create trigger refresh_search
after insert or update or delete or truncate
on mailgroups for each statement 
execute procedure refresh_search();


create trigger refresh_search
after insert or update or delete or truncate
on mailgroups_users for each statement 
execute procedure refresh_search();

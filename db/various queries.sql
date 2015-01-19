DROP MATERIALIZED VIEW search_index;

CREATE MATERIALIZED VIEW search_index AS 
 SELECT users.id,
    ((((((to_tsvector(unaccent(COALESCE(users.firstname, ''::character varying)::text)) || to_tsvector(unaccent(COALESCE(users.lastname, ''::character varying)::text))) || to_tsvector(unaccent(COALESCE(users.function, ''::character varying)::text))) || to_tsvector(unaccent(COALESCE(users.street, ''::character varying)::text))) || to_tsvector(unaccent(COALESCE(users.city, ''::character varying)::text))) || to_tsvector(unaccent(COALESCE(users.company, ''::character varying)::text))) || to_tsvector(unaccent(COALESCE(users.function, ''::character varying)::text))) || to_tsvector(unaccent(COALESCE(users.memo, ''::text))) AS document
   FROM users
WITH DATA;

ALTER TABLE search_index
  OWNER TO ruby;

CREATE INDEX idx_fts_search ON search_index USING gin(document);

alter table users add primary key (id)

alter sequence user_id_seq restart with 10000;

select currval(user_id_seq)


select * from user_id_seq;
select currval('user_id_seq')

select pg_get_serial_sequence('users','id');
SELECT currval(pg_get_serial_sequence('users', 'id'));
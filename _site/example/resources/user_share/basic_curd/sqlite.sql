CREATE TABLE user (
  id         integer primary key,
  name text  default '',
  job  text  default '',
  note   text default '',
  start_date timestamp  DEFAULT  (datetime('now', 'localtime'))
);
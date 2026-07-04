create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 80),
  email text not null check (char_length(email) between 5 and 160),
  project_type text not null check (char_length(project_type) between 2 and 80),
  message text not null check (char_length(message) between 10 and 2000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;
create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);

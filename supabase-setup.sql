create table if not exists public.dashboard_state (
  workspace_id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by text
);

alter table public.dashboard_state enable row level security;

drop policy if exists "beta dashboard can read" on public.dashboard_state;
drop policy if exists "beta dashboard can insert" on public.dashboard_state;
drop policy if exists "beta dashboard can update" on public.dashboard_state;

create policy "beta dashboard can read"
on public.dashboard_state
for select
to anon
using (workspace_id = 'chaoming-waitan-beta');

create policy "beta dashboard can insert"
on public.dashboard_state
for insert
to anon
with check (workspace_id = 'chaoming-waitan-beta');

create policy "beta dashboard can update"
on public.dashboard_state
for update
to anon
using (workspace_id = 'chaoming-waitan-beta')
with check (workspace_id = 'chaoming-waitan-beta');

create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null default '',
  category text not null default 'Geral',
  images jsonb not null default '[]'::jsonb,
  videos jsonb not null default '[]'::jsonb,
  features jsonb not null default '[]'::jsonb,
  available boolean not null default true,
  featured boolean not null default false,
  is_new boolean not null default false,
  popular boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.store_settings (
  key text primary key,
  value text not null default ''
);

insert into public.store_settings(key,value) values
 ('store_name','BEST CONTENT'),
 ('telegram_link','https://t.me/biggselller'),
 ('logo_url',''),
 ('hero_title','O desejo de escolher bem.'),
 ('hero_text','Uma curadoria premium, apresentada com discrição. Descubra a coleção e fale connosco em privado.'),
 ('hero_image','')
on conflict (key) do nothing;

-- API access uses the server-only service role key; do not expose that key in browser code.
alter table public.products enable row level security;
alter table public.store_settings enable row level security;
revoke all on public.products from anon, authenticated;
revoke all on public.store_settings from anon, authenticated;

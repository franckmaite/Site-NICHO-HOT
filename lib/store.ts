export type Product = {
  id: string; name: string; slug: string; description: string; category: string;
  images: string[]; videos: string[]; features: string[]; available: boolean;
  featured: boolean; is_new: boolean; popular: boolean; created_at?: string;
};

const sample: Product[] = [
  { id: 'sample-1', name: 'Noir Signature', slug: 'noir-signature', category: 'Coleção exclusiva', description: 'Uma seleção de presença marcante, acabamento cuidado e elegância discreta. Contacte-nos para conhecer os detalhes e a disponibilidade.', images: [], videos: [], features: ['Acabamento premium', 'Seleção exclusiva', 'Atendimento privado'], available: true, featured: true, is_new: true, popular: true },
  { id: 'sample-2', name: 'Velvet Edition', slug: 'velvet-edition', category: 'Edições especiais', description: 'Uma peça escolhida pelo seu design sofisticado e atenção aos detalhes. Consulte-nos em privado para mais informações.', images: [], videos: [], features: ['Design sofisticado', 'Disponibilidade limitada', 'Embalagem discreta'], available: true, featured: true, is_new: false, popular: true },
  { id: 'sample-3', name: 'Midnight Selection', slug: 'midnight-selection', category: 'Novidades', description: 'Uma novidade da coleção BEST CONTENT, apresentada com discrição e serviço personalizado através do Telegram.', images: [], videos: [], features: ['Nova coleção', 'Seleção premium', 'Apoio personalizado'], available: true, featured: false, is_new: true, popular: false }
];

export async function getProducts(): Promise<Product[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return sample;
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const db = createClient(url, key, { auth: { persistSession: false } });
    const { data, error } = await db.from('products').select('*').order('created_at', { ascending: false });
    if (error || !data) return sample;
    return data as Product[];
  } catch { return sample; }
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await getProducts()).find((p) => p.slug === slug);
}

export async function getStoreSettings() {
  const defaults = { store_name: process.env.NEXT_PUBLIC_STORE_NAME || 'BEST CONTENT', telegram_link: process.env.NEXT_PUBLIC_TELEGRAM_LINK || 'https://t.me/biggselller', logo_url: '', hero_title: 'O desejo de escolher bem.', hero_text: 'Uma curadoria premium, apresentada com discrição. Descubra a coleção e fale connosco em privado.', hero_image: '' };
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return defaults;
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const db = createClient(url, key, { auth: { persistSession: false } });
    const { data } = await db.from('store_settings').select('key,value');
    if (data) for (const row of data) if (row.key in defaults) Object.assign(defaults, { [row.key]: row.value });
  } catch { /* Environment defaults remain usable. */ }
  return defaults;
}

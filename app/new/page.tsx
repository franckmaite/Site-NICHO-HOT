import { getProducts } from '@/lib/store';import Catalog from '@/components/Catalog';
export default async function NewPage(){const p=await getProducts();return <main className="container min-h-[60vh] py-14"><p className="eyebrow">Chegou agora</p><h1 className="mt-3 font-display text-5xl">Novidades</h1><div className="mt-8"><Catalog products={p} mode="new"/></div></main>}

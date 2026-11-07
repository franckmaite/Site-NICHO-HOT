import { getProducts } from '@/lib/store';import Catalog from '@/components/Catalog';
export default async function PopularPage(){const p=await getProducts();return <main className="container min-h-[60vh] py-14"><p className="eyebrow">Escolhas em destaque</p><h1 className="mt-3 font-display text-5xl">Mais populares</h1><div className="mt-8"><Catalog products={p} mode="popular"/></div></main>}

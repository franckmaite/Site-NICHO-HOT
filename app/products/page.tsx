import { getProducts } from '@/lib/store';
import Catalog from '@/components/Catalog';
export default async function ProductsPage(){const products=await getProducts();return <main className="container min-h-[60vh] py-14"><p className="eyebrow">A coleção</p><h1 className="mt-3 font-display text-5xl">Todos os produtos</h1><p className="mb-8 mt-4 max-w-2xl text-sm leading-6 text-muted">Descubra a seleção BEST CONTENT. Para informações de disponibilidade e aquisição, fale connosco em privado.</p><Catalog products={products}/></main>}

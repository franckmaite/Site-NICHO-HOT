import Link from 'next/link';
import { Heart, Menu, Search, Send } from 'lucide-react';
import { getStoreSettings } from '@/lib/store';
import MobileNav from '@/components/MobileNav';
export default async function Header() {
  const settings = await getStoreSettings();
  const links = [['Início','/'],['Todos os produtos','/products'],['Categorias','/categories'],['Novidades','/new'],['Mais populares','/popular'],['Sobre nós','/about'],['Contactos','/contacts']];
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-xl"><div className="container flex h-[76px] items-center justify-between gap-5"><Link href="/" className="shrink-0"><span className="block text-sm font-bold tracking-[.34em]">{settings.store_name}</span><span className="eyebrow text-[8px] tracking-[.42em]">PRIVATE COLLECTION</span></Link><nav className="hidden items-center gap-5 xl:flex">{links.map(([label, href])=><Link className="text-[10px] uppercase tracking-[.13em] text-white/75 transition hover:text-[#c6a36a]" key={href} href={href}>{label}</Link>)}</nav><div className="flex items-center gap-2"><Link aria-label="Pesquisar" href="/products" className="rounded-full border border-white/10 p-2.5 hover:border-[#c6a36a]"><Search size={16}/></Link><Link aria-label="Favoritos" href="/favorites" className="rounded-full border border-white/10 p-2.5 hover:border-[#c6a36a]"><Heart size={16}/></Link><a className="button hidden !min-h-10 !px-4 sm:inline-flex" href={settings.telegram_link} target="_blank" rel="noreferrer"><Send size={14}/> Telegram</a><MobileNav links={links}/></div></div></header>;
}

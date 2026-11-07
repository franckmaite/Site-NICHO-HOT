'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
type Props={links:string[][]};
export default function MobileNav({links}:Props){const [open,setOpen]=useState(false);return <div className="xl:hidden"><button aria-label="Abrir menu" onClick={()=>setOpen(!open)} className="rounded-full border border-white/10 p-2.5">{open?<X size={17}/>:<Menu size={17}/>}</button>{open&&<nav className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#0b0b0b] p-5 shadow-xl">{links.map(([label,href])=><Link onClick={()=>setOpen(false)} className="block border-b border-white/5 py-3 text-xs uppercase tracking-[.18em] text-white/80" key={href} href={href}>{label}</Link>)}</nav>}</div>}

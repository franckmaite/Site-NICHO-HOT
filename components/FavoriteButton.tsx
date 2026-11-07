'use client';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
const KEY='best-content-favorites';
export function readFavorites():string[]{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}}
export default function FavoriteButton({id}:{id:string}){const [saved,setSaved]=useState(false);useEffect(()=>setSaved(readFavorites().includes(id)),[id]);function toggle(){const next=readFavorites();const updated=next.includes(id)?next.filter(x=>x!==id):[...next,id];localStorage.setItem(KEY,JSON.stringify(updated));setSaved(!saved);window.dispatchEvent(new Event('favorites-change'));}return <button onClick={toggle} aria-label={saved?'Remover dos favoritos':'Adicionar aos favoritos'} className={`rounded-full border p-2 transition ${saved?'border-[#c6a36a] text-[#c6a36a]':'border-white/10 text-white/60 hover:text-[#c6a36a]'}`}><Heart size={16} fill={saved?'currentColor':'none'}/></button>}

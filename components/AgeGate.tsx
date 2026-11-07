'use client';
import { useEffect, useState } from 'react';
export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(localStorage.getItem('best-content-age-ok') !== 'yes'); }, []);
  if (!visible) return null;
  const accept = () => { localStorage.setItem('best-content-age-ok', 'yes'); setVisible(false); };
  return <div role="dialog" aria-modal="true" aria-labelledby="age-title" className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-5 backdrop-blur-md"><div className="panel w-full max-w-md p-8 text-center"><p className="eyebrow">Acesso reservado</p><h2 id="age-title" className="mt-3 font-display text-4xl">Tem 18 anos ou mais?</h2><p className="mt-4 text-sm leading-6 text-muted">Este website destina-se exclusivamente a adultos. Ao continuar, confirma que tem pelo menos 18 anos.</p><div className="mt-7 flex flex-col gap-3"><button className="button" onClick={accept}>Sim, tenho 18 anos ou mais</button><a className="button button-outline" href="https://www.google.com/">Sair</a></div></div></div>;
}

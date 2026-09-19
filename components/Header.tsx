"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '@/lib/site'

export function Header(){
  const [scrolled,setScrolled]=useState(false)
  const [open,setOpen]=useState(false)
  useEffect(()=>{ const on=()=>setScrolled(window.scrollY>20); on(); window.addEventListener('scroll',on,{passive:true}); return()=>window.removeEventListener('scroll',on)},[])
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500`}>
    <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-none border-0 px-4 py-3 transition-all duration-500 ${scrolled?'border-slate-200/80 bg-white/88 shadow-soft backdrop-blur-xl':'border-transparent bg-white/30 backdrop-blur-md'}`}>
      <Link href="/" className="relative z-10 flex items-center" onClick={()=>setOpen(false)} aria-label="Neighborly Work home">
        <Image src="/brand/neighborly-work-logo-horizontal-on-light.svg" alt="Neighborly Work" width={178} height={34} priority className="h-7 w-auto"/>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex">{nav.map(([label,href])=><Link key={label} href={href} className="text-[13px] font-semibold text-slate-700 transition hover:text-[#0894F0]">{label}</Link>)}</nav>
      <div className="hidden lg:block"><Link href="/contact" className="btn-primary px-5 py-3 text-sm">Request Service</Link></div>
      <button className="relative z-10 rounded-full p-2 lg:hidden" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close menu':'Open menu'}>{open?<X size={22}/>:<Menu size={22}/>}</button>
    </div>
    <AnimatePresence>{open&&<motion.div initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} className="mx-3 mt-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft lg:hidden">{nav.map(([label,href],i)=><motion.div key={label} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*.04}}><Link href={href} onClick={()=>setOpen(false)} className="block rounded-2xl px-4 py-4 text-base font-semibold text-slate-800 hover:bg-slate-50">{label}</Link></motion.div>)}<Link href="/contact" onClick={()=>setOpen(false)} className="btn-primary mt-2 w-full">Request Service</Link></motion.div>}</AnimatePresence>
  </header>
}

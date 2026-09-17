"use client"
import { motion } from 'framer-motion'
export function FadeUp({children,delay=0,className='' }:{children:React.ReactNode;delay?:number;className?:string}){return <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.7,ease:[.22,1,.36,1],delay}} className={className}>{children}</motion.div>}
export function ScaleIn({children,delay=0,className='' }:{children:React.ReactNode;delay?:number;className?:string}){return <motion.div initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.2}} transition={{duration:.75,ease:[.22,1,.36,1],delay}} className={className}>{children}</motion.div>}

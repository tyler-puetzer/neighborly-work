import { BrushCleaning, Leaf, Sprout, Truck, Wrench, ArrowUpRight } from 'lucide-react'
export function ServiceIcon({icon}:{icon:string}){const p={size:24,strokeWidth:1.7}; if(icon==='trash') return <BrushCleaning {...p}/>; if(icon==='grass') return <Leaf {...p}/>; if(icon==='sprout') return <Sprout {...p}/>; if(icon==='truck') return <Truck {...p}/>; return <Wrench {...p}/>}
export function Arrow(){return <ArrowUpRight size={18} strokeWidth={1.8}/>}

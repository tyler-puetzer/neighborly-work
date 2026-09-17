import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { site } from '@/lib/site'
export const metadata: Metadata={title:{default:'Neighborly Work | Outdoor & Property Services','template':'%s | Neighborly Work'},description:site.description,openGraph:{title:'Neighborly Work',description:site.description,siteName:'Neighborly Work',images:['/brand/og-neighborly-works-1200x630.png'],type:'website'},icons:{icon:'/brand/favicon-512.png',apple:'/brand/apple-touch-icon-180.png'},robots:{index:true,follow:true}}
const jsonLd={"@context":"https://schema.org","@type":"Organization",name:site.name,areaServed:site.serviceArea,description:site.description,}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/><Analytics/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp, ScaleIn } from '@/components/Motion'
import { ServiceIcon, Arrow } from '@/components/Icons'
import { services } from '@/lib/site'

export const metadata = {
  title: 'Services',
  description: 'Outdoor and property services offered by Neighborly Work in Central North Carolina.',
}

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="section-pad bg-[#f7fafc]">
        <div className="container-nw">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <FadeUp>
              <div>
                <div className="eyebrow text-[#0894F0]">Services</div>
                <h1 className="display mt-4 text-5xl font-bold sm:text-7xl">Outdoor work,<br />done with care.</h1>
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="max-w-2xl text-lg leading-8 text-[#5A6678]">Neighborly Work provides hands-on outdoor and property services in Central North Carolina, with a focus on quality work, clear communication, and treating every property with respect.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-nw">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <FadeUp key={service.title} delay={index * 0.05}>
                <article className="service-card h-full">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef8ff] text-[#0894F0]">
                      <ServiceIcon icon={service.icon} />
                    </div>
                    <Arrow />
                  </div>
                  <div className="eyebrow mt-8 text-slate-400">{service.eyebrow}</div>
                  <h2 className="mt-2 text-2xl font-bold">{service.title}</h2>
                  <p className="mt-3 leading-7 text-[#5A6678]">{service.blurb}</p>
                  <Link href="/contact" className="mt-7 inline-flex items-center font-semibold text-[#0894F0] hover:text-[#0b77bd]">Ask about this service <ArrowRight size={16} className="ml-2" /></Link>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0B1220] text-white">
        <div className="container-nw">
          <ScaleIn>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 sm:p-12">
              <div className="eyebrow text-[#63C400]">Need something else?</div>
              <h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Tell us the job.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">Neighborly Work is built around hands-on outdoor and property work. Describe what you need and we can determine whether it fits the services we offer.</p>
              <Link href="/contact" className="btn-primary mt-8 bg-white text-[#0B1220] hover:bg-slate-100">Get in Contact <ArrowRight size={18} className="ml-2" /></Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </main>
  )
}

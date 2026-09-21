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
  const orderedServices = [...services]
  const patioIndex = orderedServices.findIndex(service => service.slug === 'patio-building')
  if (patioIndex >= 0) {
    const [patio] = orderedServices.splice(patioIndex, 1)
    const decorationsIndex = orderedServices.findIndex(service => service.slug === 'decorations-light-hanging')
    orderedServices.splice(decorationsIndex >= 0 ? decorationsIndex : orderedServices.length, 0, patio)
  }
  return (
    <main className="pt-32">
      <section className="section-pad">
        <div className="container-nw">
          <div className="space-y-6">
            {orderedServices.map((service, index) => (
              <FadeUp key={service.title} delay={index * 0.04}>
                <article className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-soft">
                  <div className="grid lg:grid-cols-[.9fr_1.1fr]">
                    <div className="relative min-h-[260px] overflow-hidden lg:min-h-[340px]">
                      <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                      <div className="flex items-start justify-between gap-6">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eef8ff] text-[#0894F0]">
                          <ServiceIcon icon={service.icon} />
                        </div>
                        <Arrow />
                      </div>
                      <div className="eyebrow mt-7 text-slate-400">{service.eyebrow}</div>
                      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{service.title}</h2>
                      <p className="mt-4 text-lg leading-8 text-[#5A6678]">{service.blurb}</p>
                      <p className="mt-3 leading-7 text-[#5A6678]">{service.detail}</p>
                      <Link href="/contact" className="mt-7 inline-flex items-center font-semibold text-[#0894F0] hover:text-[#0b77bd]">Ask about this service <ArrowRight size={16} className="ml-2" /></Link>
                    </div>
                  </div>
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

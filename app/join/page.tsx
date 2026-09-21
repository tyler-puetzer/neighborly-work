import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FadeUp, ScaleIn } from '@/components/Motion'

export const metadata = {
  title: 'Join Us',
  description: 'Learn about working with Neighborly Work or building a local Neighborly Work business.',
}

const expectations = [
  'Take pride in the work.',
  'Treat customers with respect and communicate clearly.',
  'Be willing to get your hands dirty.',
  'Learn how the business works, not just the task itself.',
]

export default function JoinPage() {
  return (
    <main className="pt-32">
      <section className="section-pad">
        <div className="container-nw">
          <div className="grid gap-6 lg:grid-cols-2">
            <ScaleIn>
              <div id="work" className="h-full rounded-[2.5rem] bg-[#0B1220] p-8 text-white sm:p-10">
                <div className="eyebrow text-white/45">Work with Neighborly Work</div>
                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Start by doing the work.</h2>
                <p className="mt-5 leading-8 text-white/65">We are accepting people who want to work, learn, and contribute. The goal is not just to complete a job; it is to build habits around service, responsibility, communication, and entrepreneurship.</p>
                <div className="mt-8 space-y-4">
                  {expectations.map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#63C400] text-[#0B1220]"><Check size={15} strokeWidth={3} /></div>
                      <div className="text-white/80">{item}</div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary mt-9 bg-white text-[#0B1220] hover:bg-slate-100">Ask About Working <ArrowRight size={18} className="ml-2" /></Link>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.08}>
              <div id="franchise" className="h-full rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
                <div className="eyebrow text-[#0894F0]">Build with Neighborly Work</div>
                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Build a local operation.</h2>
                <p className="mt-5 leading-8 text-[#5A6678]">The long-term vision includes people operating local Neighborly Work businesses with access to practical resources, materials, marketing knowledge, and networking.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {['Materials', 'Marketing knowledge', 'Networking', 'Business education'].map((item) => (
                    <div key={item} className="rounded-2xl bg-[#f7fafc] p-5 font-semibold">{item}</div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-6 text-[#5A6678]">Neighborly Work is currently operating in Central North Carolina while keeping a national expansion vision.</p>
                <Link href="/contact" className="btn-secondary mt-7">Ask About Franchising <ArrowRight size={18} className="ml-2" /></Link>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>
    </main>
  )
}

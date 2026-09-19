import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight, Check, Globe2, Handshake, Sparkles, Users, ShieldCheck } from 'lucide-react'
import { FadeUp, ScaleIn } from '@/components/Motion'
import { ServiceIcon, Arrow } from '@/components/Icons'
import { BeforeAfter } from '@/components/BeforeAfter'
import { services } from '@/lib/site'

export default function Home(){return <main>
<section className="hero-section relative overflow-hidden">
  <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_12%,rgba(8,148,240,.18),transparent_28%),radial-gradient(circle_at_10%_65%,rgba(99,196,0,.08),transparent_30%)]"/>
  <div className="absolute inset-0 -z-10 opacity-70 grid-fade"/>
  <div className="container-nw hero-container">
    <div className="grid h-full items-start lg:grid-cols-[1.05fr_.95fr]">
      <div className="relative z-10 hero-copy">
        <FadeUp><div className="eyebrow text-[#0894F0]">Expanding across Central North Carolina</div></FadeUp>
        <FadeUp delay={.06}><h1 className="display mt-5 max-w-5xl text-5xl font-bold leading-[.96] sm:text-6xl lg:text-8xl">Neighborly<br/><span className="text-[#0894F0]">Work</span></h1></FadeUp>
        <FadeUp delay={.12}><p className="mt-7 max-w-xl text-lg leading-8 text-[#5A6678] sm:text-xl">Neighborly Work handles the dirty outdoor and property jobs that need to be done; while building a pathway for young people to learn how to run a business.</p></FadeUp>
        <FadeUp delay={.18}><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="btn-primary">Request Service <ArrowRight size={18} className="ml-2"/></Link><Link href="/join" className="btn-secondary">Work or Franchise With Us</Link></div></FadeUp>
      </div>
      <ScaleIn delay={.12} className="hero-image-column">
        <div className="hero-photo-wrap">
          <img src="https://images.foxtv.com/static.fox26houston.com/www.fox26houston.com/content/uploads/2023/06/1280/720/Screenshot-2023-06-22-183843.jpg?ve=1&tl=1" alt="Outdoor property work" className="hero-photo"/>
          <div className="hero-photo-fade"/>
        </div>
      </ScaleIn>
    </div>
  </div>
</section>

<section className="section-pad border-y border-slate-100 bg-white"><div className="container-nw"><div className="section-heading-center"><div className="eyebrow text-[#0894F0]">What we do</div><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">The work is simple.<br/>The standard is not.</h2></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=><FadeUp key={s.title} delay={i*.05}><Link href="/services" className="service-card group block" style={{backgroundImage:'none'} as CSSProperties}><div className="service-card-image" style={{backgroundImage:'url(' + s.image + ')'}}/><div className="service-card-content"><div className="flex items-start justify-between"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef8ff] text-[#0894F0] transition-colors group-hover:bg-white/15 group-hover:text-white"><ServiceIcon icon={s.icon}/></div><Arrow/></div><div className="eyebrow mt-7 text-slate-400">{s.eyebrow}</div><h3 className="mt-2 text-xl font-bold">{s.title}</h3><p className="mt-2 text-sm leading-6 text-[#5A6678]">{s.blurb}</p></div></Link></FadeUp>)}</div></div></section>

<section id="contact-quick" className="section-pad border-y border-slate-100 bg-[#f7fafc]">
  <div className="container-nw">
    <div className="rounded-[2.5rem] bg-white border border-slate-200 p-7 shadow-sm sm:p-10">
      <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="eyebrow text-[#0894F0]">Get in touch</div>
          <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">Need something done?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#5A6678]">Tell us what you need. We’ll get back to you and figure out the best way to help.</p>
        </div>
        <Link href="/contact" className="btn-primary whitespace-nowrap">Request Service <ArrowRight size={18} className="ml-2"/></Link>
      </div>
    </div>
  </div>
</section>

<section id="mission-story" className="section-pad bg-[#f7fafc]">
  <div className="container-nw">
    <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
      <FadeUp>
        <div className="mission-logo-wrap">
          <img src="/brand/neighborly-works-logo-stacked-on-light.svg" alt="Neighborly Work" className="mission-logo"/>
        </div>
      </FadeUp>
      <FadeUp delay={.08}>
        <div>
          <div className="eyebrow text-[#0894F0]">Our Mission</div>
          <h2 className="display mt-4 text-4xl font-bold sm:text-5xl">More Than A Job</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5A6678]">Neighborly Work was founded in 2026 by two teenagers with a bigger goal than making extra money. We want to make a real difference in our communities by giving young people a chance to learn how business actually works.</p>
          <p className="mt-4 max-w-2xl leading-7 text-[#5A6678]">Most places do not hire middle schoolers, but we believe they have potential too. Instead of spending their first working years only learning how to work a shift, they can learn to serve customers, communicate, solve problems, take pride in their work, and build something of their own.</p>
          <p className="mt-4 max-w-2xl leading-7 text-[#5A6678]">We started small and have grown our team across Wake County and into Franklin County. The long-term vision is to take the same opportunity across the country and help cultivate the business leaders of tomorrow.</p>
        </div>
      </FadeUp>
    </div>
  </div>
</section>

<section className="section-pad bg-[#0B1220] text-white"><div className="container-nw"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><FadeUp><div><div className="eyebrow text-[#63C400]">Before / after</div><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Small details make a property feel handled.</h2><p className="mt-5 max-w-md text-white/60 leading-7">A premium service brand should show its work. This is a placeholder comparison component ready for your real project photography.</p></div></FadeUp><FadeUp delay={.08}><BeforeAfter before="A job that needs attention" after="A property that feels ready" label="Placeholder • swap with real photos"/></FadeUp></div></div></section>



<section id="mission" className="section-pad bg-[#f6fbfe]"><div className="container-nw"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><FadeUp><div><div className="eyebrow text-[#0894F0]">Impact & mission</div><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Make the work good. Make the opportunity real.</h2></div></FadeUp><div className="grid gap-4 sm:grid-cols-2">{[['Service','Customers get excellent work and straightforward communication.'],['Materials','People building a local operation get the practical resources to start.'],['Marketing','Learn how to find customers, tell the story, and grow demand.'],['Networking','Build relationships with other operators and people who know the work.']].map(([t,d],i)=><FadeUp key={t} delay={i*.06}><div className="rounded-[2rem] border border-slate-200 bg-white p-6"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0B1220] text-white">{i===0?<ShieldCheck size={21}/>:i===1?<Sparkles size={21}/>:i===2?<Globe2 size={21}/>:<Handshake size={21}/>}</div><h3 className="mt-6 text-xl font-bold">{t}</h3><p className="mt-2 leading-7 text-[#5A6678]">{d}</p></div></FadeUp>)}</div></div><FadeUp delay={.12}><div className="mt-10 rounded-[2.5rem] bg-[#0B1220] p-7 sm:p-10"><div className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-4xl">“Do the work. Learn the business. Build something that is yours.”</div><div className="mt-4 text-sm text-white/50">Core brand idea — not a customer testimonial.</div></div></FadeUp></div></section>

<section id="join" className="section-pad"><div className="container-nw"><div className="rounded-[2.8rem] bg-[linear-gradient(135deg,#0894F0,#0b77bd)] p-8 text-white sm:p-12 lg:p-16"><div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end"><FadeUp><div><div className="eyebrow text-white/60">Join the build</div><h2 className="display mt-4 text-4xl font-bold sm:text-6xl">Work with us.<br/>Or build with us.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Neighborly Work is actively building a team and a path for people who want to operate a local business with the Neighborly Work name and support behind it.</p></div></FadeUp><FadeUp delay={.08}><div className="grid gap-3"><Link href="/join#work" className="btn-secondary border-white/20 bg-white text-[#0B1220]">Apply to Work <ArrowRight size={18} className="ml-2"/></Link><Link href="/join#franchise" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/15">Franchise With Us <ArrowRight size={18} className="ml-2"/></Link></div></FadeUp></div></div></div></section>

<section id="reviews" className="section-pad bg-white"><div className="container-nw"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><FadeUp><div><div className="eyebrow text-[#0894F0]">Reviews</div><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Let the work speak.</h2><p className="mt-4 max-w-xl text-[#5A6678]">This section is intentionally ready for verified customer feedback. Do not publish invented testimonials.</p></div></FadeUp><Link href="/contact#review" className="btn-secondary">Leave a Review</Link></div><div className="mt-10 grid gap-4 md:grid-cols-3">{[['Verified feedback','Customer testimonial placeholder','Replace with real review + first name/last initial.'],['Recent project','Customer testimonial placeholder','Add service type + date when available.'],['Neighborhood partner','Customer testimonial placeholder','Only use after receiving permission.']].map(([a,b,c],i)=><FadeUp key={a} delay={i*.06}><div className="rounded-[2rem] border border-dashed border-slate-300 p-7"><div className="eyebrow text-slate-400">{a}</div><div className="mt-5 text-lg font-semibold text-slate-500">“{b}”</div><div className="mt-4 text-sm leading-6 text-[#5A6678]">{c}</div></div></FadeUp>)}</div></div></section>

<section className="section-pad border-t border-slate-100 bg-[#f7fafc]"><div className="container-nw"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><FadeUp><div><div className="eyebrow text-[#0894F0]">Ready when you are</div><h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Tell us what needs done.</h2><p className="mt-5 max-w-md leading-7 text-[#5A6678]">Get in touch for service, partnerships, employment, or franchise interest.</p></div></FadeUp><FadeUp delay={.08}><div className="rounded-[2.3rem] border border-slate-200 bg-white p-7 shadow-soft sm:p-9"><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-slate-50 p-5"><div className="eyebrow text-slate-400">Service area</div><div className="mt-2 font-bold">Central North Carolina</div></div><div className="rounded-2xl bg-slate-50 p-5"><div className="eyebrow text-slate-400">Email</div><div className="mt-2 font-bold">hello@neighborlywork.com</div></div></div><Link href="/contact" className="btn-primary mt-4 w-full">Get in Contact <ArrowRight size={18} className="ml-2"/></Link><div className="mt-4 text-center text-xs text-slate-400">Phone currently shown as a placeholder in this prototype.</div></div></FadeUp></div></div></section>
</main>}

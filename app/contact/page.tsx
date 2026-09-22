import { FadeUp, ScaleIn } from '@/components/Motion'

export const metadata = {
  title: 'Contact',
  description: 'Contact Neighborly Work for service, partnerships, employment, or franchise interest in Central North Carolina.',
}

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="section-pad">
        <div className="container-nw">
          <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
            <FadeUp>
              <div className="space-y-4">
                <div className="rounded-[2rem] bg-[#0B1220] p-7 text-white">
                  <div className="eyebrow text-white/45">Service area</div>
                  <div className="mt-3 text-2xl font-bold">Central North Carolina</div>
                  <p className="mt-3 leading-7 text-white/60">This is the current operating area. The company has a broader expansion vision.</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-7">
                  <div className="eyebrow text-[#0894F0]">Contact details</div>
                  <p className="mt-4 leading-7 text-[#5A6678]">Phone and email details are intentionally not published until the official company contact information is confirmed.</p>
                </div>
              </div>
            </FadeUp>

            <ScaleIn>
              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-soft sm:p-9">
                <div className="eyebrow text-[#0894F0]">Get a quote / get in touch</div>
                <h2 className="mt-4 text-3xl font-bold">Request form</h2>
                <p className="mt-3 text-sm leading-6 text-[#5A6678]">Tell us what you need and the form will send your request directly to our service email.</p>
                <form className="mt-8 grid gap-5" action="https://formsubmit.co/service.neighborly.work@gmail.com" method="POST">
                  <input type="hidden" name="_subject" value="New Neighborly Work Service Request" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <label className="field"><span>Name</span><input type="text" name="name" placeholder="Your name" required /></label>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="field"><span>Email</span><input type="email" name="email" placeholder="you@example.com" required /></label>
                    <label className="field"><span>Phone</span><input type="tel" name="phone" placeholder="Phone number" /></label>
                  </div>
                  <label className="field"><span>Service needed</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Trash Can Cleaning</option><option>Lawn Mowing</option><option>Landscaping</option><option>Junk Removal</option><option>Other Outdoor & Property Services</option><option>Employment</option><option>Franchise / Local Business</option></select></label>
                  <label className="field"><span>Message</span><textarea name="message" rows={5} placeholder="Tell us what you need..." required /></label>
                  <button type="submit" className="btn-primary w-full">Send Request</button>
                </form>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      <section id="review" className="section-pad border-t border-slate-100 bg-[#f7fafc]">
        <div className="container-nw">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="eyebrow text-[#0894F0]">Reviews</div>
              <h2 className="display mt-4 text-4xl font-bold sm:text-5xl">Customer feedback</h2>
              <p className="mt-5 leading-7 text-[#5A6678]">We appreciate every customer who takes the time to share their experience.</p>
              <a href="https://share.google/Nr0gD2OrVcSbvxVj7" target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 inline-flex">Leave a Google Review</a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}

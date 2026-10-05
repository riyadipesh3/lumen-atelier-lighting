import { useEffect, useRef, useState, type ReactNode } from 'react'

/* IntersectionObserver reveal. No scroll listeners anywhere on this page. */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const RANGE = [
  {
    name: 'Oris',
    part: 'LA-1140',
    line: 'Recessed gallery washer, 120 mm cut-out',
    body: 'Asymmetric 42 degree throw for picture rails and joinery. Louvre and museum grade optics on a single addressable channel.',
    lumens: '1 640',
    kelvin: '3000 K',
    cri: 'CRI 97',
    tm30: 'Rf 94',
    img: 'https://picsum.photos/seed/lumenat-bunker-night/900/620',
    alt: 'Warm light raking across a timber plank wall',
  },
  {
    name: 'Skerry',
    part: 'LA-2086',
    line: 'Linear pendant, 1 240 mm, extruded graphite',
    body: 'For stair cores and hotel atria. Dims to a deeper warm at the foot of the curve so landings stay legible after dark.',
    lumens: '2 380',
    kelvin: '2700 K',
    cri: 'CRI 95',
    tm30: 'Rf 92',
    img: 'https://picsum.photos/seed/lumenat-hangar-timber/900/620',
    alt: 'A long underground concourse with a lit floor edge running back to an escalator',
  },
  {
    name: 'Mingulay',
    part: 'LA-3302',
    line: 'Track head, 42 W, 24 degree beam',
    body: 'Museum grade R9, specified where pigment, textile and skin tone have to sit in the same room without shifting.',
    lumens: '890',
    kelvin: '3500 K',
    cri: 'CRI 98',
    tm30: 'Rf 95',
    img: 'https://picsum.photos/seed/lumenat-gallery-lit/900/620',
    alt: 'A hard white beam picking performers out of a dark stage',
  },
  {
    name: 'Brae',
    part: 'LA-4415',
    line: 'Wall grazer, IP54, 6 W',
    body: 'Ground floors and stair soffits where the wall is older than the wiring. Runs on 0-10V with a local override at the head of the flight.',
    lumens: '310',
    kelvin: '3000 K',
    cri: 'CRI 93',
    tm30: 'Rf 90',
    img: 'https://picsum.photos/seed/lumenat-soffit-night/900/620',
    alt: 'Warm uplight washing the end wall of a brick hall',
  },
]

const TICKS = [
  { k: '2700 K', v: 'Hospitality, dining, stair cores' },
  { k: '3000 K', v: 'The gallery default' },
  { k: '3500 K', v: 'Paintings, textiles, print' },
  { k: '4000 K', v: 'Circulation, back of house' },
]

const MEASURED = [
  { k: 'TM-30 Rf', v: '94 at 3000 K, measured on a calibrated goniophotometer' },
  { k: 'TM-30 Rg', v: '101, so blues stay true against pigment' },
  { k: 'UGR', v: 'Under 16 across every occupied position' },
]

const PROJECTS = [
  {
    name: 'Gallery Two',
    place: 'Stornoway Museum',
    kind: 'Museum',
    body: 'Eighteen Mingulay heads on a single DALI-2 line, tuned to 3500 K after the conservator rejected a colder scheme on the textile collection.',
    spec: 'DALI-2, 18 addresses, 3500 K at 60 per cent',
    img: 'https://picsum.photos/seed/lumenat-catwalk-concrete/1200/900',
    alt: 'A dark room with a tall multi-pane window looking out onto trees',
  },
  {
    name: 'Main hall',
    place: 'Pier Arts Centre',
    kind: 'Gallery',
    body: 'Coved cove detail at 2400 mm, kept off the concrete soffit so the pour stays visible.',
    spec: 'Two runs, 0-10V, 2700 K to 4000 K',
    img: 'https://picsum.photos/seed/lumenat-loggia-fog/900/600',
    alt: 'A tall pale concrete wall under flat overcast light',
  },
  {
    name: 'Guest wing',
    place: 'Cannaferry House',
    kind: 'Hospitality',
    body: 'Skerry pendants in nine rooms, commissioned as a matched set with a warm dimming floor at 1 500 K.',
    spec: 'Nine pendants, dimmable to 1 500 K',
    img: 'https://picsum.photos/seed/lumenat-crate-timber/900/600',
    alt: 'Looking up the length of a curved glass facade into an overcast sky',
  },
  {
    name: 'Station hall',
    place: 'Corpach Lifeboat Station',
    kind: 'Public',
    body: 'Brae grazers on the original stone, replaced with warm 3000 K LEDs and a local override at each door.',
    spec: 'Six grazers, IP54, local override per door',
    img: 'https://picsum.photos/seed/lumenat-doorway-glass/1400/560',
    alt: 'A dark angular building corner with lit windows against the night',
  },
]

const PROCESS = [
  {
    n: '01',
    title: 'Survey',
    body: 'We measure the room before we specify anything. Surface reflectance, mounting heights and daylight all decide what comes later.',
    spec: 'Three visits, one daylight record',
  },
  {
    n: '02',
    title: 'Scheme',
    body: 'Circuit by circuit, with the control gear named and part numbers written down. A contractor can price it without ringing us.',
    spec: 'Drawn to BS EN 12464-1',
  },
  {
    n: '03',
    title: 'Prototype',
    body: 'One room, one finish, one dimming curve, on site while the rest of the building is still being lit badly.',
    spec: 'Two to three weeks on site',
  },
  {
    n: '04',
    title: 'Handover',
    body: 'As-built scenes, the DALI address list, and an afternoon with the house manager rather than the contractor.',
    spec: 'Addresses handed over per fitting',
  },
]

const TYPES = ['Museum or gallery', 'Hospitality', 'Civic or public', 'Residential']

function ArrowGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2 11L11 2M11 2H4.2M11 2v6.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim().length < 2) {
      setError('We need a name to put the survey under.')
      return
    }
    if (!email.includes('@') || email.length < 6) {
      setError('That address will not reach you. Check it and send again.')
      return
    }
    if (!type) {
      setError('Tell us what kind of building this is.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <>
      <header className="acrylic-thin sticky top-0 z-30">
        <div className="shell flex h-18 max-h-20 items-center justify-between py-3">
          <a href="#top" className="flex items-baseline gap-2.5">
            <span className="font-display text-[1.35rem] font-medium tracking-[-0.03em]">
              Lumen Atelier
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            <a href="#range" className="link-underline text-sm text-mist-dim hover:text-mist">
              Range
            </a>
            <a href="#temperature" className="link-underline text-sm text-mist-dim hover:text-mist">
              Colour temperature
            </a>
            <a href="#projects" className="link-underline text-sm text-mist-dim hover:text-mist">
              Projects
            </a>
            <a href="#process" className="link-underline text-sm text-mist-dim hover:text-mist">
              Process
            </a>
          </nav>
          <a href="#book" className="btn btn-primary !py-2 !text-sm">
            Book a survey
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero: split. Copy sits in a heavy cast panel so the refraction edge
            and the matte tint are the first thing on screen. */}
        <section className="shell flex min-h-[100dvh] items-center pt-24 pb-16">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <div className="acrylic-deep px-7 py-10 md:px-11 md:py-12">
                <p className="micro mb-6">Architectural lighting, Glasgow</p>
                <h1 className="text-[clamp(2.15rem,4.1vw,3.5rem)] leading-[1.03] text-mist">
                  Light is drawn before the first fix.
                </h1>
                <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-[1.65] text-mist-dim">
                  We specify lighting for museums, galleries and hotels, then draw it down to the
                  millikelvin.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3.5">
                  <a href="#range" className="btn btn-primary">
                    See the collection
                    <span className="btn-icon">
                      <ArrowGlyph />
                    </span>
                  </a>
                  <a href="#book" className="btn btn-ghost">
                    Book a survey
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="overflow-hidden">
                <img
                  src="https://picsum.photos/seed/lumenat-vault-lit/900/640"
                  alt="Daylight entering a stone room through two windows, a person standing in the shaft"
                  width={900}
                  height={640}
                  className="h-72 w-full object-cover sm:h-96 lg:h-[30rem]"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Range: staggered asymmetric two column grid, no images on the cards
            so the spec reads before the picture does. */}
        <section id="range" className="shell py-24 md:py-32">
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(2rem,3.9vw,3.1rem)] text-mist">
              Four luminaires, specified properly.
            </h2>
            <p className="mt-5 max-w-[58ch] leading-[1.7] text-mist-dim">
              Everything in the range is repairable in place and available in the graphites and paint
              finishes a listed building will accept.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {RANGE.map((f, i) => (
              <Reveal key={f.part} delay={i * 70} className={i % 2 === 1 ? 'md:mt-14' : ''}>
                <article className="acrylic flex h-full flex-col gap-6 p-7 md:p-8">
                  <div className="flex items-baseline justify-between gap-5">
                    <h3 className="text-[1.6rem] text-mist">{f.name}</h3>
                    <span className="catalogue shrink-0 text-tungsten">{f.part}</span>
                  </div>

                  <div className="overflow-hidden">
                    <img
                      src={f.img}
                      alt={f.alt}
                      width={900}
                      height={620}
                      loading="lazy"
                      className="h-40 w-full object-cover"
                    />
                  </div>

                  <p className="catalogue">{f.line}</p>
                  <p className="flex-1 text-[0.9375rem] leading-[1.65] text-mist-dim">{f.body}</p>

                  <div>
                    <div className="kelvin-ramp" aria-hidden="true" />
                    <div className="mt-2.5 flex items-baseline justify-between gap-4">
                      <span className="font-mono text-xs text-tungsten">{f.kelvin}</span>
                      <span className="font-mono text-xs text-mist-dim">{f.tm30}</span>
                    </div>
                  </div>

                  <dl className="flex items-baseline gap-8 border-t border-white/12 pt-4">
                    <div>
                      <dt className="catalogue">Output</dt>
                      <dd className="mt-1 font-display text-xl text-mist">{f.lumens} lm</dd>
                    </div>
                    <div>
                      <dt className="catalogue">Colour</dt>
                      <dd className="mt-1 font-mono text-sm text-mist-dim">{f.cri}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Colour temperature: full width ramp and tick scale, then an
            asymmetric copy pair. Not a card grid. */}
        <section id="temperature" className="shell py-24 md:py-32">
          <Reveal>
            <p className="micro mb-6">Photometry, measured rather than estimated</p>
            <h2 className="max-w-[20ch] text-[clamp(2rem,3.9vw,3.1rem)] text-mist">
              We set the colour temperature in the room, not on a screen.
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-14">
              <div className="kelvin-ramp !h-3" aria-hidden="true" />
              <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {TICKS.map((t) => (
                  <div key={t.k} className="border-t border-white/14 pt-4">
                    <dt className="font-display text-[1.5rem] leading-none text-tungsten">{t.k}</dt>
                    <dd className="mt-2.5 text-sm leading-[1.6] text-mist-dim">{t.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <Reveal>
              <p className="max-w-[60ch] leading-[1.7] text-mist-dim">
                Every scheme is commissioned with a measurement at the position the client will
                actually sit in. Two hundred and seventy kelvin under daylight is fine on paper and
                wrong at four o'clock in March. We bring a meter, we bring the fabric samples, and we
                write the numbers into the handover pack so the next contractor cannot quietly
                replace the lamps with something cheaper.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <dl className="acrylic flex flex-col gap-5 p-7">
                {MEASURED.map((m) => (
                  <div key={m.k} className="border-t border-white/12 pt-4 first:border-t-0 first:pt-0">
                    <dt className="catalogue text-tungsten">{m.k}</dt>
                    <dd className="mt-2 text-sm leading-[1.6] text-mist-dim">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Projects: bento, four cells filling a two column grid exactly.
            One tall left cell, two stacked right cells, one wide footer cell. */}
        <section id="projects" className="shell py-24 md:py-32">
          <Reveal>
            <h2 className="max-w-[16ch] text-[clamp(2rem,3.9vw,3.1rem)] text-mist">
              Four rooms we can talk about in detail.
            </h2>
            <p className="mt-5 max-w-[54ch] leading-[1.7] text-mist-dim">
              Museum, gallery, hotel and civic work, all of it handed over with as-built scenes.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 80}
                className={`h-full ${
                  i === 0 ? 'md:row-span-2' : i === 3 ? 'md:col-span-2' : ''
                }`}
              >
                <article
                  className={`acrylic flex h-full overflow-hidden ${
                    i === 3 ? 'flex-col md:flex-row' : 'flex-col'
                  }`}
                >
                  <div
                    className={`overflow-hidden ${i === 0 ? 'md:flex md:flex-col md:flex-1' : ''} ${
                      i === 3 ? 'md:w-[38%]' : ''
                    }`}
                  >
                    <img
                      src={p.img}
                      alt={p.alt}
                      width={i === 0 ? 1200 : i === 3 ? 1400 : 900}
                      height={i === 0 ? 900 : i === 3 ? 560 : 600}
                      loading="lazy"
                      className={`w-full object-cover ${
                      i === 0 ? 'h-52 md:h-full md:flex-1' : i === 3 ? 'h-40 md:h-full' : 'h-52'
                    }`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-7 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-xl text-mist">{p.name}</h3>
                      <span className="catalogue shrink-0 text-tungsten">{p.kind}</span>
                    </div>
                    <p className="catalogue">{p.place}</p>
                    <p className="flex-1 text-[0.9375rem] leading-[1.65] text-mist-dim">{p.body}</p>
                    <p className="catalogue border-t border-white/12 pt-4">{p.spec}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process: single column timeline on a hairline rail. */}
        <section id="process" className="shell py-24 md:py-32">
          <Reveal>
            <h2 className="max-w-[17ch] text-[clamp(2rem,3.9vw,3.1rem)] text-mist">
              Four steps, and none of them are optional.
            </h2>
          </Reveal>

          <ol className="mt-14 border-t border-white/12">
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <li className="grid gap-4 border-b border-white/12 py-8 md:grid-cols-[3rem_0.9fr_1.5fr_0.7fr] md:items-baseline md:gap-8">
                  <span className="font-mono text-sm text-tungsten">{s.n}</span>
                  <h3 className="text-xl text-mist md:text-[1.4rem]">{s.title}</h3>
                  <p className="max-w-[54ch] text-[0.9375rem] leading-[1.65] text-mist-dim">{s.body}</p>
                  <p className="catalogue md:text-right">{s.spec}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Contact: centred narrow slab, details in a row beneath. */}
        <section id="book" className="shell pb-24 md:pb-32">
          <Reveal>
            <div className="mx-auto max-w-[46rem] text-center">
              <h2 className="text-[clamp(2rem,3.9vw,3.1rem)] text-mist">Book a survey.</h2>
              <p className="mx-auto mt-5 max-w-[52ch] leading-[1.7] text-mist-dim">
                Two hours on site is usually enough to know whether a scheme is worth drawing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <form
              className="acrylic-deep mx-auto mt-12 flex max-w-[46rem] flex-col gap-5 p-7 md:p-10"
              onSubmit={submit}
              noValidate
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-mist">
                  Name for the survey
                </label>
                <input
                  id="name"
                  name="name"
                  className="field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Eilidh Craik"
                  aria-invalid={error.includes('name') ? 'true' : 'false'}
                  aria-describedby="name-hint"
                />
                <p id="name-hint" className="catalogue !text-[0.6875rem]">
                  The project lead who will meet us on site
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-mist">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="eilidh@yourstudio.com"
                  aria-invalid={error.includes('address') ? 'true' : 'false'}
                  aria-describedby="email-hint"
                />
                <p id="email-hint" className="catalogue !text-[0.6875rem]">
                  Where the daylight record and costs go
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-sm text-mist">
                  Building type
                </label>
                <select
                  id="type"
                  name="type"
                  className="field appearance-none"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  aria-invalid={error.includes('building') ? 'true' : 'false'}
                  aria-describedby="type-hint"
                >
                  <option value="">Select a type</option>
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <p id="type-hint" className="catalogue !text-[0.6875rem]">
                  Tells us which part of BS EN 12464-1 applies
                </p>
              </div>

              {error && (
                <p role="alert" className="text-sm text-tungsten">
                  {error}
                </p>
              )}

              {sent ? (
                <p
                  role="status"
                  className="acrylic px-5 py-4 text-sm leading-[1.6] text-mist"
                >
                  Thank you, {name.trim()}. We will hold two mornings for {type.toLowerCase()} and
                  email {email.trim()} once the meter is booked.
                </p>
              ) : (
                <button type="submit" className="btn btn-primary self-start">
                  Book a survey
                  <span className="btn-icon">
                    <ArrowGlyph />
                  </span>
                </button>
              )}
            </form>
          </Reveal>

          <Reveal delay={160}>
            <dl className="mx-auto mt-12 flex max-w-[46rem] flex-wrap justify-center gap-x-12 gap-y-5">
              {[
                ['Studio', '18 Berkeley Street, Glasgow G1 1XG'],
                ['Telephone', '0141 496 0338'],
                ['Drawing office', 'Mon to Thu, closed Friday'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="catalogue !text-[0.6875rem] uppercase tracking-[0.18em]">{k}</dt>
                  <dd className="mt-2 text-sm text-mist-dim">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>
      </main>

      <footer className="acrylic-thin">
        <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
          <div>
            <p className="font-display text-lg text-mist">Lumen Atelier</p>
            <p className="mt-3 max-w-[40ch] text-sm leading-[1.65] text-mist-dim">
              A lighting design practice working on museums, galleries and hotels across Scotland and
              the north of England.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
            <a href="#range" className="link-underline text-mist-dim hover:text-mist">
              Range
            </a>
            <a href="#temperature" className="link-underline text-mist-dim hover:text-mist">
              Colour temperature
            </a>
            <a href="#projects" className="link-underline text-mist-dim hover:text-mist">
              Projects
            </a>
          </nav>
          <div className="text-sm text-mist-dim">
            <p>18 Berkeley Street</p>
            <p className="mt-1">Glasgow G1 1XG</p>
            <a href="#book" className="link-underline mt-4 inline-block hover:text-mist">
              Book a survey
            </a>
          </div>
        </div>
        <div className="shell border-t border-white/10 py-7">
          <p className="font-mono text-[0.6875rem] text-mist-dim">
            Developed by{' '}
            <a href="https://thediyadevelopers.com" className="link-underline text-mist">
              Diya Developers
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

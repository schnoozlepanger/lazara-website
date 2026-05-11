export default function LazaraHomepage() {
  const pillars = [
    {
      title: 'Sleep',
      description:
        'Deep recovery, nervous system regulation, and routines that restore energy.',
      image:
        'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Move',
      description:
        'Strength, mobility, cardiovascular health, and performance optimisation.',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Recover',
      description:
        'Sauna, cold exposure, stress management, and cellular recovery support.',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Eat',
      description:
        'Metabolic health, supplementation, hydration, and sustainable energy.',
      image:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Mind',
      description:
        'Clarity, focus, calmness, mindfulness, and cognitive performance.',
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const featuredCollections = [
    {
      title: 'Sleep Stack',
      subtitle: 'Magnesium, glycine, apigenin + deep sleep support',
    },
    {
      title: 'Recovery Protocol',
      subtitle: 'Electrolytes, hydration and inflammation support',
    },
    {
      title: 'Mental Clarity',
      subtitle: 'Focus and cognition supplements for modern life',
    },
  ];

  return (
    <div className="bg-[#f5f2eb] text-[#111111] min-h-screen font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f5f2eb]/80 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight lowercase">
            lazara
          </div>

          <nav className="hidden md:flex gap-8 text-sm tracking-wide uppercase text-black/70">
            <a href="#" className="hover:text-black transition">Shop</a>
            <a href="#" className="hover:text-black transition">Journal</a>
            <a href="#" className="hover:text-black transition">Protocols</a>
            <a href="#" className="hover:text-black transition">About</a>
          </nav>

          <button className="rounded-full border border-black/10 px-5 py-2 text-sm hover:bg-black hover:text-white transition">
            Account
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop"
              alt="Wellness lifestyle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-44">
            <div className="max-w-3xl">
              <div className="uppercase tracking-[0.3em] text-white/70 text-xs mb-5">
                Modern wellness, simplified
              </div>

              <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] text-white tracking-tight">
                Wellness built around how humans actually live.
              </h1>

              <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                Lazara combines premium supplements, recovery tools, and science-backed wellness protocols across sleep, movement, recovery, nutrition, and mental clarity.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-white text-black rounded-full px-7 py-4 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition">
                  Explore the shop
                </button>

                <button className="border border-white/40 text-white rounded-full px-7 py-4 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition">
                  Take the wellness quiz
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <div className="uppercase tracking-[0.25em] text-xs text-black/50 mb-4">
                The Lazara framework
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl leading-tight">
                Five pillars. One connected approach to feeling better.
              </h2>
            </div>

            <p className="max-w-xl text-black/60 leading-relaxed text-lg">
              Instead of overwhelming people with trends, Lazara focuses on the fundamentals that most impact energy, longevity, mood, recovery, and daily performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative rounded-[28px] overflow-hidden min-h-[480px] shadow-sm"
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <div className="text-3xl font-semibold mb-3 tracking-tight">
                    {pillar.title}
                  </div>

                  <p className="text-sm leading-relaxed text-white/80 mb-6">
                    {pillar.description}
                  </p>

                  <button className="text-xs uppercase tracking-[0.2em] border-b border-white/40 pb-1 hover:border-white">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#ece7de] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <div className="uppercase tracking-[0.25em] text-xs text-black/50 mb-3">
                  Featured collections
                </div>
                <h3 className="text-4xl font-semibold tracking-tight">
                  Daily essentials.
                </h3>
              </div>

              <button className="hidden md:block text-sm uppercase tracking-wide border-b border-black/20 pb-1">
                View all
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCollections.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-[30px] p-8 min-h-[320px] flex flex-col justify-between hover:-translate-y-1 transition shadow-sm"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-black/40 mb-5">
                      Lazara Protocol
                    </div>

                    <h4 className="text-3xl font-semibold tracking-tight mb-4">
                      {item.title}
                    </h4>

                    <p className="text-black/60 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-between">
                    <span className="text-sm text-black/40">From £39</span>

                    <button className="rounded-full bg-black text-white px-5 py-3 text-sm uppercase tracking-wide hover:opacity-90 transition">
                      Shop now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="uppercase tracking-[0.25em] text-xs text-black/50 mb-4">
              Education-led wellness
            </div>

            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
              Less noise. Better routines.
            </h3>

            <p className="text-lg text-black/65 leading-relaxed mb-6">
              Lazara blends premium products with clear, actionable education. The goal isn’t perfection — it’s helping people feel better consistently.
            </p>

            <p className="text-lg text-black/65 leading-relaxed mb-10">
              Expect evidence-backed supplements, daily protocols, longevity insights, and tools that genuinely fit into real life.
            </p>

            <button className="rounded-full border border-black/10 px-7 py-4 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition">
              Read the journal
            </button>
          </div>

          <div className="rounded-[32px] overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400&auto=format&fit=crop"
              alt="Healthy living"
              className="w-full h-[650px] object-cover"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 justify-between items-start">
          <div>
            <div className="text-2xl font-semibold lowercase mb-4">
              lazara
            </div>

            <p className="text-black/50 max-w-md leading-relaxed">
              Premium wellness products and performance routines designed around sleep, movement, recovery, nutrition, and mental clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-black/60">
            <div>
              <div className="font-medium text-black mb-4">Shop</div>
              <div className="space-y-3">
                <div>Supplements</div>
                <div>Protocols</div>
                <div>Bundles</div>
              </div>
            </div>

            <div>
              <div className="font-medium text-black mb-4">Learn</div>
              <div className="space-y-3">
                <div>Journal</div>
                <div>Longevity</div>
                <div>Sleep</div>
              </div>
            </div>

            <div>
              <div className="font-medium text-black mb-4">About</div>
              <div className="space-y-3">
                <div>Mission</div>
                <div>Science</div>
                <div>Community</div>
              </div>
            </div>

            <div>
              <div className="font-medium text-black mb-4">Follow</div>
              <div className="space-y-3">
                <div>Instagram</div>
                <div>TikTok</div>
                <div>YouTube</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

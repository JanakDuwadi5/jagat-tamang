<template>
  <main class="min-h-screen bg-cream overflow-x-hidden">
    <section
      class="relative min-h-[100svh] flex flex-col justify-end pb-12 sm:pb-16 md:pb-24 pt-28 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <div
          class="absolute inset-0 bg-cover bg-center md:bg-[center_35%] scale-105 transition-transform duration-1000"
          :style="{ backgroundImage: `url('/paintings/painting-4.jpg')` }"
        ></div>
        <div
          class="absolute inset-0"
          style="
            background: linear-gradient(
              to top,
              rgba(26, 26, 24, 0.96) 15%,
              rgba(26, 26, 24, 0.72) 55%,
              rgba(26, 26, 24, 0.45) 100%
            );
          "
        ></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-ink/75 backdrop-blur-md border border-gold/40 shadow-sm rounded-none"
          >
            <span class="w-2 h-2 rounded-full bg-gold"></span>
            <span
              class="font-sans text-cream text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase"
            >
              Visual Artist &amp; Painter
            </span>
          </div>

          <h1 class="display-title text-cream mb-6 leading-[0.95]">
            Jagat<br />
            <em class="italic font-light">Tamang</em>
          </h1>

          <p
            class="text-cream/90 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            Exploring cultural realism, Himalayan atmospheres, and expressive human emotion through
            over two decades of fine art practice.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <router-link to="/gallery" class="btn-ink w-full sm:w-auto justify-center">
              <span>Explore Complete Catalog</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="ml-1">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
            <router-link
              to="/contact?type=commission"
              class="btn-outline border-cream/50 text-cream hover:bg-cream hover:text-ink w-full sm:w-auto justify-center"
            >
              Commission Artwork
            </router-link>
          </div>
        </div>

        <div
          class="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cream/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-cream text-xs"
        >
          <div>
            <span class="eyebrow text-gold/90 block mb-1">Studio Base</span>
            <span class="font-sans text-cream/95 font-medium">Toronto, Canada</span>
          </div>
          <div>
            <span class="eyebrow text-gold/90 block mb-1">Experience</span>
            <span class="font-sans text-cream/95 font-medium">20+ Years Practice</span>
          </div>
          <div>
            <span class="eyebrow text-gold/90 block mb-1">Primary Mediums</span>
            <span class="font-sans text-cream/95 font-medium"
              >Oil &middot; Acrylic &middot; Charcoal</span
            >
          </div>
          <div>
            <span class="eyebrow text-gold/90 block mb-1">Focus</span>
            <span class="font-sans text-cream/95 font-medium">Realism &amp; Cultural Heritage</span>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex absolute bottom-8 right-12 z-10 flex-col items-center gap-2">
        <span class="eyebrow text-cream/60 [writing-mode:vertical-rl]">Scroll</span>
        <div class="w-px h-12 bg-cream/20 relative overflow-hidden">
          <div class="absolute top-0 w-full h-full bg-cream/70 animate-scroll-line"></div>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-cream border-b border-ink/10">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-12 sm:mb-16 md:mb-20">
          <p class="eyebrow text-warm-gray mb-3">Curatorial Focus</p>
          <h2 class="section-heading text-ink">Three Pillars of<br /><em>Artistic Vision</em></h2>
          <p class="text-warm-gray mt-4 text-sm sm:text-base leading-relaxed">
            Rather than confining himself to a single subject, Jagat Tamang balances three distinct
            thematic bodies of work, each unified by observational realism and deep emotional
            resonance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div
            class="group flex flex-col justify-between p-6 sm:p-8 bg-white/70 border border-ink/10 hover:border-ink/30 transition-all duration-300 shadow-sm"
          >
            <div>
              <div
                class="aspect-[4/3] sm:aspect-[3/4] overflow-hidden mb-6 bg-warm-gray/10 relative"
              >
                <img
                  src="/paintings/painting-6.jpg"
                  alt="Traditional Portraiture by Jagat Tamang"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  class="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-widest uppercase eyebrow text-ink"
                >
                  4 Artworks
                </span>
              </div>
              <span class="eyebrow text-gold block mb-2">01 / Figurative</span>
              <h3 class="font-serif text-2xl text-ink mb-3">Cultural Portraits</h3>
              <p class="text-warm-gray text-xs sm:text-sm leading-relaxed mb-6">
                Preserving Nepalese ethnic dress, heirloom ornaments, and the expressive character
                of lived experience through rich, layered oil glazes and delicate charcoal.
              </p>
            </div>
            <router-link
              to="/gallery?category=Portrait"
              class="inline-flex items-center gap-2 eyebrow text-xs text-ink hover:text-gold transition-colors pt-4 border-t border-ink/10"
            >
              <span>Explore Portraits</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>

          <div
            class="group flex flex-col justify-between p-6 sm:p-8 bg-white/70 border border-ink/10 hover:border-ink/30 transition-all duration-300 shadow-sm"
          >
            <div>
              <div
                class="aspect-[4/3] sm:aspect-[3/4] overflow-hidden mb-6 bg-warm-gray/10 relative"
              >
                <img
                  src="/paintings/painting-4.jpg"
                  alt="Himalayan Landscapes by Jagat Tamang"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  class="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-widest uppercase eyebrow text-ink"
                >
                  4 Artworks
                </span>
              </div>
              <span class="eyebrow text-gold block mb-2">02 / Scenery</span>
              <h3 class="font-serif text-2xl text-ink mb-3">Himalayan Landscapes</h3>
              <p class="text-warm-gray text-xs sm:text-sm leading-relaxed mb-6">
                From ancient terraced Gurung settlements like Ghandruk to the frozen, blade-sharp
                ridges of Ama Dablam rendered in dramatic palette knife impasto.
              </p>
            </div>
            <router-link
              to="/gallery?category=Landscape"
              class="inline-flex items-center gap-2 eyebrow text-xs text-ink hover:text-gold transition-colors pt-4 border-t border-ink/10"
            >
              <span>Explore Landscapes</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>

          <div
            class="group flex flex-col justify-between p-6 sm:p-8 bg-white/70 border border-ink/10 hover:border-ink/30 transition-all duration-300 shadow-sm"
          >
            <div>
              <div
                class="aspect-[4/3] sm:aspect-[3/4] overflow-hidden mb-6 bg-warm-gray/10 relative"
              >
                <img
                  src="/paintings/painting-7.jpg"
                  alt="Wildlife Studies by Jagat Tamang"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  class="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-widest uppercase eyebrow text-ink"
                >
                  1 Artwork
                </span>
              </div>
              <span class="eyebrow text-gold block mb-2">03 / Fauna</span>
              <h3 class="font-serif text-2xl text-ink mb-3">Wildlife &amp; Nature</h3>
              <p class="text-warm-gray text-xs sm:text-sm leading-relaxed mb-6">
                Intimate natural encounters capturing the avian power and plumage of the Crested
                Serpent Eagle with surgical brush precision and dramatic atmospheric lighting.
              </p>
            </div>
            <router-link
              to="/gallery?category=Wildlife"
              class="inline-flex items-center gap-2 eyebrow text-xs text-ink hover:text-gold transition-colors pt-4 border-t border-ink/10"
            >
              <span>Explore Wildlife</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div class="lg:col-span-7">
            <div
              class="relative overflow-hidden bg-warm-gray/10 shadow-lg group cursor-pointer"
              @click="$router.push('/gallery/4')"
            >
              <img
                src="/paintings/painting-4.jpg"
                alt="Gandruk Gurung Village by Jagat Tamang"
                class="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <span class="btn-ink text-xs py-2.5 px-5">View Artwork Page</span>
              </div>
            </div>
            <p
              class="text-xs text-warm-gray mt-3 flex flex-col sm:flex-row sm:justify-between gap-1"
            >
              <span class="font-medium text-ink">Gandruk Gurung Village (Nepal)</span>
              <span>Oil on Canvas &middot; 24 &times; 36 in</span>
            </p>
          </div>

          <div class="lg:col-span-5 space-y-5 sm:space-y-6">
            <div class="inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-gold"></span>
              <span class="eyebrow text-gold">Curator's Spotlight</span>
            </div>

            <h2 class="section-heading text-ink">
              The Architecture of<br /><em>Memory &amp; Mist</em>
            </h2>

            <p class="text-warm-gray leading-relaxed text-sm sm:text-base">
              In <em>Gandruk Gurung Village</em>, Jagat captures the timeless harmony between the
              Annapurna Himalayan range and the indigenous Gurung community. Terraced agricultural
              contours transition into hand-carved stone slate roofs, framed by the quiet drift of
              valley clouds.
            </p>

            <div class="p-4 sm:p-5 bg-cream border-l-2 border-gold space-y-2 text-xs">
              <p class="eyebrow text-warm-gray">Technical Breakdown</p>
              <p class="text-ink font-medium">Layered Oil with Fine Glaze Detailing</p>
              <p class="text-warm-gray leading-relaxed">
                Colors: Raw Umber, Yellow Ochre, Terracotta, Cobalt Blue, Sap Green, and Titanium
                White.
              </p>
            </div>

            <div
              class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
            >
              <router-link
                :to="{
                  path: '/contact',
                  query: { type: 'acquisition', painting: 'Gandruk Gurung Village (Nepal)' },
                }"
                class="btn-ink text-xs justify-center"
              >
                Inquire to Acquire
              </router-link>
              <router-link
                to="/gallery/4"
                class="btn-outline text-xs justify-center sm:border-0 sm:p-0 sm:text-ink sm:hover:text-gold sm:hover:bg-transparent"
              >
                Inspect Artwork Details &rarr;
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-ink text-cream relative overflow-hidden"
    >
      <div
        class="absolute -top-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"
      ></div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <div class="ornamental-line text-cream/20 mb-8 sm:mb-12">
          <span class="eyebrow text-gold px-4">Artistic Philosophy</span>
        </div>

        <blockquote
          class="font-serif text-cream text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug font-light italic mb-8"
        >
          &ldquo;Each artwork reflects a strong connection to tradition and storytelling, blending
          technical precision with expressive detail to create immersive visual experiences.&rdquo;
        </blockquote>

        <p class="eyebrow text-warm-gray mb-10 sm:mb-12">— Jagat Tamang &middot; Visual Artist</p>

        <div
          class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-cream/15 text-left"
        >
          <div class="p-4 bg-white/5 border border-white/5">
            <h4 class="font-serif text-xl text-cream mb-2">Living Heritage</h4>
            <p class="text-xs text-warm-gray leading-relaxed">
              Rooted in Nepalese cultural memory, honoring tradition through contemporary realism.
            </p>
          </div>
          <div class="p-4 bg-white/5 border border-white/5">
            <h4 class="font-serif text-xl text-cream mb-2">Technical Rigor</h4>
            <p class="text-xs text-warm-gray leading-relaxed">
              Decades mastering classical glaze transparency, impasto textures, and anatomical
              fidelity.
            </p>
          </div>
          <div class="p-4 bg-white/5 border border-white/5">
            <h4 class="font-serif text-xl text-cream mb-2">Emotional Depth</h4>
            <p class="text-xs text-warm-gray leading-relaxed">
              Paintings intended not just to capture likeness, but to evoke quiet contemplation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-cream">
      <div class="max-w-4xl mx-auto text-center">
        <span class="eyebrow text-warm-gray block mb-3">Custom Artwork &amp; Acquisitions</span>
        <h2 class="section-heading text-ink mb-6">
          Commission an Original<br /><em>Masterpiece</em>
        </h2>
        <p
          class="text-warm-gray text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10"
        >
          Whether you are looking to acquire an existing piece from the catalog or commission a
          bespoke family portrait, cultural tribute, or landscape, Jagat works directly with private
          collectors and institutions worldwide.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <router-link
            to="/contact?type=commission"
            class="btn-ink w-full sm:w-auto justify-center"
          >
            Start a Commission Conversation
          </router-link>
          <router-link to="/about" class="btn-outline w-full sm:w-auto justify-center">
            Read Artist Biography
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
@keyframes scroll-line {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
.animate-scroll-line {
  animation: scroll-line 2s ease-in-out infinite;
}
</style>

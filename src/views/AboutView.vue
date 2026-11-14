<template>
  <main class="pt-20 min-h-screen bg-cream overflow-x-hidden">
    <div class="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 border-b border-ink/10">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-end">
        <div>
          <p class="eyebrow text-warm-gray mb-2 sm:mb-4">The Monograph</p>
          <h1 class="section-heading text-ink">About<br /><em>Jagat Tamang</em></h1>
        </div>
        <p
          class="text-warm-gray leading-relaxed text-sm sm:text-base md:text-lg font-light max-w-lg"
        >
          A visual artist based in Toronto, Canada, dedicated to cultural realism, emotional
          observation, and two decades of classical painting mastery.
        </p>
      </div>
    </div>

    <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div class="lg:col-span-5 lg:sticky lg:top-28 w-full">
          <div class="relative aspect-[4/5] overflow-hidden bg-warm-gray/10 shadow-md">
            <img
              src="/paintings/artist-portrait.jpg"
              alt="Jagat Tamang — Visual Artist in his studio"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <div
              class="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border border-gold/30 pointer-events-none -z-10"
            ></div>
          </div>

          <div class="mt-6 sm:mt-8 p-5 sm:p-6 bg-white border border-ink/10 space-y-3.5 text-xs">
            <div class="flex justify-between items-center pb-2.5 border-b border-ink/10">
              <span class="eyebrow text-warm-gray text-[10px] sm:text-xs">Studio Residence</span>
              <span class="text-ink font-medium text-right">Toronto, Ontario, Canada</span>
            </div>
            <div class="flex justify-between items-center pb-2.5 border-b border-ink/10">
              <span class="eyebrow text-warm-gray text-[10px] sm:text-xs">Cultural Roots</span>
              <span class="text-ink font-medium text-right">Nepal (Himalayan Heritage)</span>
            </div>
            <div class="flex justify-between items-center pb-2.5 border-b border-ink/10">
              <span class="eyebrow text-warm-gray text-[10px] sm:text-xs">Active Career</span>
              <span class="text-ink font-medium text-right">Over 20 Years Practice</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="eyebrow text-warm-gray text-[10px] sm:text-xs">Primary Media</span>
              <span class="text-ink font-medium text-right">Oil, Acrylic, Charcoal</span>
            </div>
          </div>
        </div>

        <div
          class="lg:col-span-7 space-y-8 sm:space-y-10 text-warm-gray leading-relaxed text-sm sm:text-base"
        >
          <div>
            <p class="eyebrow text-gold mb-2 text-xs">Origin &amp; Background</p>
            <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl text-ink mb-4 sm:mb-6">
              Rooted in Tradition, Rendered in Realism
            </h2>
            <p class="mb-4">
              Jagat Tamang is a visual artist whose creative life is defined by a deep dialogue
              between his native Nepalese roots and his contemporary studio practice in Toronto.
              Growing up surrounded by the staggering physical scale of the Himalayas and the
              intricate cultural tapestry of ethnic Nepalese communities, Jagat formed an indelible
              respect for craftsmanship, human character, and the quiet dignity of cultural
              heritage.
            </p>
            <p>
              Over a career spanning more than twenty years, he has resisted fast trends in favor of
              disciplined, patient observation. His paintings do not merely reproduce visual
              surfaces; they investigate memory, identity, and the spiritual presence of both people
              and landscapes.
            </p>
          </div>

          <div class="border-l-2 border-gold pl-4 sm:pl-6 py-2 my-6 sm:my-8 bg-white/40">
            <blockquote class="font-serif text-xl sm:text-2xl text-ink italic leading-snug">
              &ldquo;Painting is an act of prolonged respect. When you spend weeks observing a face,
              a terraced hill, or an ancient garment, you are telling the subject that its existence
              matters.&rdquo;
            </blockquote>
            <p class="eyebrow text-warm-gray mt-3 text-xs">— Jagat Tamang</p>
          </div>

          <div>
            <p class="eyebrow text-gold mb-2 text-xs">Themes &amp; Inquiry</p>
            <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl text-ink mb-4 sm:mb-6">
              Preserving Culture on Canvas
            </h2>
            <p class="mb-4">
              Central to Jagat's work is the preservation of cultural memory. His portraits often
              celebrate traditional attire, such as Dhaka fabrics, gold ornaments, and regional
              dresses that carry generations of ancestral identity. In works like his portrait of
              actress Miruna Magar and his studies of traditional figures, he meticulously balances
              ethnographic precision with personal emotional truth.
            </p>
            <p>
              In his landscape work, the dramatic topography of Nepal—from the terraced stone
              villages of Ghandruk to the frozen majesty of Ama Dablam—serves as both subject and
              spiritual anchor.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-ink text-cream">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-12 sm:mb-16">
          <p class="eyebrow text-gold mb-2 text-xs">Technique &amp; Craft</p>
          <h2 class="section-heading text-cream">Mastery Across<br /><em>Three Mediums</em></h2>
          <p class="text-warm-gray mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
            Each medium in Jagat's studio serves a dedicated expressive role, requiring distinct
            mechanical discipline, pacing, and chemical understanding.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div class="border-t border-cream/15 pt-6 sm:pt-8 space-y-3">
            <span class="eyebrow text-gold block text-xs">01 / Classical Glazes</span>
            <h3 class="font-serif text-xl sm:text-2xl text-cream">Oil on Canvas</h3>
            <p class="text-[11px] eyebrow text-warm-gray">
              Portraiture &middot; Luminous Skin Tones &middot; Textiles
            </p>
            <p class="text-warm-gray text-xs sm:text-sm leading-relaxed">
              Using traditional indirect painting techniques, Jagat builds portraits through tonal
              underpaintings followed by translucent oil glazes. This allows light to travel through
              multiple layers of pigment, creating glowing flesh tones and rendering intricate
              jewelry and cloth with lifelike depth.
            </p>
          </div>

          <div class="border-t border-cream/15 pt-6 sm:pt-8 space-y-3">
            <span class="eyebrow text-gold block text-xs">02 / Structural Impasto</span>
            <h3 class="font-serif text-xl sm:text-2xl text-cream">Palette Knife Acrylic</h3>
            <p class="text-[11px] eyebrow text-warm-gray">
              Himalayan Peaks &middot; Stone Architecture &middot; Monochrome
            </p>
            <p class="text-warm-gray text-xs sm:text-sm leading-relaxed">
              For monumentally rugged subjects like the Ama Dablam series, Jagat switches to palette
              knives and heavy acrylic bodies. Applying paint in deliberate geometric facets, he
              mimics the geological fractures of Himalayan rock faces and wind-whipped snow ridges
              with tactile physicality.
            </p>
          </div>

          <div class="border-t border-cream/15 pt-6 sm:pt-8 space-y-3">
            <span class="eyebrow text-gold block text-xs">03 / Pure Observation</span>
            <h3 class="font-serif text-xl sm:text-2xl text-cream">Charcoal on Paper</h3>
            <p class="text-[11px] eyebrow text-warm-gray">
              Expressive Portraits &middot; Tonal Studies &middot; High Contrast
            </p>
            <p class="text-warm-gray text-xs sm:text-sm leading-relaxed">
              Stripping away color allows an unfiltered focus on value, bone structure, and raw
              expression. In works like <em>Smiling Nepalese Woman</em>, powdered vine charcoal and
              compressed black give the human face an intimate, immediate warmth that commands
              viewer empathy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-cream border-b border-ink/10">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div class="lg:col-span-5 space-y-4 sm:space-y-6">
            <p class="eyebrow text-warm-gray text-xs">Mineral &amp; Earth Alchemy</p>
            <h2 class="section-heading text-ink">The Studio<br /><em>Pigment Palette</em></h2>
            <p class="text-warm-gray leading-relaxed text-xs sm:text-sm md:text-base">
              Jagat's color choices are deliberate and restrained. Rather than relying on synthetic
              primaries, his work is anchored in the historic earth pigments that have defined
              classical realism for centuries.
            </p>
            <p class="text-warm-gray leading-relaxed text-xs sm:text-sm">
              These minerals ground his figures in natural sunlight and reflect the authentic tones
              of Himalayan clay, terraced soil, and forest rivers.
            </p>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div class="p-4 sm:p-5 bg-white border border-ink/10 flex items-start gap-4 shadow-sm">
              <div
                class="w-8 h-8 rounded-full bg-[#8A3324] flex-shrink-0 shadow-inner mt-0.5"
              ></div>
              <div>
                <h4 class="font-serif text-lg text-ink">Burnt Sienna &amp; Raw Umber</h4>
                <p class="text-xs text-warm-gray mt-1 leading-relaxed">
                  Deep earth tones used to sculpt shadows, weathered timber, and warm undertones in
                  portraits.
                </p>
              </div>
            </div>

            <div class="p-4 sm:p-5 bg-white border border-ink/10 flex items-start gap-4 shadow-sm">
              <div
                class="w-8 h-8 rounded-full bg-[#CC8E35] flex-shrink-0 shadow-inner mt-0.5"
              ></div>
              <div>
                <h4 class="font-serif text-lg text-ink">Yellow &amp; Gold Ochre</h4>
                <p class="text-xs text-warm-gray mt-1 leading-relaxed">
                  Luminous natural oxides recreating sunlight across mountain slate and golden
                  traditional jewelry.
                </p>
              </div>
            </div>

            <div class="p-4 sm:p-5 bg-white border border-ink/10 flex items-start gap-4 shadow-sm">
              <div
                class="w-8 h-8 rounded-full bg-[#2E583B] flex-shrink-0 shadow-inner mt-0.5"
              ></div>
              <div>
                <h4 class="font-serif text-lg text-ink">Sap &amp; Viridian Green</h4>
                <p class="text-xs text-warm-gray mt-1 leading-relaxed">
                  The verdant palette of Nepalese foothills, mossy riverbanks, and cascading forest
                  streams.
                </p>
              </div>
            </div>

            <div class="p-4 sm:p-5 bg-white border border-ink/10 flex items-start gap-4 shadow-sm">
              <div
                class="w-8 h-8 rounded-full bg-[#203D72] flex-shrink-0 shadow-inner mt-0.5"
              ></div>
              <div>
                <h4 class="font-serif text-lg text-ink">Ultramarine &amp; Titanium</h4>
                <p class="text-xs text-warm-gray mt-1 leading-relaxed">
                  Atmospheric depth, crystalline glacier highlights, and the cool altitude of high
                  Himalayan skies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p class="eyebrow text-warm-gray mb-2 text-xs">Collector Standards</p>
          <h2 class="section-heading text-ink">
            Archival Quality &amp;<br /><em>Authenticity</em>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="p-5 sm:p-6 bg-cream/50 border border-ink/10 space-y-2">
            <span class="eyebrow text-gold block text-[11px]">01 / Support</span>
            <h4 class="font-serif text-lg sm:text-xl text-ink">
              Belgian Linen &amp; Archival Paper
            </h4>
            <p class="text-xs text-warm-gray leading-relaxed">
              Every painting is created on museum-grade stretched linen or 100% acid-free rag paper
              designed to last generations without warping or degrading.
            </p>
          </div>

          <div class="p-5 sm:p-6 bg-cream/50 border border-ink/10 space-y-2">
            <span class="eyebrow text-gold block text-[11px]">02 / Provenance</span>
            <h4 class="font-serif text-lg sm:text-xl text-ink">
              Signed Certificate of Authenticity
            </h4>
            <p class="text-xs text-warm-gray leading-relaxed">
              Each original work is hand-signed by Jagat Tamang and accompanied by a documented
              Certificate of Authenticity guaranteeing provenance.
            </p>
          </div>

          <div class="p-5 sm:p-6 bg-cream/50 border border-ink/10 space-y-2">
            <span class="eyebrow text-gold block text-[11px]">03 / Handling</span>
            <h4 class="font-serif text-lg sm:text-xl text-ink">Custom Crated Global Delivery</h4>
            <p class="text-xs text-warm-gray leading-relaxed">
              Artworks are cured, protected with UV archival varnish, and shipped from Toronto in
              custom reinforced wooden crates with tracked global logistics.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-cream text-center">
      <div class="max-w-3xl mx-auto">
        <p class="eyebrow text-warm-gray mb-2 text-xs">Continue Your Exploration</p>
        <h2 class="section-heading text-ink mb-6 sm:mb-8">
          View the Catalog or<br /><em>Initiate a Commission</em>
        </h2>
        <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <router-link to="/gallery" class="btn-ink w-full sm:w-auto justify-center">
            Browse All Artworks (9)
          </router-link>
          <router-link
            to="/contact?type=commission"
            class="btn-outline w-full sm:w-auto justify-center"
          >
            Commission a Custom Artwork
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>

<template>
  <footer class="bg-ink text-cream py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-x-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12"
      >
        <div class="sm:col-span-2 md:col-span-1">
          <h3 class="font-serif text-2xl sm:text-3xl text-cream mb-2">Jagat Tamang</h3>
          <p class="eyebrow text-gold mb-3 text-[10px] sm:text-xs">Visual Artist &amp; Painter</p>
          <p class="text-xs sm:text-sm text-warm-gray leading-relaxed max-w-sm">
            Visual artist exploring realism, culture, and emotion. Based in Toronto, Canada. Over 20
            years of experience across oil, acrylic, and charcoal.
          </p>
        </div>

        <div>
          <p class="eyebrow text-warm-gray mb-4 sm:mb-5 text-[10px] sm:text-xs">Navigate</p>
          <ul class="space-y-2.5 sm:space-y-3">
            <li v-for="link in links" :key="link.to">
              <router-link
                :to="link.to"
                class="text-xs sm:text-sm text-cream/70 hover:text-gold transition-colors duration-200 block py-0.5"
              >
                {{ link.label }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact?type=commission"
                class="text-xs sm:text-sm text-gold hover:text-cream transition-colors duration-200 block py-0.5 font-medium"
              >
                Commission Custom Art &rarr;
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <p class="eyebrow text-warm-gray mb-4 sm:mb-5 text-[10px] sm:text-xs">Toronto Studio</p>
          <a
            href="mailto:tamangjagat509@gmail.com"
            class="text-xs sm:text-sm text-cream/80 hover:text-gold transition-colors block mb-2 break-all"
          >
            tamangjagat509@gmail.com
          </a>
          <a
            href="tel:+14168347097"
            class="text-xs sm:text-sm text-cream/80 hover:text-gold transition-colors block mb-2"
          >
            +1 416-834-7097
          </a>
          <p class="text-xs sm:text-sm text-warm-gray">Toronto, Ontario, Canada</p>

          <div class="flex flex-wrap gap-4 mt-5">
            <a
              href="https://www.instagram.com/jagat6923"
              target="_blank"
              rel="noopener noreferrer"
              class="text-warm-gray hover:text-cream transition-colors duration-200 text-xs flex items-center gap-1.5 py-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
              <span>@jagat6923</span>
            </a>
            <a
              href="https://www.tiktok.com/@jagattamang"
              target="_blank"
              rel="noopener noreferrer"
              class="text-warm-gray hover:text-cream transition-colors duration-200 text-xs flex items-center gap-1.5 py-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.78 1.52V6.76a4.84 4.84 0 01-1.01-.07z"
                />
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-cream/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-warm-gray"
      >
        <p>© {{ new Date().getFullYear() }} Jagat Tamang. All rights reserved.</p>
        <p class="text-[11px] text-warm-gray/70">
          All artworks are protected by copyright. Reproduction without permission is prohibited.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { label: 'Home', to: '/' },
  { label: 'Works Gallery', to: '/gallery' },
  { label: 'Artist Biography', to: '/about' },
  { label: 'Acquisitions & Contact', to: '/contact' },
]
</script>

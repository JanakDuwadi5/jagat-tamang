<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isHeroMode
        ? 'bg-gradient-to-b from-ink/80 via-ink/40 to-transparent'
        : 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-ink/10',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-20">
      <router-link to="/" class="flex flex-col leading-none group py-2" @click="menuOpen = false">
        <span
          :class="[
            'font-serif text-xl sm:text-2xl tracking-tight transition-colors duration-300',
            isHeroMode ? 'text-cream group-hover:text-gold' : 'text-ink group-hover:text-gold',
          ]"
        >
          Jagat Tamang
        </span>
        <span
          :class="[
            'eyebrow mt-1 text-[9px] sm:text-[10px] tracking-[0.22em] transition-colors duration-300',
            isHeroMode ? 'text-gold' : 'text-warm-gray',
          ]"
        >
          Visual Artist &amp; Painter
        </span>
      </router-link>

      <ul class="hidden md:flex items-center gap-10 lg:gap-12">
        <li v-for="link in navLinks" :key="link.to">
          <router-link
            :to="link.to"
            :class="[
              'eyebrow text-xs tracking-[0.2em] transition-colors duration-200 relative group py-2',
              isHeroMode ? 'text-cream/90 hover:text-gold' : 'text-ink hover:text-gold',
              $route.path === link.to ? (isHeroMode ? 'text-gold' : 'text-gold font-semibold') : '',
            ]"
          >
            {{ link.label }}
            <span
              :class="[
                'absolute bottom-0 left-0 h-px bg-gold transition-all duration-300',
                $route.path === link.to ? 'w-full' : 'w-0 group-hover:w-full',
              ]"
            ></span>
          </router-link>
        </li>
      </ul>

      <button
        class="md:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
        :aria-expanded="menuOpen"
      >
        <span
          :class="[
            'block w-6 h-0.5 transition-all duration-300',
            isHeroMode && !menuOpen ? 'bg-cream' : 'bg-ink',
            menuOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 transition-all duration-300',
            isHeroMode && !menuOpen ? 'bg-cream' : 'bg-ink',
            menuOpen ? 'opacity-0' : '',
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 transition-all duration-300',
            isHeroMode && !menuOpen ? 'bg-cream' : 'bg-ink',
            menuOpen ? '-rotate-45 -translate-y-2' : '',
          ]"
        ></span>
      </button>
    </nav>

    <transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="md:hidden fixed inset-x-0 top-20 bg-cream/98 backdrop-blur-xl border-b border-ink/15 shadow-2xl px-6 py-8 max-h-[calc(100svh-5rem)] overflow-y-auto"
      >
        <div class="flex flex-col gap-6">
          <ul class="flex flex-col gap-5">
            <li v-for="link in navLinks" :key="link.to">
              <router-link
                :to="link.to"
                :class="[
                  'font-serif text-3xl tracking-tight transition-colors block py-1',
                  $route.path === link.to ? 'text-gold' : 'text-ink hover:text-gold',
                ]"
                @click="closeMenu"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>

          <div class="pt-6 border-t border-ink/10 flex flex-col gap-4">
            <router-link
              to="/contact?type=commission"
              class="btn-ink w-full justify-center text-xs py-3.5"
              @click="closeMenu"
            >
              Commission Custom Artwork
            </router-link>
          </div>

          <div class="pt-4 text-xs text-warm-gray space-y-1">
            <p class="font-medium text-ink">Jagat Tamang Fine Art Studio</p>
            <p>Toronto, Ontario, Canada &middot; Worldwide Delivery</p>
            <p class="text-[11px] text-warm-gray/70 pt-1">
              +1 416-834-7097 &middot; tamangjagat509@gmail.com
            </p>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { label: 'Work', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const isHeroMode = computed(() => {
  return route.path === '/' && !scrolled.value
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 30
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  updateBodyScrollLock()
}

const closeMenu = () => {
  menuOpen.value = false
  updateBodyScrollLock()
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && menuOpen.value) {
    closeMenu()
  }
}

const updateBodyScrollLock = () => {
  if (typeof document !== 'undefined') {
    if (menuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

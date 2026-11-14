<template>
  <main class="pt-20 min-h-screen bg-cream overflow-x-hidden">
    <div v-if="!painting" class="flex items-center justify-center min-h-[60vh]">
      <p class="eyebrow text-warm-gray animate-pulse">Loading artwork…</p>
    </div>

    <div
      v-else-if="notFound"
      class="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center"
    >
      <p class="font-serif text-2xl sm:text-3xl text-ink">Work not found</p>
      <router-link to="/gallery" class="btn-outline">Back to Complete Catalog</router-link>
    </div>

    <template v-else>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 pb-4">
        <router-link
          to="/gallery"
          class="inline-flex items-center gap-2 eyebrow text-warm-gray hover:text-ink transition-colors text-xs"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back to Complete Catalog
        </router-link>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-14">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div class="lg:sticky lg:top-28 w-full">
            <div
              class="relative overflow-hidden cursor-zoom-in group bg-warm-gray/10 shadow-md"
              @click="lightboxOpen = true"
            >
              <img
                :src="painting.image"
                :alt="painting.title"
                class="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                @error="handleImgError"
              />
              <div
                class="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-cream/95 backdrop-blur-sm px-3 py-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-sm"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <span class="eyebrow text-ink text-[10px]">Click to Zoom</span>
              </div>
            </div>

            <div v-if="painting.sold" class="mt-3 inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-warm-gray"></span>
              <span class="eyebrow text-warm-gray text-xs">Private Collection (Sold)</span>
            </div>
            <div v-else class="mt-3 inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span class="eyebrow text-emerald-800 text-xs"
                >Original Artwork &middot; Available for Acquisition</span
              >
            </div>
          </div>

          <div class="lg:py-2 w-full space-y-6">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="eyebrow text-gold text-xs">{{ painting.category }}</span>
                <span class="text-warm-gray/40">&middot;</span>
                <span class="eyebrow text-warm-gray text-xs">{{ painting.year }}</span>
              </div>
              <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.08] mb-3">
                {{ painting.title }}
              </h1>
            </div>

            <p class="text-warm-gray leading-relaxed text-sm sm:text-base md:text-lg font-light">
              {{ painting.description }}
            </p>

            <div class="border-y border-ink/10 py-5 space-y-3.5 text-xs sm:text-sm">
              <div
                v-for="spec in specs"
                :key="spec.label"
                class="flex justify-between items-baseline gap-2 py-1"
              >
                <span class="eyebrow text-warm-gray text-xs">{{ spec.label }}</span>
                <span class="text-ink font-medium text-right">{{ spec.value }}</span>
              </div>

              <div v-if="painting.colorsUsed" class="pt-3 border-t border-ink/10">
                <p class="eyebrow text-warm-gray mb-1.5 text-xs">Palette &amp; Pigments Used</p>
                <p
                  class="text-xs text-ink/85 leading-relaxed font-sans bg-gold/10 p-3 border-l-2 border-gold"
                >
                  {{ painting.colorsUsed }}
                </p>
              </div>

              <div v-if="painting.style" class="pt-1">
                <p class="eyebrow text-warm-gray mb-1 text-xs">Execution Style</p>
                <p class="text-xs sm:text-sm text-ink font-sans">{{ painting.style }}</p>
              </div>
            </div>

            <div class="space-y-4 pt-2">
              <router-link
                :to="{
                  path: '/contact',
                  query: {
                    type: painting.sold ? 'commission' : 'acquisition',
                    painting: painting.title,
                  },
                }"
                class="btn-ink w-full justify-center text-xs py-4"
              >
                <span v-if="!painting.sold">Inquire to Acquire This Artwork</span>
                <span v-else>Commission a Similar Artwork</span>
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

              <div
                class="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-warm-gray pt-1 text-center sm:text-left"
              >
                <span>✓ Archival Certificate of Authenticity</span>
                <span>✓ Worldwide Crating &amp; Insured Shipping</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 sm:mt-24 md:mt-32" v-if="related.length">
          <div class="border-t border-ink/10 pt-12 sm:pt-16">
            <div class="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-3">
              <div>
                <p class="eyebrow text-warm-gray mb-1 text-xs">Curated Pairing</p>
                <h3 class="font-serif text-2xl sm:text-3xl text-ink">
                  More {{ painting.category }}s
                </h3>
              </div>
              <router-link
                :to="`/gallery?category=${painting.category}`"
                class="eyebrow text-ink hover:text-gold transition-colors flex items-center gap-1 text-xs"
              >
                <span>View all {{ painting.category.toLowerCase() }}s</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <PaintingCard
                v-for="p in related"
                :key="p.id"
                :painting="p"
                aspect="portrait"
                :showInfo="true"
                @click="$router.push(`/gallery/${p.id}`)"
              />
            </div>
          </div>
        </div>
      </div>
    </template>

    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] bg-ink/95 flex flex-col items-center justify-center p-3 sm:p-6 backdrop-blur-md"
        @click.self="lightboxOpen = false"
      >
        <button
          class="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream/70 hover:text-cream transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          @click="lightboxOpen = false"
          aria-label="Close lightbox"
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path
              d="M8 8l16 16M24 8L8 24"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <div class="max-w-[95vw] max-h-[88vh] flex flex-col items-center justify-center">
          <img
            :src="painting?.image"
            :alt="painting?.title"
            class="max-w-full max-h-[75vh] sm:max-h-[82vh] object-contain shadow-2xl"
          />
          <p class="text-cream font-serif text-base sm:text-lg mt-3 text-center px-4">
            {{ painting?.title }} &middot;
            <span
              class="text-warm-gray text-xs font-sans uppercase tracking-widest block sm:inline mt-0.5 sm:mt-0"
            >
              {{ painting?.medium }} ({{ painting?.dimensions }})
            </span>
          </p>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import PaintingCard from '@/components/PaintingCard.vue'
import { getById, paintings } from '@/data/paintings.js'

const route = useRoute()
const lightboxOpen = ref(false)

const painting = computed(() => {
  return getById(route.params.id) || null
})

const notFound = computed(() => !painting.value)

const specs = computed(() => [
  { label: 'Medium', value: painting.value?.medium },
  { label: 'Dimensions', value: painting.value?.dimensions },
  { label: 'Classification', value: `${painting.value?.category} Painting` },
  { label: 'Authenticity', value: 'Original Hand-Signed Work' },
])

const related = computed(() => {
  if (!painting.value) return []
  return paintings
    .filter((p) => p.id !== painting.value.id && p.category === painting.value.category)
    .slice(0, 4)
})

const handleImgError = (e) => {
  e.target.src = ''
}
</script>

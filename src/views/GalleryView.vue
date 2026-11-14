<template>
  <main class="pt-20 min-h-screen bg-cream overflow-x-hidden">
    <div class="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 border-b border-ink/10">
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8"
      >
        <div>
          <p class="eyebrow text-warm-gray mb-2 sm:mb-3">Complete Catalog</p>
          <h1 class="section-heading text-ink">Original<br /><em>Artworks</em></h1>
        </div>
        <p class="text-warm-gray max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
          Explore Jagat Tamang's collection of oil, acrylic, and charcoal artworks spanning cultural
          portraiture, Himalayan landscapes, and wildlife studies.
        </p>
      </div>
    </div>

    <div class="sticky top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-ink/10 shadow-xs">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex gap-2.5 sm:gap-3 overflow-x-auto scrollbar-hide"
      >
        <button
          v-for="cat in filterOptions"
          :key="cat.name"
          @click="setCategory(cat.name)"
          :class="[
            'flex-shrink-0 px-4 sm:px-5 py-2.5 min-h-[44px] text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer',
            activeCategory === cat.name
              ? 'bg-ink text-cream shadow-sm font-medium'
              : 'border border-ink/20 text-warm-gray hover:border-ink hover:text-ink',
          ]"
        >
          <span>{{ cat.label }}</span>
          <span
            :class="[
              'text-[10px] px-1.5 py-0.5 rounded-full font-sans',
              activeCategory === cat.name ? 'bg-cream/20 text-cream' : 'bg-ink/5 text-warm-gray',
            ]"
          >
            {{ cat.count }}
          </span>
        </button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16">
      <transition-group
        name="gallery"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
      >
        <div
          v-for="painting in filteredPaintings"
          :key="painting.id"
          class="cursor-pointer group"
          @click="$router.push(`/gallery/${painting.id}`)"
        >
          <PaintingCard :painting="painting" aspect="portrait" :showInfo="true" />
        </div>
      </transition-group>

      <div v-if="filteredPaintings.length === 0" class="text-center py-20 text-warm-gray">
        <p class="font-serif text-2xl mb-2 text-ink">No works in this category yet.</p>
        <p class="text-xs sm:text-sm">Please select another category or check back soon.</p>
        <button @click="setCategory('All')" class="btn-outline mt-6 text-xs">
          View All Artworks
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PaintingCard from '@/components/PaintingCard.vue'
import { paintings, categories, getByCategory } from '@/data/paintings.js'

const route = useRoute()
const router = useRouter()

const activeCategory = ref('All')

const filterOptions = computed(() => {
  return categories.map((cat) => {
    const count =
      cat === 'All' ? paintings.length : paintings.filter((p) => p.category === cat).length
    const label = cat === 'All' ? 'All Works' : `${cat}s`
    return { name: cat, label, count }
  })
})

const setCategory = (cat) => {
  activeCategory.value = cat
  if (cat === 'All') {
    router.replace({ query: {} })
  } else {
    router.replace({ query: { category: cat } })
  }
}

onMounted(() => {
  if (route.query.category && categories.includes(route.query.category)) {
    activeCategory.value = route.query.category
  }
})

watch(
  () => route.query.category,
  (newCat) => {
    if (newCat && categories.includes(newCat)) {
      activeCategory.value = newCat
    } else {
      activeCategory.value = 'All'
    }
  },
)

const filteredPaintings = computed(() => getByCategory(activeCategory.value))
</script>

<style scoped>
.gallery-move,
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.35s ease;
}
.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
.gallery-leave-active {
  position: absolute;
}
</style>

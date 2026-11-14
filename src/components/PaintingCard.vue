<template>
  <div ref="card" class="painting-card fade-up" @click="$emit('click')">
    <div :class="['relative overflow-hidden bg-warm-gray/10', aspectClass]">
      <div v-if="!imageLoaded" class="absolute inset-0 bg-warm-gray/10 animate-pulse"></div>

      <img
        :src="painting.image"
        :alt="painting.title"
        class="w-full h-full object-cover"
        @load="imageLoaded = true"
        @error="handleImageError"
      />

      <div class="overlay">
        <div class="overlay-text">
          <p class="font-serif text-xl text-cream">{{ painting.title }}</p>
          <p class="text-xs text-cream/70 mt-1 tracking-widest uppercase">{{ painting.medium }}</p>
        </div>
      </div>

      <div
        v-if="painting.sold"
        class="absolute top-3 right-3 bg-ink/80 text-cream text-xs px-2.5 py-1 tracking-widest uppercase"
      >
        Sold
      </div>
    </div>

    <div v-if="showInfo" class="pt-4 pb-2">
      <p class="font-serif text-lg text-ink">{{ painting.title }}</p>
      <p class="text-xs text-warm-gray mt-1">{{ painting.medium }} &middot; {{ painting.year }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  painting: { type: Object, required: true },
  aspect: { type: String, default: 'auto' },
  showInfo: { type: Boolean, default: true },
})

defineEmits(['click'])

const imageLoaded = ref(false)
const card = ref(null)

const aspectMap = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  auto: 'aspect-[3/4]',
}
const aspectClass = aspectMap[props.aspect] || 'aspect-[3/4]'

const handleImageError = (e) => {
  imageLoaded.value = true
  e.target.style.display = 'none'
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        card.value?.classList.add('visible')
        observer.disconnect()
      }
    },
    { threshold: 0.1 },
  )
  if (card.value) observer.observe(card.value)
})
</script>

<template>
  <section id="timeline" class="section section--alt">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">{{ t('timeline.eyebrow') }}</span>
        <h2>{{ t('timeline.title') }}</h2>
      </div>

      <div class="timeline">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="timeline-item"
          :class="{ 'timeline-item--active': item.status === 'active', 'visible': visibleItems.has(i) }"
          :ref="(el) => setRef(el, i)"
        >
          <div class="timeline-item__left">
            <div class="timeline-item__dot">
              <span v-if="item.status === 'active'" class="dot-pulse"></span>
            </div>
            <div v-if="i < items.length - 1" class="timeline-item__line"></div>
          </div>
          <div class="timeline-item__card">
            <span class="timeline-item__date">{{ item.date }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <span v-if="item.status === 'active'" class="status-badge status-badge--active">{{ t('timeline.soon') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { timeline as rawTimeline } from '../data/contestData.js'

const { t, tm } = useI18n()

const items = computed(() =>
  tm('timeline.items').map((item, i) => ({ ...item, status: rawTimeline[i]?.status ?? 'upcoming' }))
)

const visibleItems = ref(new Set())
const itemRefs = ref([])
function setRef(el, i) { if (el) itemRefs.value[i] = el }

let observer = null
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.dataset.idx)
        setTimeout(() => { visibleItems.value = new Set([...visibleItems.value, idx]) }, idx * 120)
      }
    })
  }, { threshold: 0.2 })
  itemRefs.value.forEach((el, i) => { if (el) { el.dataset.idx = i; observer.observe(el) } })
})
onUnmounted(() => { if (observer) observer.disconnect() })
</script>

<style scoped>
.timeline { max-width: 680px; margin: 0 auto; }

.timeline-item {
  display: flex; gap: 20px;
  opacity: 0; transform: translateY(20px);
  transition: opacity 450ms ease, transform 450ms ease;
}
.timeline-item.visible { opacity: 1; transform: none; }

.timeline-item__left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 20px; }

.timeline-item__dot {
  position: relative; width: 16px; height: 16px; border-radius: 50%;
  background: var(--gray-300); border: 3px solid var(--bg-alt);
  box-shadow: 0 0 0 2px var(--gray-300); flex-shrink: 0; margin-top: 4px;
}
.timeline-item--active .timeline-item__dot { background: var(--brand); box-shadow: 0 0 0 3px rgba(192,57,43,0.2); }

.dot-pulse {
  position: absolute; inset: -4px; border-radius: 50%;
  background: rgba(192,57,43,0.25); animation: pulse 2s infinite;
}
@keyframes pulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(2.2); opacity: 0; } }

.timeline-item__line { flex: 1; width: 2px; background: var(--border); margin: 6px 0 0; min-height: 32px; }

.timeline-item__card {
  flex: 1; padding: 18px 22px; margin-bottom: 20px;
  background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
}
.timeline-item--active .timeline-item__card { border-color: rgba(192,57,43,0.25); box-shadow: 0 0 0 3px rgba(192,57,43,0.06), var(--shadow-md); }

.timeline-item__date { display: block; font-size: 12px; font-weight: 700; color: var(--gray-400); letter-spacing: 0.04em; margin-bottom: 6px; }
.timeline-item--active .timeline-item__date { color: var(--brand); }
.timeline-item__card h3 { font-size: 16px; font-weight: 700; color: var(--gray-900); margin-bottom: 6px; }
.timeline-item__card p { font-size: 14px; color: var(--gray-600); line-height: 1.65; }

.status-badge { display: inline-block; margin-top: 10px; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 3px 10px; border-radius: 999px; }
.status-badge--active { background: var(--brand-light); color: var(--brand); }
</style>

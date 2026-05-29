<template>
  <section id="timeline" class="timeline-section">
    <div class="wrap">
      <div class="h-block reveal">
        <div class="eyebrow">{{ t('timeline.eyebrow') }}</div>
        <h2>{{ t('timeline.h2pre') }} <span class="accent">{{ t('timeline.h2suf') }}</span></h2>
      </div>

      <div class="timeline">
        <div
          v-for="(item, i) in items" :key="i"
          class="tl-item reveal"
          :class="{ 'tl-item--active': item.status === 'active' }"
          :ref="(el) => setRef(el, i)"
        >
          <div class="tl-item__date">{{ item.date }}</div>
          <div class="tl-item__title">{{ item.title }}</div>
          <div class="tl-item__desc">{{ item.desc }}</div>
          <span v-if="item.status === 'active'" class="tl-badge">{{ t('timeline.soon') }}</span>
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

const itemRefs = ref([])
function setRef(el, i) { if (el) itemRefs.value[i] = el }

let observer = null
onMounted(() => {
  // h-block reveal
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io2.unobserve(e.target) } })
  }, { threshold: 0.12 })
  document.querySelectorAll('#timeline .h-block.reveal').forEach(el => io2.observe(el))

  // timeline items
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = parseInt(e.target.dataset.idx)
        setTimeout(() => e.target.classList.add('in'), idx * 100)
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.15 })
  itemRefs.value.forEach((el, i) => { if (el) { el.dataset.idx = i; observer.observe(el) } })
})
onUnmounted(() => { if (observer) observer.disconnect() })
</script>

<style scoped>
.timeline-section {
  background: #fff;
  padding: 120px 24px 160px;
  border-top: 1px solid rgba(0,0,0,.04);
}
.wrap { max-width: 1120px; margin: 0 auto; }

.h-block { text-align: center; margin-bottom: 72px; }
.h-block h2 {
  font-size: clamp(32px, 4.4vw, 52px);
  font-weight: 700; line-height: 1.1;
  margin-top: 8px; letter-spacing: -.02em; color: var(--gray-900);
}
.accent {
  background: linear-gradient(180deg, #BA0C2F 0%, #7A0A22 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

.timeline {
  position: relative;
  max-width: 840px;
  margin: 0 auto;
  padding-left: 32px;
}
.timeline::before {
  content: "";
  position: absolute; left: 8px; top: 8px; bottom: 8px; width: 1px;
  background: linear-gradient(180deg, var(--brand), #7A0A22, rgba(186,12,47,.1));
}

.tl-item {
  position: relative;
  padding: 22px 0 22px 24px;
}
.tl-item::before {
  content: "";
  position: absolute; left: -30px; top: 30px;
  width: 13px; height: 13px; border-radius: 50%;
  background: #fff; border: 2px solid var(--brand);
  box-shadow: 0 0 0 4px rgba(186,12,47,.10);
}
.tl-item--active::before {
  background: var(--brand);
  box-shadow: 0 0 16px rgba(186,12,47,.35), 0 0 0 4px rgba(186,12,47,.12);
}

.tl-item__date {
  font-size: 12px; color: var(--brand);
  letter-spacing: .18em; font-weight: 600; text-transform: uppercase;
}
.tl-item__title {
  margin-top: 6px; font-size: 20px;
  color: var(--gray-900); font-weight: 600;
}
.tl-item__desc {
  margin-top: 6px; color: var(--gray-500);
  font-size: 14px; line-height: 1.7;
}
.tl-badge {
  display: inline-block; margin-top: 10px;
  font-size: 11px; font-weight: 700; letter-spacing: .06em;
  text-transform: uppercase; padding: 3px 10px; border-radius: 999px;
  background: rgba(186,12,47,.08); color: var(--brand);
}

/* 滚动渐现 */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
.reveal.in { opacity: 1; transform: none; }

@media (max-width: 880px) {
  .timeline-section { padding: 80px 20px 100px; }
}
</style>

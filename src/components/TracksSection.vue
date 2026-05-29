<template>
  <section id="tracks" class="tracks-section">
    <div class="wrap">
      <div class="h-block reveal">
        <div class="eyebrow">{{ t('tracks.eyebrow') }}</div>
        <h2><span class="accent">{{ t('tracks.h2pre') }}</span>{{ t('tracks.h2suf') }}</h2>
        <p class="lead">{{ t('tracks.lead') }}</p>
      </div>

      <div class="tracks reveal">
        <div v-for="track in tracks" :key="track.id" class="track">
          <div class="track__num">TRACK / {{ String(track.id).padStart(2, '0') }}</div>
          <h3 class="track__title">{{ t(`tracks.t${track.id}name`) }}</h3>
          <span class="track__tag">{{ t(track.modeKey) }}{{ track.platformKey ? ' · ' + t(track.platformKey) : '' }}</span>
          <p class="track__desc">{{ t(`tracks.t${track.id}desc`) }}</p>
          <div class="track__tags">
            <span v-for="tag in tm(`tracks.t${track.id}tags`)" :key="tag" class="track__chip">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { tracks } from '../data/contestData.js'
const { t, tm } = useI18n()

onMounted(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
  }, { threshold: 0.12 })
  document.querySelectorAll('#tracks .reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.tracks-section {
  background: var(--gray-50);
  padding: 120px 24px;
}
.wrap { max-width: 1120px; margin: 0 auto; }

.h-block { text-align: center; margin-bottom: 72px; }
.h-block h2 {
  font-size: clamp(32px, 4.4vw, 52px);
  font-weight: 700;
  line-height: 1.1;
  margin-top: 8px;
  letter-spacing: -.02em;
  color: var(--gray-900);
}
.accent {
  background: linear-gradient(180deg, #BA0C2F 0%, #7A0A22 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.lead {
  max-width: 640px; margin: 16px auto 0;
  color: var(--gray-500); font-size: 17px; line-height: 1.65;
  white-space: nowrap;
}
@media (max-width: 900px) {
  .lead { white-space: normal; }
}

.tracks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.track {
  position: relative;
  border-radius: 22px;
  padding: 40px 30px;
  background: #fff;
  border: 1px solid var(--border);
  transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s cubic-bezier(.22,1,.36,1), border-color .5s;
  min-height: 340px;
  display: flex; flex-direction: column;
  box-shadow: 0 1px 2px rgba(0,0,0,.04);
  overflow: hidden;
}
.track::before {
  content: "";
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, #BA0C2F, #7A0A22);
}
.track:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(186,12,47,.12), 0 8px 20px rgba(0,0,0,.05);
  border-color: rgba(186,12,47,.18);
}

.track__num {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 12px;
  color: var(--brand);
  letter-spacing: .16em;
  font-weight: 600;
}
.track__title {
  margin-top: 14px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--gray-900);
  letter-spacing: -.01em;
}
.track__tag {
  margin-top: 12px;
  font-size: 12px;
  color: var(--brand);
  padding: 5px 12px;
  border: 1px solid rgba(186,12,47,.25);
  border-radius: 999px;
  display: inline-block;
  background: rgba(186,12,47,.06);
  font-weight: 500;
  align-self: flex-start;
}
.track__desc {
  margin-top: 20px;
  color: var(--gray-500);
  font-size: 14px;
  line-height: 1.75;
  flex: 1;
}
.track__tags {
  margin-top: 20px;
  display: flex; flex-wrap: wrap; gap: 6px;
}
.track__chip {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 4px;
  background: var(--gray-100);
  color: var(--gray-600);
  font-weight: 500;
}

/* 滚动渐现 */
.reveal { opacity: 0; transform: translateY(36px); transition: opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1); }
.reveal.in { opacity: 1; transform: none; }

@media (max-width: 880px) {
  .tracks-section { padding: 80px 20px; }
  .tracks { grid-template-columns: 1fr; }
  .track { min-height: auto; }
}
</style>

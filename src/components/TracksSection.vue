<template>
  <section id="tracks" class="section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">{{ t('tracks.eyebrow') }}</span>
        <h2>{{ t('tracks.title') }}</h2>
        <p class="section-header__sub">{{ t('tracks.sub') }}</p>
      </div>

      <div class="tracks-grid">
        <article v-for="track in tracks" :key="track.id" class="track-card" :style="{ '--tc': track.color }">
          <div class="track-card__header">
            <div class="track-card__meta">
              <span class="track-num">Track {{ String(track.id).padStart(2, '0') }}</span>
              <span class="track-mode">{{ t(`tracks.t${track.id}mode` in $tm('tracks') ? `tracks.t${track.id}mode` : 'tracks.mode') }}</span>
            </div>
            <h3 class="track-card__title">{{ t(`tracks.t${track.id}name`) }}</h3>
          </div>

          <p class="track-card__desc">{{ t(`tracks.t${track.id}desc`) }}</p>

          <div class="track-card__tags">
            <span v-for="tag in tm(`tracks.t${track.id}tags`)" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <div class="track-card__footer">
            <div class="footer-row">
              <span class="footer-label">{{ t('tracks.criteria') }}</span>
              <div class="criteria-list">
                <span v-for="c in tm(`tracks.t${track.id}criteria`)" :key="c" class="criteria-item">{{ c }}</span>
              </div>
            </div>
            <div class="footer-row footer-row--inline">
              <div v-if="track.platform" class="footer-item">
                <span class="footer-label">{{ t('tracks.platform') }}</span>
                <span class="footer-value">{{ track.platform }}</span>
              </div>
              <div class="footer-item">
                <span class="footer-label">{{ t('tracks.finalists') }}</span>
                <span class="footer-value footer-value--accent">{{ track.finalists }} {{ t('tracks.finalistsUnit') }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="tracks-note">
        <span class="note-icon">{{ t('tracks.noteIcon') }}</span>
        <p>{{ t('tracks.note') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { tracks } from '../data/contestData.js'
const { t, tm } = useI18n()
</script>

<style scoped>
.section-header__sub { margin-top: 10px; font-size: 15px; color: var(--gray-500); }
.tracks-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

.track-card {
  border: 1px solid var(--border); border-radius: var(--radius-lg);
  background: #fff; display: flex; flex-direction: column; gap: 0;
  overflow: hidden; box-shadow: var(--shadow-sm);
  transition: transform 240ms ease, box-shadow 240ms ease;
}
.track-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -8px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.06); }

.track-card__header {
  padding: 24px 24px 20px;
  background: linear-gradient(160deg, color-mix(in srgb, var(--tc) 8%, #fff) 0%, #fff 100%);
  border-bottom: 1px solid color-mix(in srgb, var(--tc) 12%, var(--border));
  display: flex; flex-direction: column; gap: 12px; position: relative;
}
.track-card__header::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: var(--tc); transition: height 240ms ease;
}
.track-card:hover .track-card__header::before { height: 6px; }

.track-card__meta { display: flex; align-items: center; gap: 8px; }
.track-num { font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--tc); }
.track-mode { font-size: 11px; font-weight: 600; color: var(--gray-500); background: var(--gray-100); padding: 2px 8px; border-radius: 4px; }
.track-card__title { font-size: 17px; font-weight: 800; color: var(--gray-900); line-height: 1.3; }

.track-card__desc { padding: 18px 24px 0; font-size: 14px; color: var(--gray-600); line-height: 1.75; flex: 1; }

.track-card__tags { padding: 14px 24px 0; display: flex; flex-wrap: wrap; gap: 6px; }
.tag {
  font-size: 12px; font-weight: 600; padding: 4px 11px; border-radius: 999px;
  background: color-mix(in srgb, var(--tc) 9%, #fff);
  color: var(--tc); border: 1px solid color-mix(in srgb, var(--tc) 18%, #fff);
}

.track-card__footer {
  padding: 16px 24px 20px; margin-top: 16px;
  border-top: 1px solid var(--gray-100); display: flex; flex-direction: column; gap: 12px;
}
.footer-row { display: flex; flex-direction: column; gap: 6px; }
.footer-row--inline { flex-direction: row; gap: 20px; }
.footer-item { display: flex; flex-direction: column; gap: 4px; }
.footer-label { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gray-400); }
.footer-value { font-size: 13px; font-weight: 600; color: var(--gray-700); }
.footer-value--accent { color: var(--tc); }
.criteria-list { display: flex; flex-wrap: wrap; gap: 5px; }
.criteria-item { font-size: 12px; padding: 3px 9px; background: var(--gray-100); border-radius: 4px; color: var(--gray-600); font-weight: 500; }

.tracks-note {
  margin-top: 28px; padding: 16px 22px;
  background: var(--gray-50); border: 1px solid var(--border); border-radius: var(--radius-md);
  display: flex; align-items: flex-start; gap: 12px;
}
.note-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
.tracks-note p { font-size: 14px; color: var(--gray-600); line-height: 1.7; margin: 0; }

@media (max-width: 1024px) { .tracks-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; } }
</style>

<template>
  <div class="contest">
    <!-- Hero -->
    <section class="hero">
      <div class="wrap">
        <div class="hero__eyebrow">{{ t('contest.eyebrow') }}</div>
        <h1 class="hero__title">{{ t('contest.title') }}</h1>
        <p class="hero__lead">{{ t('contest.lead') }}</p>

        <!-- Track Tabs -->
        <div class="tabs" role="tablist">
          <button
            v-for="track in tracks"
            :key="track.id"
            role="tab"
            :aria-selected="active === track.id"
            class="tab"
            :class="{ 'tab--active': active === track.id }"
            :style="{ '--c': track.color }"
            @click="active = track.id"
          >
            <span class="tab__num">TRACK / {{ String(track.id).padStart(2, '0') }}</span>
            <span class="tab__name">{{ t(`contest.track${track.id}.formalName`) }}</span>
            <span class="tab__cat">{{ t(`tracks.t${track.id}name`) }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Selected Track -->
    <section
      v-for="track in tracks"
      v-show="active === track.id"
      :key="track.id"
      class="track"
      :style="{ '--c': track.color }"
    >
      <div class="wrap">
        <!-- Header -->
        <header class="t-head">
          <div class="t-head__num">TRACK / {{ String(track.id).padStart(2, '0') }}</div>
          <h2 class="t-head__title">{{ t(`contest.track${track.id}.formalName`) }}</h2>
          <div class="t-head__meta">
            <span class="meta-chip">{{ t(`tracks.t${track.id}name`) }}</span>
            <span class="meta-chip">{{ t(`contest.track${track.id}.mode`) }}</span>
            <span class="meta-chip">{{ t(`contest.track${track.id}.platform`) }}</span>
          </div>
        </header>

        <!-- Background -->
        <div class="block">
          <h3 class="block__title">{{ t('contest.bgTitle') }}</h3>
          <p class="block__p">{{ t(`contest.track${track.id}.bg`) }}</p>
        </div>

        <!-- Description -->
        <div class="block">
          <h3 class="block__title">{{ t('contest.descTitle') }}</h3>
          <p
            v-for="(p, i) in tm(`contest.track${track.id}.descParas`)"
            :key="i"
            class="block__p"
          >{{ p }}</p>

          <!-- Track 3: Two-type cards -->
          <div v-if="track.id === 3" class="dual">
            <div class="type-card type-card--tech">
              <div class="type-card__tag">{{ t('contest.typeLabelTech') }}</div>
              <h4 class="type-card__title">{{ t('contest.track3.typeTechTitle') }}</h4>
              <p class="type-card__desc">{{ t('contest.track3.typeTechDesc') }}</p>
              <div class="submit-label">{{ t('contest.submitTitle') }}</div>
              <ul class="bullets">
                <li v-for="(s, i) in tm('contest.track3.typeTechSubmit')" :key="i">{{ s }}</li>
              </ul>
            </div>
            <div class="type-card type-card--policy">
              <div class="type-card__tag">{{ t('contest.typeLabelPolicy') }}</div>
              <h4 class="type-card__title">{{ t('contest.track3.typePolicyTitle') }}</h4>
              <p class="type-card__desc">{{ t('contest.track3.typePolicyDesc') }}</p>
              <div class="submit-label">{{ t('contest.submitTitle') }}</div>
              <ul class="bullets">
                <li v-for="(s, i) in tm('contest.track3.typePolicySubmit')" :key="i">{{ s }}</li>
              </ul>
            </div>
          </div>

          <!-- Tracks 1/2: regular submit list -->
          <template v-else>
            <h4 class="sub-title">{{ t('contest.submitTitle') }}</h4>
            <ul class="bullets">
              <li v-for="(s, i) in tm(`contest.track${track.id}.submit`)" :key="i">{{ s }}</li>
            </ul>
          </template>
        </div>

        <!-- Method -->
        <div class="block">
          <h3 class="block__title">{{ t('contest.methodTitle') }}</h3>
          <div class="phases">
            <div class="phase">
              <div class="phase__head">
                <span class="phase__num">01</span>
                <span class="phase__name">{{ t('contest.phase1Title') }}</span>
              </div>
              <p class="phase__body">{{ t(`contest.track${track.id}.phase1`) }}</p>
            </div>
            <div class="phase">
              <div class="phase__head">
                <span class="phase__num">02</span>
                <span class="phase__name">{{ t('contest.phase2Title') }}</span>
              </div>
              <p class="phase__body">{{ t(`contest.track${track.id}.phase2`) }}</p>
            </div>
          </div>
        </div>

        <!-- Criteria -->
        <div class="block">
          <h3 class="block__title">{{ t('contest.criteriaTitle') }}</h3>

          <!-- Track 2: detailed criteria with descriptions -->
          <div v-if="track.id === 2" class="crit-grid">
            <div v-for="(c, i) in tm('contest.track2.criteria')" :key="i" class="crit-card">
              <div class="crit-card__num">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="crit-card__title">{{ c.title }}</div>
              <p class="crit-card__desc">{{ c.desc }}</p>
            </div>
          </div>
          <!-- Tracks 1/3: short tag list -->
          <div v-else class="crit-tags">
            <span v-for="(c, i) in tm(`contest.track${track.id}.criteria`)" :key="i" class="crit-tag">{{ c }}</span>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { tracks } from '../data/contestData.js'

const { t, tm } = useI18n()

const active = ref(1)
</script>

<style scoped>
.contest {
  min-height: 100vh;
  background:
    linear-gradient(180deg, #fff 0%, #fcf7f8 28%, #fff 72%);
}

.wrap {
  width: min(1440px, calc(100vw - 32px));
  margin: 0 auto;
  padding: 0 16px;
}

/* ===== Hero ===== */
.hero {
  position: relative;
  overflow: hidden;
  padding: clamp(80px, 14vh, 140px) 0 64px;
  background:
    radial-gradient(48% 42% at 12% 8%, rgba(186,12,47,.18), transparent 72%),
    radial-gradient(36% 30% at 88% 18%, rgba(122,10,34,.12), transparent 78%),
    linear-gradient(180deg, #fff7f8 0%, #faf6f7 100%);
  border-bottom: 1px solid rgba(186,12,47,.12);
}
.hero::before,
.hero::after {
  content: "";
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}
.hero::before {
  top: -140px;
  right: -40px;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(186,12,47,.16) 0%, rgba(186,12,47,0) 70%);
}
.hero::after {
  left: -120px;
  bottom: -160px;
  width: 360px;
  height: 360px;
  background: radial-gradient(circle, rgba(122,10,34,.12) 0%, rgba(122,10,34,0) 72%);
}
.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .16em;
  color: var(--brand);
  text-transform: uppercase;
  background: rgba(186,12,47,.08);
  border: 1px solid rgba(186,12,47,.12);
  box-shadow: 0 8px 20px rgba(186,12,47,.06);
}
.hero__eyebrow::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--brand);
}
.hero__title {
  margin-top: 14px;
  max-width: 12ch;
  font-size: clamp(32px, 4.6vw, 52px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -.02em;
  color: var(--gray-900);
}
.hero__lead {
  margin-top: 20px;
  font-size: 17px;
  line-height: 1.75;
  color: var(--gray-600);
  max-width: 720px;
}
.hero__notice {
  margin-top: 22px;
  display: inline-block;
  padding: 8px 14px;
  border-radius: 6px;
  background: rgba(186,12,47,.06);
  color: var(--brand-dark);
  font-size: 13px;
  border: 1px solid rgba(186,12,47,.14);
}

/* ===== Tabs ===== */
.tabs {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 820px) {
  .tabs { grid-template-columns: 1fr; }
}
.tab {
  text-align: left;
  padding: 22px 22px 24px;
  background: linear-gradient(180deg, rgba(255,255,255,.98) 0%, rgba(252,247,248,.96) 100%);
  border: 1px solid rgba(186,12,47,.10);
  border-radius: 18px;
  cursor: pointer;
  transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s, border-color .25s, background .25s;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: inherit;
  overflow: hidden;
}
.tab::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--brand), color-mix(in srgb, var(--c) 55%, white));
  opacity: 0;
  transition: opacity .25s;
}
.tab::after {
  content: "";
  position: absolute;
  top: -18px;
  right: -18px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(186,12,47,.12) 0%, rgba(186,12,47,0) 72%);
  opacity: 0;
  transition: opacity .25s ease;
}
.tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(122,10,34,.10);
  border-color: rgba(186,12,47,.24);
}
.tab--active {
  border-color: rgba(186,12,47,.28);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(251,241,243,1) 100%);
  box-shadow: 0 18px 36px rgba(122,10,34,.12);
}
.tab--active::before,
.tab:hover::before,
.tab--active::after,
.tab:hover::after { opacity: 1; }

.tab__num {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: .18em;
  font-weight: 700;
  color: var(--c);
}
.tab__name {
  font-size: 15.5px;
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1.4;
  letter-spacing: -.005em;
}
.tab__cat {
  margin-top: auto;
  font-size: 12px;
  color: var(--gray-500);
  font-weight: 500;
}

/* ===== Track section ===== */
.track {
  padding: 72px 0 96px;
}

/* Header */
.t-head {
  margin-bottom: 56px;
  padding: 28px 30px 30px;
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(186,12,47,.08) 0%, rgba(186,12,47,.02) 42%, rgba(255,255,255,.98) 100%);
  border: 1px solid rgba(186,12,47,.12);
  box-shadow: 0 16px 36px rgba(122,10,34,.08);
}
.t-head__num {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: .2em;
  font-weight: 700;
  color: var(--brand);
}
.t-head__title {
  margin-top: 14px;
  font-size: clamp(26px, 3.4vw, 38px);
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -.015em;
  color: var(--gray-900);
}
.t-head__title::after {
  content: "";
  display: block;
  width: 56px;
  height: 3px;
  margin-top: 18px;
  background: linear-gradient(90deg, var(--brand), rgba(186,12,47,.22));
  border-radius: 2px;
}
.t-head__meta {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.meta-chip {
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(186,12,47,.08);
  color: var(--brand);
  border: 1px solid rgba(186,12,47,.16);
}

/* Block */
.block {
  margin-top: 48px;
  padding: 30px 32px 32px;
  background: #fff;
  border: 1px solid rgba(186,12,47,.10);
  border-radius: 18px;
  box-shadow: 0 14px 32px rgba(122,10,34,.06);
  position: relative;
  overflow: hidden;
}
.block::before {
  content: "";
  position: absolute;
  top: -60px;
  right: -60px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(186,12,47,.10) 0%, rgba(186,12,47,0) 72%);
  pointer-events: none;
}

.block__title {
  margin: -30px -32px 24px;
  padding: 16px 24px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -.005em;
  display: flex;
  align-items: baseline;
  gap: 12px;
  background: linear-gradient(135deg, #8f1823 0%, #ba0c2f 58%, #7a0a22 100%);
}
.block__title::before {
  content: "";
  display: inline-block;
  width: 4px; height: 18px;
  background: rgba(255,255,255,.92);
  border-radius: 2px;
  transform: translateY(2px);
}
.block__total {
  margin-left: auto;
  font-size: 14px;
  color: var(--c);
  font-weight: 700;
  letter-spacing: .02em;
}
.block__p {
  margin-top: 16px;
  color: var(--gray-700);
  font-size: 15px;
  line-height: 1.85;
  max-width: 78ch;
}
.block__p + .block__p { margin-top: 12px; }

.sub-title {
  margin-top: 22px;
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  color: var(--brand);
  letter-spacing: .04em;
  background: rgba(186,12,47,.08);
  border: 1px solid rgba(186,12,47,.14);
}

.bullets {
  margin-top: 12px;
  padding-left: 0;
}
.bullets li {
  position: relative;
  padding: 8px 0 8px 22px;
  color: var(--gray-700);
  font-size: 14.5px;
  line-height: 1.75;
  border-bottom: 1px dashed rgba(186,12,47,.14);
}
.bullets li:last-child { border-bottom: none; }
.bullets li::before {
  content: "";
  position: absolute;
  left: 4px; top: 18px;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--c);
}

/* Phases */
.phases {
  margin-top: 18px;
  display: grid;
  gap: 16px;
}
.phase {
  padding: 22px 24px;
  border-radius: 12px;
  border: 1px solid rgba(186,12,47,.12);
  background: linear-gradient(180deg, rgba(186,12,47,.03) 0%, #fff 100%);
  border-left: 4px solid var(--brand);
  box-shadow: 0 8px 18px rgba(122,10,34,.05);
}

.phase__head {
  display: flex;
  align-items: center;
  gap: 12px;
}
.phase__num {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 13px;
  font-weight: 700;
  color: var(--brand);
  letter-spacing: .12em;
}
.phase__name {
  font-size: 15px;
  font-weight: 700;
  color: var(--gray-900);
}
.phase__body {
  margin-top: 12px;
  color: var(--gray-700);
  font-size: 14.5px;
  line-height: 1.85;
}

/* Criteria */
.crit-tags {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.crit-tag {
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(186,12,47,.08);
  color: var(--brand);
  font-size: 13.5px;
  font-weight: 600;
  border: 1px solid rgba(186,12,47,.14);
}

.crit-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
@media (max-width: 720px) {
  .crit-grid { grid-template-columns: 1fr; }
}
.crit-card {
  padding: 20px 22px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(186,12,47,.05) 0%, #fff 100%);
  border: 1px solid rgba(186,12,47,.12);
  position: relative;
  box-shadow: 0 10px 24px rgba(122,10,34,.05);
}
.crit-card__num {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 11px;
  font-weight: 700;
  color: var(--brand);
  letter-spacing: .14em;
}
.crit-card__title {
  margin-top: 8px;
  font-size: 15.5px;
  font-weight: 700;
  color: var(--gray-900);
}
.crit-card__desc {
  margin-top: 8px;
  color: var(--gray-600);
  font-size: 13.5px;
  line-height: 1.7;
}

/* Track 3 dual cards */
.dual {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
@media (max-width: 820px) {
  .dual { grid-template-columns: 1fr; }
}
.type-card {
  padding: 24px 26px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(186,12,47,.04) 0%, #fff 100%);
  border: 1px solid rgba(186,12,47,.12);
  border-top: 4px solid var(--brand);
  box-shadow: 0 10px 24px rgba(122,10,34,.05);
}
.type-card__tag {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  color: var(--brand);
}
.type-card__title {
  margin-top: 8px;
  font-size: 17px;
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1.4;
}
.type-card__desc {
  margin-top: 10px;
  color: var(--gray-600);
  font-size: 14px;
  line-height: 1.75;
}
.submit-label {
  margin-top: 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .04em;
  color: var(--brand-dark);
  text-transform: uppercase;
}

/* Awards */
.block--awards .awards {
  margin-top: 14px;
}
.awards {
  display: grid;
  gap: 8px;
}
.award {
  display: grid;
  grid-template-columns: 100px 60px 1fr;
  gap: 16px;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 8px;
  align-items: center;
}

.award__rank {
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-900);
}
.award__count {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 13px;
  color: var(--gray-500);
}
.award__prize {
  font-size: 14px;
  font-weight: 600;
  color: var(--c);
  text-align: right;
}
@media (max-width: 540px) {
  .award { grid-template-columns: 1fr auto; }
  .award__count { display: none; }
}

/* Back to top */
@media (max-width: 720px) {
  .track { padding: 56px 0 72px; }
  .t-head { padding: 22px 20px 24px; }
  .block { padding: 22px 20px; }
  .block__title {
    margin: -22px -20px 20px;
    padding: 14px 18px;
  }
  .phase { padding: 18px 18px; }
  .hero { padding: 80px 0 48px; }
  .hero__lead { font-size: 15px; }
  .wrap {
    width: auto;
    padding: 0 14px;
  }
}
</style>

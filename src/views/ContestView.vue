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

        <!-- Awards -->
        <div class="block block--awards">
          <h3 class="block__title">
            {{ t('contest.awardTitle') }}
            <span class="block__total">{{ awardFor(track.id).totalPrize }}</span>
          </h3>
          <ul class="awards">
            <li v-for="a in awardFor(track.id).awards" :key="a.rank" class="award">
              <span class="award__rank">{{ a.rank }}</span>
              <span class="award__count">×{{ a.count }}</span>
              <span class="award__prize">{{ a.prize }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { tracks, awardDetails } from '../data/contestData.js'

const { t, tm } = useI18n()

const active = ref(1)
const awardFor = (id) => awardDetails.find(a => a.trackId === id) || { totalPrize: '', awards: [] }
</script>

<style scoped>
.contest {
  min-height: 100vh;
}

.wrap {
  max-width: 920px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ===== Hero ===== */
.hero {
  padding: clamp(80px, 14vh, 140px) 0 64px;
  background:
    radial-gradient(80% 60% at 50% 0%, rgba(186,12,47,.06), transparent 70%),
    var(--gray-50);
  border-bottom: 1px solid var(--border);
}
.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .2em;
  color: var(--brand);
  text-transform: uppercase;
}
.hero__eyebrow::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--brand);
}
.hero__title {
  margin-top: 14px;
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
  gap: 12px;
}
@media (max-width: 820px) {
  .tabs { grid-template-columns: 1fr; }
}
.tab {
  text-align: left;
  padding: 22px 22px 24px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
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
  height: 3px;
  background: var(--c);
  opacity: 0;
  transition: opacity .25s;
}
.tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0,0,0,.06);
  border-color: color-mix(in srgb, var(--c) 28%, var(--border));
}
.tab--active {
  border-color: var(--c);
  background: color-mix(in srgb, var(--c) 5%, white);
  box-shadow: 0 12px 28px color-mix(in srgb, var(--c) 14%, transparent);
}
.tab--active::before { opacity: 1; }

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
.t-head { margin-bottom: 56px; }
.t-head__num {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: .2em;
  font-weight: 700;
  color: var(--c);
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
  background: var(--c);
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
  background: color-mix(in srgb, var(--c) 8%, white);
  color: var(--c);
  border: 1px solid color-mix(in srgb, var(--c) 22%, white);
}

/* Block */
.block {
  margin-top: 48px;
  padding: 28px 30px;
  background: var(--gray-50);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);
}

.block__title {
  font-size: 18px;
  font-weight: 700;
  color: var(--gray-900);
  letter-spacing: -.005em;
  display: flex;
  align-items: baseline;
  gap: 12px;
}
.block__title::before {
  content: "";
  display: inline-block;
  width: 4px; height: 18px;
  background: var(--c);
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
}
.block__p + .block__p { margin-top: 12px; }

.sub-title {
  margin-top: 22px;
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-900);
  letter-spacing: .04em;
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
  border-bottom: 1px dashed var(--border);
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
  border: 1px solid var(--border);
  background: #fff;
  border-left: 4px solid var(--c);
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
  color: var(--c);
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
  background: color-mix(in srgb, var(--c) 6%, white);
  color: var(--c);
  font-size: 13.5px;
  font-weight: 600;
  border: 1px solid color-mix(in srgb, var(--c) 18%, white);
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
  border-radius: 12px;
  background: color-mix(in srgb, var(--c) 4%, white);
  border: 1px solid color-mix(in srgb, var(--c) 14%, white);
  position: relative;
}
.crit-card__num {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 11px;
  font-weight: 700;
  color: var(--c);
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
  border-radius: 12px;
  background: #fff;
  border: 1px solid var(--border);
  border-top: 3px solid var(--c);
  box-shadow: 0 2px 6px rgba(0,0,0,.04);
}
.type-card__tag {
  font-family: "SF Mono", ui-monospace, monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  color: var(--c);
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
  color: var(--gray-500);
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
  .block { padding: 22px 20px; }
  .phase { padding: 18px 18px; }
  .hero { padding: 80px 0 48px; }
  .hero__lead { font-size: 15px; }
}
</style>

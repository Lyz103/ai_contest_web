<template>
  <section id="awards" class="section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">{{ t('awards.eyebrow') }}</span>
        <h2>{{ t('awards.title') }}</h2>
      </div>
      <div class="review-steps">
        <div v-for="(step, i) in tm('awards.steps')" :key="step.title" class="review-step">
          <div class="review-step__icon">{{ step.icon }}</div>
          <div class="review-step__num">{{ i + 1 }}</div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.desc }}</p>
          <div v-if="i < tm('awards.steps').length - 1" class="review-step__arrow">→</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
</script>

<style scoped>
.review-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }

.review-step {
  position: relative; padding: 28px 20px 24px;
  background: #fff; border: 1px solid var(--border); border-right: none;
  text-align: center; transition: background 200ms;
}
.review-step:first-child { border-radius: var(--radius-lg) 0 0 var(--radius-lg); }
.review-step:last-child { border-right: 1px solid var(--border); border-radius: 0 var(--radius-lg) var(--radius-lg) 0; }
.review-step:hover { background: var(--gray-50); }

.review-step__num {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  width: 24px; height: 24px; background: var(--brand); color: #fff;
  font-size: 12px; font-weight: 800; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 3px #fff;
}
.review-step__icon { font-size: 30px; margin-bottom: 12px; margin-top: 4px; }
.review-step h4 { font-size: 15px; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; }
.review-step p { font-size: 13px; color: var(--gray-600); line-height: 1.6; }

.review-step__arrow {
  position: absolute; top: 50%; right: -14px; transform: translateY(-50%);
  font-size: 18px; color: var(--brand); font-weight: 700; z-index: 1;
  background: #fff; padding: 2px 0;
}

@media (max-width: 1024px) {
  .review-steps { grid-template-columns: 1fr 1fr; }
  .review-step { border-right: 1px solid var(--border); border-bottom: none; }
  .review-step:first-child { border-radius: var(--radius-lg) 0 0 0; }
  .review-step:nth-child(2) { border-radius: 0 var(--radius-lg) 0 0; }
  .review-step:nth-child(3) { border-radius: 0 0 0 var(--radius-lg); }
  .review-step:last-child { border-radius: 0 0 var(--radius-lg) 0; }
  .review-step__arrow { display: none; }
}
@media (max-width: 600px) {
  .review-steps { grid-template-columns: 1fr; }
  .review-step { border-right: 1px solid var(--border); border-bottom: none; border-radius: 0 !important; }
  .review-step:first-child { border-radius: var(--radius-lg) var(--radius-lg) 0 0 !important; }
  .review-step:last-child { border-bottom: 1px solid var(--border) !important; border-radius: 0 0 var(--radius-lg) var(--radius-lg) !important; }
}
</style>

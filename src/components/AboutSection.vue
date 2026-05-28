<template>
  <section id="about" class="section section--alt">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">{{ t('about.eyebrow') }}</span>
        <h2>{{ t('about.title') }}</h2>
      </div>

      <div class="about__grid">
        <div class="about__intro">
          <p><strong>{{ t('about.p1b') }}</strong>{{ t('about.p1').replace('{b1}', '') }}</p>
          <p><strong>{{ t('about.p2b') }}</strong>{{ t('about.p2').replace('{b2}', '') }}</p>
          <p>{{ t('about.p3') }}</p>

          <div class="about__highlights">
            <div v-for="h in highlights" :key="h.labelKey" class="highlight-item">
              <span class="highlight-item__icon">{{ h.icon }}</span>
              <div>
                <strong>{{ t(h.labelKey) }}</strong>
                <p>{{ t(h.descKey) }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about__orgs">
          <h3 class="orgs__title">{{ t('about.orgsTitle') }}</h3>
          <div class="orgs__list">
            <div v-for="org in orgs" :key="org.name" class="org-card" :class="{ 'org-card--primary': org.primary }">
              <span class="org-card__role">{{ org.role }}</span>
              <strong class="org-card__name">{{ org.name }}</strong>
            </div>
          </div>
          <div class="orgs__support">
            <h4>{{ t('about.supportTitle') }}</h4>
            <p>{{ t('about.supportDesc').replace('{p1}', '「玉兰-融观」').replace('{p2}', '「玉兰-万象」') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { orgs as rawOrgs } from '../data/contestData.js'

const { t, locale } = useI18n()

const orgNameMap = {
  '中国人民大学高瓴人工智能学院': 'Gaoling School of AI, RUC',
  '百融云创': 'Bairong Cloud',
  '高瓴创投': 'Hillhouse Ventures',
}

const orgs = computed(() => rawOrgs.map(o => ({
  ...o,
  role: locale.value === 'zh'
    ? o.role
    : (o.role === '主办单位' ? 'Host' : 'Co-host'),
  name: locale.value === 'zh' ? o.name : (orgNameMap[o.name] ?? o.name),
})))

const highlights = [
  { icon: '🌍', labelKey: 'about.h1label', descKey: 'about.h1desc' },
  { icon: '💡', labelKey: 'about.h2label', descKey: 'about.h2desc' },
  { icon: '🏆', labelKey: 'about.h3label', descKey: 'about.h3desc' },
]
</script>

<style scoped>
.about__grid {
  display: grid; grid-template-columns: 1fr 360px; gap: 56px; align-items: start;
}
.about__intro { display: flex; flex-direction: column; gap: 16px; }
.about__intro p { font-size: 16px; color: var(--gray-700); line-height: 1.75; }
.about__intro strong { color: var(--gray-900); font-weight: 600; }

.about__highlights {
  display: flex; flex-direction: column; gap: 16px; margin-top: 8px;
  padding: 24px; background: var(--brand-50);
  border-radius: var(--radius-lg); border: 1px solid rgba(192,57,43,0.12);
}
.highlight-item { display: flex; gap: 14px; align-items: flex-start; }
.highlight-item__icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
.highlight-item strong { display: block; font-size: 14px; font-weight: 700; color: var(--gray-900); margin-bottom: 2px; }
.highlight-item p { font-size: 13px; color: var(--gray-600); margin: 0; line-height: 1.5; }

.orgs__title { font-size: 16px; font-weight: 700; color: var(--gray-900); margin-bottom: 16px; }
.orgs__list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
.org-card {
  padding: 16px 20px; background: #fff; border: 1px solid var(--border);
  border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 4px; box-shadow: var(--shadow-sm);
}
.org-card--primary { border-left: 4px solid var(--brand); background: var(--brand-light); }
.org-card__role { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gray-500); }
.org-card--primary .org-card__role { color: var(--brand); }
.org-card__name { font-size: 15px; font-weight: 700; color: var(--gray-900); }

.orgs__support { padding: 20px; background: var(--gray-50); border: 1px solid var(--border); border-radius: var(--radius-md); }
.orgs__support h4 { font-size: 13px; font-weight: 700; color: var(--gray-700); margin-bottom: 8px; }
.orgs__support p { font-size: 13px; color: var(--gray-600); line-height: 1.6; }

@media (max-width: 900px) { .about__grid { grid-template-columns: 1fr; gap: 40px; } }
</style>

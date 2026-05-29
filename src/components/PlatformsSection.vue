<template>
  <section class="platforms-section">
    <div class="wrap">
      <div class="h-block reveal">
        <div class="eyebrow">{{ t('platforms.eyebrow') }}</div>
        <h2>{{ t('platforms.h2pre') }} <span class="accent">{{ t('platforms.h2suf') }}</span></h2>
        <p class="lead">{{ t('platforms.lead') }}</p>
      </div>

      <div class="plats reveal">
        <div class="plat">
          <div class="plat__tag">{{ t('platforms.p1tag') }}</div>
          <div class="plat__name">{{ t('platforms.p1name') }}</div>
          <div class="plat__desc">{{ t('platforms.p1desc') }}</div>
        </div>
        <div class="plat">
          <div class="plat__tag">{{ t('platforms.p2tag') }}</div>
          <div class="plat__name">{{ t('platforms.p2name') }}</div>
          <div class="plat__desc">{{ t('platforms.p2desc') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
onMounted(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
  }, { threshold: 0.12 })
  document.querySelectorAll('.platforms-section .reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.platforms-section {
  background: var(--gray-50);
  padding: 120px 24px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
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
.lead {
  max-width: 640px; margin: 16px auto 0;
  color: var(--gray-500); font-size: 17px; line-height: 1.65;
}

.plats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.plat {
  padding: 48px 36px;
  border-radius: 22px;
  background: #fff;
  border: 1px solid var(--border);
  transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s cubic-bezier(.22,1,.36,1);
  box-shadow: 0 1px 2px rgba(0,0,0,.04);
}
.plat:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(186,12,47,.10), 0 8px 20px rgba(0,0,0,.05);
}

.plat__tag {
  font-size: 12px; color: var(--brand);
  letter-spacing: .18em; text-transform: uppercase; font-weight: 600;
}
.plat__name {
  margin-top: 10px;
  font-size: 28px; color: var(--gray-900);
  font-weight: 600; letter-spacing: -.01em;
}
.plat__desc {
  margin-top: 16px;
  color: var(--gray-500); font-size: 15px; line-height: 1.7;
}

/* 滚动渐现 */
.reveal { opacity: 0; transform: translateY(36px); transition: opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1); }
.reveal.in { opacity: 1; transform: none; }

@media (max-width: 880px) {
  .platforms-section { padding: 80px 20px; }
  .plats { grid-template-columns: 1fr; }
}
</style>

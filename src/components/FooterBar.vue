<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="logo-badge">RUC</span>
          <span>{{ t('hero.titleEm') }}</span>
        </div>
        <p class="footer__tagline">{{ t('footer.tagline') }}</p>
      </div>

      <div class="footer__links">
        <div class="footer__col">
          <h4>{{ t('footer.quickNav') }}</h4>
          <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
          <RouterLink to="/contest">{{ t('nav.contest') }}</RouterLink>
          <RouterLink to="/rank">{{ t('nav.rank') }}</RouterLink>
          <RouterLink to="/project">{{ t('nav.project') }}</RouterLink>
          <RouterLink to="/support">{{ t('nav.support') }}</RouterLink>
        </div>
        <div class="footer__col">
          <h4>{{ t('footer.orgs') }}</h4>
          <span>{{ t('footer.host') }}</span>
          <span>{{ t('footer.co1') }}</span>
          <span>{{ t('footer.co2') }}</span>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <span>{{ t('footer.copyright') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.footer {
  background: var(--gray-900);
  color: var(--gray-400);
  margin-top: auto;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  padding-top: 48px;
  padding-bottom: 40px;
  align-items: start;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
}

.logo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--brand);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.05em;
  border-radius: 6px;
  flex-shrink: 0;
}

.footer__tagline {
  font-size: 13px;
  color: var(--gray-500);
  max-width: 320px;
  line-height: 1.5;
}

.footer__links {
  display: flex;
  gap: 48px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__col h4 {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray-300);
  margin-bottom: 4px;
}

.footer__col a,
.footer__col span {
  font-size: 13px;
  color: var(--gray-500);
  transition: color 150ms;
  line-height: 1.4;
}

.footer__col a:hover {
  color: #fff;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 16px 0;
  font-size: 12px;
  color: var(--gray-600);
}

@media (max-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer__links {
    gap: 32px;
    flex-wrap: wrap;
  }
}
</style>

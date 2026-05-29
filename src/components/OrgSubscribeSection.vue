<template>
  <section class="org-section">
    <div class="wrap reveal">
      <div class="org-label">{{ t('org.label') }}</div>
      <div class="org-name">{{ t('org.name') }}</div>
      <div class="org-co">
        <span>{{ t('org.co1') }}</span>
        <span>{{ t('org.co2') }}</span>
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
  document.querySelectorAll('.org-section .reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.org-section {
  padding: 120px 24px;
  text-align: center;
  background: #fff;
}
.wrap { max-width: 1120px; margin: 0 auto; }

.org-label {
  font-size: 11px; letter-spacing: .32em;
  color: var(--gray-400); text-transform: uppercase; font-weight: 600;
}
.org-name {
  margin-top: 18px;
  font-size: clamp(22px, 3vw, 34px);
  color: var(--gray-900); font-weight: 600; letter-spacing: -.01em;
}
.org-co {
  margin-top: 28px;
  display: flex; justify-content: center; gap: 0; flex-wrap: wrap;
  color: var(--gray-500); font-size: 14px;
}
.org-co span { position: relative; padding: 0 18px; }
.org-co span + span::before {
  content: "";
  position: absolute; left: -2px; top: 50%;
  width: 4px; height: 4px; border-radius: 50%;
  background: var(--brand); transform: translateY(-50%); opacity: .6;
}

.reveal { opacity: 0; transform: translateY(36px); transition: opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1); }
.reveal.in { opacity: 1; transform: none; }

@media (max-width: 520px) {
  .org-section { padding: 80px 20px; }
}
</style>

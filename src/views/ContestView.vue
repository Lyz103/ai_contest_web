<template>
  <div class="page-placeholder">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">{{ t('placeholder.contest.eyebrow') }}</span>
        <h2>{{ t('placeholder.contest.title') }}</h2>
      </div>
      <p class="placeholder-tip">{{ t('placeholder.contest.tip') }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.page-placeholder {
  padding: 120px 0;
  min-height: calc(100vh - var(--nav-h));
  display: flex;
  align-items: center;
}
.placeholder-tip {
  text-align: center;
  color: var(--gray-400);
  font-size: 16px;
  margin-top: 16px;
}
</style>

<template>
  <section class="section video-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">{{ t('video.eyebrow') }}</span>
        <h2>{{ t('video.h2pre') }} <span class="accent-text">{{ t('video.h2suf') }}</span></h2>
        <p class="section-header__sub">{{ t('video.lead') }}</p>
      </div>

      <div class="video-card">
        <video
          class="video-card__video"
          :src="`${baseUrl}contest.mp4`"
          controls
          playsinline
          preload="metadata"
        ></video>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>
.video-section { background: #fff; padding-top: 40px; }

.section-header__sub {
  margin-top: 10px;
  font-size: 15px;
  color: var(--gray-500);
}

.accent-text {
  background: linear-gradient(180deg, #BA0C2F 0%, #7A0A22 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.video-card {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(186,12,47,.10), 0 10px 30px rgba(0,0,0,.06);
  border: 1px solid var(--border);
  background: #000;
}

.video-card__video {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: contain;
}
</style>

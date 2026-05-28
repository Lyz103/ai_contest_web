<template>
  <section id="hero" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <svg class="hero__bg-grid" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(100,100,120,0.07)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="hero__inner">
      <div class="hero__logo-mark">
        <img src="/yulan-logo.png" alt="玉兰 Logo" />
      </div>

      <div class="hero__host-line">
        <span class="host-dot"></span>
        <span>{{ t('hero.host') }}</span>
        <span class="host-sep">·</span>
        <span>{{ t('hero.cohost') }}</span>
      </div>

      <h1 class="hero__title">
        <template v-if="locale === 'zh'">全球人工智能<em>创新·治理·安全</em>大赛</template>
        <template v-else>Global AI <em>Innovation · Governance · Safety</em> Competition</template>
      </h1>

      <p class="hero__sub">{{ t('hero.sub') }}</p>

      <div class="hero__video-wrap">
        <!-- 未播放时显示封面+按钮，不加载视频 -->
        <div v-if="!playing" class="hero__video-cover" @click="startPlay">
          <div class="play-btn">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.45)"/>
              <polygon points="19,14 38,24 19,34" fill="#fff"/>
            </svg>
          </div>
          <span class="play-label">{{ locale === 'zh' ? '点击播放大赛宣传片' : 'Click to play' }}</span>
        </div>
        <!-- 点击后才渲染 video 标签，避免首屏加载 245MB -->
        <video v-else ref="videoRef" class="hero__video" src="/contest.mp4" controls playsinline></video>
      </div>

      <RouterLink to="/contest" class="hero__cta">
        {{ t('hero.cta') }}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const playing = ref(false)
const videoRef = ref(null)

function startPlay() {
  playing.value = true
  // 等 DOM 更新后播放
  setTimeout(() => { videoRef.value?.play() }, 50)
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, #f5f0f0 0%, #ede8ec 40%, #f0eef5 100%);
  overflow: hidden;
}
.hero__bg { position: absolute; inset: 0; pointer-events: none; }
.hero__bg-grid { position: absolute; inset: 0; opacity: 0.9; }

.hero__inner {
  position: relative;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  gap: clamp(14px, 2.2vh, 26px);
  padding: clamp(48px, 8vh, 96px) 24px;
  max-width: 760px; width: 100%;
}

.hero__logo-mark {
  width: clamp(80px, 10vw, 140px); height: clamp(80px, 10vw, 140px);
  filter: drop-shadow(0 12px 28px rgba(192, 57, 43, 0.22));
  animation: float 5s ease-in-out infinite;
}
.hero__logo-mark img { width: 100%; height: 100%; object-fit: contain; }
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.hero__host-line {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: center;
  font-size: clamp(11px, 1.2vw, 13px); color: var(--gray-500); font-weight: 500;
}
.host-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brand); flex-shrink: 0; }
.host-sep { color: var(--gray-300); }

.hero__title {
  font-size: clamp(20px, 3.2vw, 48px);
  font-weight: 900; color: var(--gray-900);
  line-height: 1.15; letter-spacing: -0.025em;
  white-space: nowrap;
}
.hero__title em { font-style: normal; color: var(--brand); }

.hero__sub {
  font-size: clamp(13px, 1.4vw, 16px);
  color: var(--gray-500); line-height: 1.7; max-width: 520px;
}

.hero__cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 32px;
  background: var(--brand); color: #fff;
  font-size: 15px; font-weight: 700;
  border-radius: 999px; text-decoration: none;
  box-shadow: 0 4px 16px rgba(192, 57, 43, 0.30);
  transition: background 150ms, transform 150ms, box-shadow 150ms;
  margin-top: 4px;
}
.hero__cta:hover {
  background: var(--brand-dark); transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(192, 57, 43, 0.38);
}

.hero__video-wrap {
  width: 100%; max-width: 720px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
}
.hero__video { display: block; width: 100%; height: auto; }

.hero__video-cover {
  width: 100%; aspect-ratio: 16/9;
  background: linear-gradient(135deg, #1a0a0a 0%, #2d1010 50%, #1a0a0a 100%);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 16px; cursor: pointer;
  transition: background 200ms;
}
.hero__video-cover:hover { background: linear-gradient(135deg, #2d1010 0%, #3d1515 50%, #2d1010 100%); }
.play-btn { width: 72px; height: 72px; transition: transform 200ms; }
.hero__video-cover:hover .play-btn { transform: scale(1.1); }
.play-label { font-size: 13px; color: rgba(255,255,255,0.7); font-weight: 500; letter-spacing: 0.04em; }

@media (max-width: 600px) {
  .hero__title { white-space: normal; font-size: clamp(20px, 6vw, 32px); }
}
</style>

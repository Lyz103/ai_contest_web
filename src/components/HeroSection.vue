<template>
  <section id="hero" class="hero">
    <!-- 背景光晕 -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__glow hero__glow--top"></div>
      <div class="hero__glow hero__glow--br"></div>
      <div class="hero__glow hero__glow--bl"></div>
      <svg class="hero__bg-grid" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(100,100,120,0.06)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="hero__inner">
      <!-- 主办标识行 -->
      <div class="hero__host-line">
        <span class="host-dot"></span>
        <span>{{ t('hero.host') }}</span>
        <span class="host-sep">·</span>
        <span>{{ t('hero.cohost') }}</span>
      </div>

      <!-- 主标题 -->
      <h1 class="hero__title">
        <template v-if="locale === 'zh'">
          <span class="hero__title-line">全球人工智能</span>
          <em class="hero__title-em">创新 · 治理 · 安全</em>
          <span class="hero__title-line">大赛</span>
        </template>
        <template v-else>
          <span class="hero__title-line">Global AI</span>
          <em class="hero__title-em">Innovation · Governance · Safety</em>
          <span class="hero__title-line">Competition</span>
        </template>
      </h1>

      <p class="hero__sub">{{ t('hero.sub') }}</p>

      <!-- 赛道标签 -->
      <div class="hero__tags">
        <span class="hero__tag">{{ locale === 'zh' ? '智能体应用' : 'AI Agent' }}</span>
        <span class="hero__tag">{{ locale === 'zh' ? '社会治理' : 'Governance' }}</span>
        <span class="hero__tag">{{ locale === 'zh' ? '伦理与安全' : 'Ethics & Safety' }}</span>
      </div>

      <!-- 倒计时 -->
      <div class="hero__countdown" aria-live="polite">
        <div class="cd-cell">
          <div class="cd-num">{{ countdown.d }}</div>
          <div class="cd-lab">{{ locale === 'zh' ? '天' : 'Days' }}</div>
        </div>
        <div class="cd-sep">:</div>
        <div class="cd-cell">
          <div class="cd-num">{{ countdown.h }}</div>
          <div class="cd-lab">{{ locale === 'zh' ? '时' : 'Hours' }}</div>
        </div>
        <div class="cd-sep">:</div>
        <div class="cd-cell">
          <div class="cd-num">{{ countdown.m }}</div>
          <div class="cd-lab">{{ locale === 'zh' ? '分' : 'Min' }}</div>
        </div>
        <div class="cd-sep">:</div>
        <div class="cd-cell">
          <div class="cd-num">{{ countdown.s }}</div>
          <div class="cd-lab">{{ locale === 'zh' ? '秒' : 'Sec' }}</div>
        </div>
      </div>
      <div class="hero__release">
        {{ locale === 'zh'
          ? '距赛题正式发布 · 2026 年 6 月 22 日 10:00（北京时间）'
          : 'Until contest launch · June 22, 2026 10:00 CST' }}
      </div>

      <!-- 向下滚动提示 -->
      <div class="hero__scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <div class="scroll-arrow"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 目标：北京时间 2026-06-22 10:00 = UTC 2026-06-22 02:00
const TARGET = new Date(Date.UTC(2026, 5, 22, 2, 0, 0)).getTime()
const pad = n => String(n).padStart(2, '0')

const countdown = ref({ d: '00', h: '00', m: '00', s: '00' })

function tick() {
  let diff = Math.max(0, TARGET - Date.now())
  const d = Math.floor(diff / 86400000); diff -= d * 86400000
  const h = Math.floor(diff / 3600000);  diff -= h * 3600000
  const m = Math.floor(diff / 60000);    diff -= m * 60000
  const s = Math.floor(diff / 1000)
  countdown.value = { d: pad(d), h: pad(h), m: pad(m), s: pad(s) }
}

let timer = null
onMounted(() => { tick(); timer = setInterval(tick, 1000) })
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  overflow: hidden;
}

/* 背景层 */
.hero__bg { position: absolute; inset: 0; pointer-events: none; }
.hero__bg-grid { position: absolute; inset: 0; }

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero__glow--top {
  width: 70%; height: 55%;
  top: -10%; left: 15%;
  background: radial-gradient(ellipse, rgba(186,12,47,.10) 0%, transparent 70%);
}
.hero__glow--br {
  width: 45%; height: 40%;
  bottom: 5%; right: -5%;
  background: radial-gradient(ellipse, rgba(186,12,47,.06) 0%, transparent 70%);
}
.hero__glow--bl {
  width: 35%; height: 30%;
  bottom: 10%; left: -5%;
  background: radial-gradient(ellipse, rgba(122,10,34,.04) 0%, transparent 70%);
}

/* 内容区 */
.hero__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0;
  padding: clamp(100px, 12vh, 140px) 24px clamp(60px, 8vh, 100px);
  max-width: 860px;
  width: 100%;
}

/* 主办行 */
.hero__host-line {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: clamp(11px, 1.2vw, 13px);
  color: var(--gray-500);
  font-weight: 500;
  margin-bottom: 20px;
}
.host-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--brand);
  flex-shrink: 0;
}
.host-sep { color: var(--gray-300); }

/* 标题 */
.hero__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: clamp(32px, 6vw, 80px);
  font-weight: 900;
  color: var(--gray-900);
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 20px;
}
.hero__title-line { display: block; }
.hero__title-em {
  font-style: normal;
  background: linear-gradient(180deg, #BA0C2F 0%, #7A0A22 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: clamp(28px, 5vw, 68px);
  white-space: nowrap;
}

/* 副标题 */
.hero__sub {
  font-size: clamp(13px, 1.4vw, 16px);
  color: var(--gray-500);
  line-height: 1.7;
  white-space: nowrap;
  margin-bottom: 24px;
}
@media (max-width: 700px) {
  .hero__sub { white-space: normal; text-align: center; max-width: 320px; }
}

/* 赛道标签 */
.hero__tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 52px;
}
.hero__tag {
  font-size: 12px;
  color: var(--gray-500);
  padding: 6px 16px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(8px);
  font-weight: 500;
}

/* 倒计时 */
.hero__countdown {
  display: flex;
  gap: clamp(12px, 3vw, 40px);
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 16px;
}
.cd-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
}
.cd-num {
  font-family: "SF Mono", "JetBrains Mono", ui-monospace, Menlo, monospace;
  font-size: clamp(40px, 7vw, 76px);
  font-weight: 300;
  background: linear-gradient(180deg, #BA0C2F 0%, #7A0A22 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
  letter-spacing: -.04em;
  font-variant-numeric: tabular-nums;
}
.cd-lab {
  margin-top: 8px;
  font-size: 11px;
  letter-spacing: .28em;
  color: var(--gray-400);
  text-transform: uppercase;
}
.cd-sep {
  font-size: clamp(36px, 6vw, 68px);
  font-weight: 200;
  color: var(--gray-300);
  transform: translateY(-12px);
  line-height: 1;
}

.hero__release {
  font-size: 13px;
  color: var(--gray-500);
  letter-spacing: .12em;
  margin-bottom: 40px;
}

/* CTA */
.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 36px;
  background: linear-gradient(135deg, #BA0C2F, #7A0A22);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(186,12,47,.30);
  transition: filter 150ms, transform 150ms, box-shadow 150ms;
  margin-bottom: 64px;
}
.hero__cta:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(186,12,47,.40);
}

/* 滚动提示 */
.hero__scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  color: var(--gray-400);
  letter-spacing: .32em;
}
.scroll-arrow {
  width: 1px;
  height: 32px;
  background: linear-gradient(180deg, var(--gray-400), transparent);
  animation: drop 2s cubic-bezier(.22,1,.36,1) infinite;
}
@keyframes drop {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  51%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 600px) {
  .hero__title { font-size: clamp(28px, 8vw, 44px); }
  .hero__title-em { font-size: clamp(24px, 7vw, 38px); }
  .cd-cell { min-width: 48px; }
  .hero__tags { gap: 6px; }
}
</style>

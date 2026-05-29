<template>
  <section class="subscribe-section">
    <div class="container">
      <div class="subscribe-inner">
        <span class="eyebrow">Get Notified</span>
        <h2 class="subscribe-title">
          第一时间获取 <span class="accent-text">赛事动态</span>
        </h2>
        <p class="subscribe-desc">留下邮箱，6 月 22 日赛题发布会现场直播与报名通道，将第一时间送达。</p>

        <form class="subscribe-form" @submit.prevent="handleSubmit">
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            required
            aria-label="邮箱地址"
            :disabled="submitted"
          />
          <button type="submit" :disabled="submitted || loading">
            {{ submitted ? '已订阅 ✓' : loading ? '提交中…' : '订阅' }}
          </button>
        </form>

        <p v-if="msg" class="subscribe-msg" :class="{ 'subscribe-msg--error': isError }" role="status">{{ msg }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)
const loading = ref(false)
const msg = ref('')
const isError = ref(false)

async function handleSubmit() {
  if (!email.value || loading.value) return
  loading.value = true
  isError.value = false
  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    })
    if (res.ok) {
      submitted.value = true
      msg.value = '✓ 已记录您的邮箱，发布会前我们将与您联系。'
      email.value = ''
      setTimeout(() => { msg.value = '' }, 5000)
    } else {
      isError.value = true
      msg.value = '提交失败，请稍后重试。'
    }
  } catch {
    isError.value = true
    msg.value = '网络错误，请稍后重试。'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.subscribe-section {
  background: #fff;
  padding: 100px 24px;
  border-top: 1px solid var(--border);
}

.subscribe-inner {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.subscribe-title {
  font-size: clamp(26px, 3.4vw, 40px);
  font-weight: 900;
  color: var(--gray-900);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-top: 10px;
  margin-bottom: 14px;
}

.accent-text {
  background: linear-gradient(180deg, #BA0C2F 0%, #7A0A22 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subscribe-desc {
  font-size: 15px;
  color: var(--gray-500);
  line-height: 1.65;
  margin-bottom: 32px;
  max-width: 480px;
}

.subscribe-form {
  display: flex;
  width: 100%;
  max-width: 480px;
  gap: 0;
}

.subscribe-form input {
  flex: 1;
  height: 48px;
  padding: 0 18px;
  border-radius: 999px 0 0 999px;
  background: var(--gray-50);
  border: 1px solid var(--border);
  border-right: none;
  color: var(--gray-900);
  font-size: 14px;
  outline: none;
  font-family: inherit;
  transition: border-color .25s, box-shadow .25s, background .25s;
}
.subscribe-form input:focus {
  background: #fff;
  border-color: var(--brand);
  box-shadow: 0 0 0 4px rgba(186,12,47,.10);
}
.subscribe-form input::placeholder { color: var(--gray-400); }
.subscribe-form input:disabled { opacity: .6; cursor: not-allowed; }

.subscribe-form button {
  height: 48px;
  padding: 0 28px;
  border-radius: 0 999px 999px 0;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #BA0C2F, #7A0A22);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .04em;
  font-family: inherit;
  box-shadow: 0 6px 20px rgba(186,12,47,.25);
  transition: filter .25s, transform .25s, box-shadow .25s;
  white-space: nowrap;
}
.subscribe-form button:hover:not(:disabled) {
  filter: brightness(1.08);
  transform: translateY(-1px);
  box-shadow: 0 10px 26px rgba(186,12,47,.35);
}
.subscribe-form button:disabled {
  background: var(--gray-300);
  box-shadow: none;
  cursor: default;
}

.subscribe-msg { margin-top: 14px; font-size: 13px; color: var(--brand); min-height: 18px; }
.subscribe-msg--error { color: var(--gray-500); }

@media (max-width: 520px) {
  .subscribe-form {
    flex-direction: column;
    gap: 10px;
  }
  .subscribe-form input {
    border-radius: 999px;
    border-right: 1px solid var(--border);
  }
  .subscribe-form button {
    border-radius: 999px;
  }
}
</style>

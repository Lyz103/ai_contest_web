<template>
  <div class="app-layout" :class="{ 'app--revealed': revealed }">
    <!-- 人大红丝绒幕布 -->
    <div v-if="!curtainDone" class="curtain" aria-hidden="true" :class="{ 'curtain--opening': opening }">
      <div class="curtain__panel curtain__panel--left"></div>
      <div class="curtain__panel curtain__panel--right"></div>
      <div class="curtain__seal" :class="{ 'curtain__seal--hide': opening }">
        <div class="curtain__mark">中国人民大学</div>
        <div class="curtain__ti">即将揭幕</div>
      </div>
    </div>

    <NavBar />
    <main class="app-main">
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

const opening = ref(false)
const revealed = ref(false)
const curtainDone = ref(false)

onMounted(() => {
  setTimeout(() => {
    opening.value = true
    setTimeout(() => {
      revealed.value = true
      setTimeout(() => { curtainDone.value = true }, 200)
    }, 2200)
  }, 600)
})
</script>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.app-main {
  flex: 1;
}

/* ---- 幕布 ---- */
.curtain {
  position: fixed;
  inset: 0;
  z-index: 200;
  pointer-events: none;
}
.curtain__panel {
  position: absolute;
  top: 0; bottom: 0;
  width: 50%;
  background: linear-gradient(180deg, #C8133A 0%, #BA0C2F 35%, #960821 75%, #7A0A22 100%);
  box-shadow: 0 0 80px rgba(0,0,0,.4), inset 0 0 120px rgba(0,0,0,.35);
  transition: transform 2.2s cubic-bezier(.22,1,.36,1);
  overflow: hidden;
}
.curtain__panel::before {
  content: "";
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,.04) 0 1px, transparent 1px 7px),
    repeating-linear-gradient(90deg, rgba(0,0,0,.08) 0 1px, transparent 1px 13px),
    radial-gradient(140% 80% at 50% 50%, rgba(255,255,255,.06), transparent 65%);
  mix-blend-mode: overlay;
}
.curtain__panel--left {
  left: 0;
  box-shadow: inset -2px 0 20px rgba(0,0,0,.4), 0 0 80px rgba(0,0,0,.4);
}
.curtain__panel--right {
  right: 0;
  box-shadow: inset 2px 0 20px rgba(0,0,0,.4), 0 0 80px rgba(0,0,0,.4);
}
.curtain--opening .curtain__panel--left  { transform: translateX(-100%); }
.curtain--opening .curtain__panel--right { transform: translateX(100%); }

.curtain__seal {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  transition: opacity .5s ease;
}
.curtain__seal--hide { opacity: 0; }

.curtain__mark {
  font-size: 22px;
  color: #fff;
  letter-spacing: .32em;
  font-weight: 300;
  padding: 0 0 18px;
  position: relative;
  text-shadow: 0 1px 12px rgba(0,0,0,.35);
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}
.curtain__mark::after {
  content: "";
  position: absolute; bottom: 0; left: 50%;
  transform: translateX(-50%);
  width: 48px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.75), transparent);
}
.curtain__ti {
  margin-top: 14px;
  font-size: 11px;
  color: rgba(255,255,255,.78);
  letter-spacing: .6em;
  padding-left: .6em;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}
</style>

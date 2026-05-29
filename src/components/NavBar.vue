<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__inner">
      <RouterLink to="/" class="navbar__logo">
        <img src="/yulan-logo.png" class="logo-img" alt="玉兰 Logo" />
        <span class="logo-text">{{ locale === 'en' ? 'AI Contest' : 'AI大赛' }}</span>
      </RouterLink>

      <nav class="navbar__nav">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link">
          {{ t(link.key) }}
        </RouterLink>
      </nav>

      <div class="navbar__right">
        <button class="lang-btn" @click="toggleLang">
          {{ locale === 'zh' ? 'EN' : '中' }}
        </button>
        <button class="hamburger" :class="{ 'hamburger--open': menuOpen }" @click="menuOpen = !menuOpen" aria-label="菜单">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <nav class="navbar__mobile" :class="{ 'navbar__mobile--open': menuOpen }">
      <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link" @click="menuOpen = false">
        {{ t(link.key) }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { to: '/',        key: 'nav.home' },
  { to: '/contest', key: 'nav.contest' },
  { to: '/rank',    key: 'nav.rank' },
  { to: '/project', key: 'nav.project' },
  { to: '/support', key: 'nav.support' },
]

function toggleLang() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

function onScroll() { scrolled.value = window.scrollY > 8 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-h);
  background: rgba(240, 236, 240, 0.88);
  border-bottom: 1px solid rgba(180, 160, 170, 0.18);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: box-shadow 200ms;
}
.navbar--scrolled { box-shadow: 0 2px 16px rgba(0,0,0,0.07); }

.navbar__inner {
  width: 100%;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
  margin-right: auto;
}
.logo-img {
  height: 36px; width: auto;
  flex-shrink: 0;
  object-fit: contain;
}
.logo-text { font-size: 15px; font-weight: 800; color: var(--gray-900); white-space: nowrap; }

.navbar__nav { display: flex; align-items: center; gap: 2px; }
.nav-link {
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  font-size: 14px; font-weight: 500;
  color: var(--gray-600);
  text-decoration: none;
  transition: color 150ms, background 150ms;
  white-space: nowrap;
}
.nav-link:hover { color: var(--brand); background: var(--brand-light); }
.nav-link.router-link-active { color: var(--brand); font-weight: 700; }

.navbar__right {
  display: flex; align-items: center; gap: 10px;
  flex-shrink: 0; margin-left: auto;
}

.lang-btn {
  width: 36px; height: 36px;
  border: 1.5px solid var(--border);
  border-radius: 50%;
  background: transparent;
  font-size: 12px; font-weight: 700;
  color: var(--gray-600);
  cursor: pointer;
  transition: border-color 150ms, color 150ms, background 150ms;
  flex-shrink: 0;
}
.lang-btn:hover { border-color: var(--brand); color: var(--brand); background: var(--brand-light); }

.btn--sm { padding: 8px 20px; font-size: 13px; }

.hamburger {
  display: none; flex-direction: column; justify-content: center; gap: 5px;
  width: 36px; height: 36px; background: none; border: none; cursor: pointer;
  padding: 6px; border-radius: var(--radius-sm);
}
.hamburger span { display: block; height: 2px; background: var(--gray-700); border-radius: 1px; transition: transform 200ms, opacity 200ms; }
.hamburger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger--open span:nth-child(2) { opacity: 0; }
.hamburger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.navbar__mobile {
  display: none; flex-direction: column;
  padding: 12px 32px 16px; gap: 4px;
  background: #fff; border-top: 1px solid var(--border); box-shadow: var(--shadow-md);
}
.navbar__mobile--open { display: flex; }

@media (max-width: 768px) {
  .hamburger { display: flex; }
  .navbar__nav { display: none; }
  .navbar__right .btn { display: none; }
  .navbar__inner { grid-template-columns: 1fr auto; }
}
</style>

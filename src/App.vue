<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="page">
    <header class="nav">
      <div class="nav__brand">
        <span class="logo-dot" />
        <span class="brand-name">Waveforms</span>
      </div>
      <nav class="nav__links">
        <a class="nav__link is-active" href="#">Home</a>
        <a class="nav__link" href="#">Web design</a>
        <a class="nav__link" href="#">Mobile design</a>
        <a class="nav__link" href="#">Illustrations</a>
      </nav>
      <div class="nav__actions">
        <a class="nav__sign-in" href="#">Sign in</a>
        <button class="pill-button" type="button">Sign up</button>
      </div>
    </header>

    <main class="content">
      <section class="visual">
        <div class="visual__orb" />
      </section>

      <section class="card" aria-labelledby="signup-title">
        <div class="card__header">
          <p class="eyebrow">Meet our product</p>
          <div class="card__title-row">
            <h1 id="signup-title">Sign up</h1>
            <div class="badge">🎥 Watch: How to start</div>
          </div>
          <p class="lede">
            Sign up to get the free trial of all of our services for 60 days.
          </p>
        </div>

        <form class="form">
          <label class="field">
            <span class="field__label">Email address</span>
            <input
              v-model="email"
              class="field__input"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label class="field">
            <div class="field__label-row">
              <span class="field__label">Password</span>
              <button class="link-button" type="button" @click="togglePassword">
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
            <div class="field__password">
              <input
                v-model="password"
                class="field__input"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                placeholder="••••••••"
              />
              <button class="toggle" type="button" aria-label="Toggle password visibility" @click="togglePassword">
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </label>

          <div class="checks">
            <label class="check">
              <input type="checkbox" />
              <span>I agree to the Terms of Use and Privacy Policy</span>
            </label>
            <label class="check">
              <input type="checkbox" />
              <span>Subscribe for our weekly newsletter</span>
            </label>
          </div>

          <button class="primary" type="submit">Get started</button>

          <div class="divider">
            <span>or continue with</span>
          </div>

          <div class="socials">
            <button class="social" type="button" aria-label="Continue with Google">
              <svg viewBox="0 0 48 48" class="social__icon" aria-hidden="true">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.12 0 5.26 1.35 6.47 2.48l4.73-4.64C31.73 4.3 28.21 3 24 3 14.91 3 7.11 8.83 4.15 16.83l5.93 4.62C11.7 15.09 17.31 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.5 24.5c0-1.54-.14-3.02-.41-4.44H24v8.41h12.65c-.55 2.95-2.23 5.45-4.73 7.12l7.57 5.84C43.97 37.81 46.5 31.73 46.5 24.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.08 28.55a14.5 14.5 0 0 1 0-9.08l-5.93-4.62a24 24 0 0 0 0 18.32l5.93-4.62z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c6.21 0 11.43-2.05 15.23-5.57l-7.57-5.84C29.63 36.43 27.04 37.5 24 37.5c-6.69 0-12.3-5.59-13.92-12.96l-5.93 4.62C7.11 39.17 14.91 46 24 46z"
                />
              </svg>
              Continue with Google
            </button>
            <button class="social" type="button" aria-label="Continue with Microsoft">
              <div class="social__icon social__icon--square">MS</div>
              Continue with Microsoft
            </button>
          </div>
        </form>

        <p class="switch">Already have an account? <a href="#">Sign in</a></p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.9), rgba(239, 246, 255, 0.9)),
    linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
  color: #0f172a;
  padding: 28px clamp(24px, 4vw, 48px) 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 32px;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.logo-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  display: inline-block;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
}

.nav__links {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  font-weight: 600;
  color: #334155;
}

.nav__link {
  text-decoration: none;
  color: inherit;
  padding: 10px 12px;
  border-radius: 999px;
  transition: background-color 0.2s ease;
}

.nav__link:hover,
.nav__link.is-active {
  background: rgba(37, 99, 235, 0.08);
  color: #1d4ed8;
}

.nav__actions {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.nav__sign-in {
  font-weight: 700;
  color: #1f2937;
  text-decoration: none;
}

.pill-button {
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  background: #fff;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
}

.content {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: clamp(24px, 5vw, 48px);
  align-items: center;
}

.visual {
  background: linear-gradient(135deg, #fce7f3 0%, #e0f2fe 50%, #fef2f2 100%);
  border-radius: 24px;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 6vw, 48px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.12);
}

.visual__orb {
  width: min(480px, 80vw);
  aspect-ratio: 1;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)),
    conic-gradient(from 120deg at 50% 50%, #ffd6e7, #cce4ff, #fee2ca, #ffd6e7);
  border-radius: 50%;
  filter: drop-shadow(0 30px 60px rgba(15, 23, 42, 0.18));
  position: relative;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 20px;
  padding: clamp(20px, 3vw, 32px);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(10px);
}

.card__header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.card__title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.eyebrow {
  font-size: 0.9rem;
  font-weight: 700;
  color: #6366f1;
  margin: 0;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.3rem);
  margin: 0;
}

.badge {
  background: linear-gradient(135deg, #2563eb, #9333ea);
  color: #fff;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.3);
}

.lede {
  margin: 0;
  color: #475569;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field__label {
  font-weight: 700;
  color: #0f172a;
}

.field__label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.field__input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field__input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
  outline: none;
}

.field__password {
  position: relative;
}

.toggle {
  position: absolute;
  inset: 4px 4px 4px auto;
  padding: 0 12px;
  border: none;
  background: #fff;
  border-radius: 10px;
  color: #1d4ed8;
  font-weight: 700;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.1);
}

.link-button {
  border: none;
  background: none;
  color: #1d4ed8;
  font-weight: 700;
  cursor: pointer;
}

.checks {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.check {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #475569;
  font-weight: 600;
}

.check input {
  width: 18px;
  height: 18px;
  accent-color: #2563eb;
}

.primary {
  width: 100%;
  padding: 14px 16px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 12px 24px rgba(124, 58, 237, 0.25);
}

.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #94a3b8;
  font-weight: 600;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(226, 232, 240, 0), rgba(226, 232, 240, 1), rgba(226, 232, 240, 0));
}

.socials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.social {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  font-weight: 700;
  color: #0f172a;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
}

.social__icon {
  width: 22px;
  height: 22px;
}

.social__icon--square {
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  background: linear-gradient(135deg, #1d4ed8, #0ea5e9);
  color: #fff;
  font-weight: 800;
  font-size: 0.7rem;
}

.switch {
  margin-top: 12px;
  color: #475569;
  font-weight: 600;
}

.switch a {
  color: #1d4ed8;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 980px) {
  .content {
    grid-template-columns: 1fr;
  }

  .visual {
    order: -1;
    min-height: 420px;
  }

  .nav {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  .nav__links {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 20px 16px 32px;
  }

  .nav__actions {
    width: 100%;
  }

  .nav__links {
    width: 100%;
  }

  .card__title-row {
    align-items: flex-start;
  }

  .badge {
    font-size: 0.85rem;
    padding: 7px 10px;
  }
}
</style>

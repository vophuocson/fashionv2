<template>
  <div class="page">
    <header class="top-nav">
      <div class="brand">tailwind x flowbite</div>
      <nav class="nav-links">
        <a href="#">Home</a>
        <a href="#">Web design</a>
        <a href="#">Logo design</a>
        <a href="#">Illustrations</a>
      </nav>
      <div class="nav-actions">
        <select class="language-select" aria-label="Language selector">
          <option>English (US)</option>
          <option>Tiếng Việt</option>
          <option>日本語</option>
        </select>
        <a class="ghost-link" href="#">Sign in</a>
        <button class="primary">Sign up</button>
      </div>
    </header>

    <main class="content">
      <section class="hero">
        <div class="orb" aria-hidden="true"></div>
        <div class="glow" aria-hidden="true"></div>
      </section>

      <section class="auth-card">
        <p class="badge">FEATURED</p>
        <h1>Sign up</h1>
        <p class="subtitle">Sign up to see the overview of your products</p>

        <form class="form">
          <label class="field">
            <span>Email address</span>
            <input type="email" placeholder="name@company.com" required />
          </label>
          <label class="field">
            <span>Password</span>
            <div class="password-field">
              <input type="password" placeholder="••••••••" required />
              <span class="toggle">Hide</span>
            </div>
          </label>

          <label class="checkbox">
            <input type="checkbox" checked />
            <span>I agree with the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</span>
          </label>
          <label class="checkbox">
            <input type="checkbox" checked />
            <span>Subscribe to our monthly newsletter</span>
          </label>

          <button type="submit" class="primary full">Sign up</button>
          <button type="button" class="outline full">I am not a robot</button>
        </form>

        <p class="footer">Already have an account? <a href="#">Sign in</a></p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: radial-gradient(circle at 20% 30%, #f2f7ff 0%, #f7f9fd 40%, #ffffff 100%);
  color: #111827;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.top-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}

.brand {
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: lowercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  color: #4b5563;
  font-weight: 600;
}

.nav-links a {
  color: inherit;
  text-decoration: none;
}

.nav-links a:hover {
  color: #111827;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.language-select {
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 12px;
  padding: 10px 12px;
  font-weight: 600;
  color: #111827;
}

.ghost-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 700;
}

.primary {
  background: #111827;
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 12px 18px;
  font-weight: 700;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.15);
}

.primary:hover {
  transform: translateY(-1px);
}

.content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(360px, 1fr) minmax(420px, 500px);
  gap: 40px;
  align-items: center;
}

.hero {
  position: relative;
  aspect-ratio: 1 / 1;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), transparent 45%),
    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.35), transparent 55%),
    linear-gradient(135deg, #fef3c7, #e0f2fe);
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.12);
}

.orb {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), transparent 45%),
    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.5), transparent 55%),
    conic-gradient(from 160deg at 50% 50%, #8dd0ff, #f9d29d, #fbb6ce, #8dd0ff);
  filter: blur(0px);
  position: relative;
  box-shadow: inset 0 0 80px rgba(255, 255, 255, 0.4);
}

.glow {
  position: absolute;
  inset: 12%;
  border-radius: 32px;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.6), transparent 40%),
    radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.5), transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));
  filter: blur(30px);
  z-index: -1;
}

.auth-card {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(14px);
  border: 1px solid #f3f4f6;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
}

.badge {
  display: inline-flex;
  padding: 4px 12px;
  background: #f5f3ff;
  color: #7c3aed;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.2px;
  margin: 0 0 10px;
}

h1 {
  margin: 0 0 6px;
  font-size: 32px;
}

.subtitle {
  margin: 0 0 28px;
  color: #6b7280;
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
  font-weight: 600;
  color: #374151;
}

.field input {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 15px;
  background: #fff;
  width: 100%;
}

.password-field {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;
}

.toggle {
  color: #6b7280;
  font-weight: 600;
  cursor: pointer;
}

.checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #4b5563;
  font-size: 14px;
}

.checkbox input {
  margin-top: 3px;
  width: 16px;
  height: 16px;
  accent-color: #111827;
}

.full {
  width: 100%;
  justify-content: center;
  text-align: center;
}

.outline {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 12px 18px;
  font-weight: 700;
  color: #111827;
}

.footer {
  margin-top: 18px;
  color: #6b7280;
  font-weight: 600;
}

.footer a {
  color: #111827;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 1024px) {
  .page {
    padding: 24px;
  }

  .content {
    grid-template-columns: 1fr;
  }

  .hero {
    order: 2;
  }
}

@media (max-width: 640px) {
  .top-nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
  }

  .nav-actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .content {
    gap: 24px;
  }
}
</style>

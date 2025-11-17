<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  email: '',
  password: '',
  remember: true
});

const status = ref('');

const onSubmit = (event) => {
  event.preventDefault();
  const errors = [];
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.push('Vui lòng nhập email hợp lệ.');
  }
  if (!form.password || form.password.length < 6) {
    errors.push('Mật khẩu phải có ít nhất 6 ký tự.');
  }

  status.value = errors.length ? errors.join(' ') : 'Đăng nhập thành công!';
};
</script>

<template>
  <div class="auth-page">
    <div class="promo-panel">
      <div class="promo-header">
        <div class="logo">IVY</div>
        <div class="headline">
          <p class="eyebrow">Luxury Fashion • Since 2010</p>
          <h1>Mở ra tủ đồ cao cấp của riêng bạn</h1>
          <p>
            Bộ sưu tập mới nhất, ưu đãi độc quyền và trải nghiệm mua sắm mượt mà. Kết nối với
            IVY ngay hôm nay.
          </p>
        </div>
      </div>

      <div class="promo-grid">
        <div class="card highlight">
          <div class="card-top">
            <span class="pill">New Drop</span>
            <span class="percent">-30%</span>
          </div>
          <div class="card-content">
            <p class="muted">Sản phẩm nổi bật</p>
            <h2>Blazer Satin Midnight</h2>
            <p class="muted">Chất liệu satin Ý, cắt may thủ công.</p>
            <button class="btn">Khám phá ngay</button>
          </div>
        </div>

        <div class="card stats">
          <div>
            <p class="muted">Khách hàng hài lòng</p>
            <h2>48K+</h2>
          </div>
          <div>
            <p class="muted">Đơn giao hôm nay</p>
            <h2>1.2K</h2>
          </div>
          <div class="avatars">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=60" alt="avatar" />
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=64&q=60" alt="avatar" />
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=64&q=60" alt="avatar" />
            <span class="more">+12</span>
          </div>
        </div>

        <div class="card gallery">
          <div class="gallery-top">
            <p class="muted">Phong cách được yêu thích</p>
            <span class="link">Xem lookbook →</span>
          </div>
          <div class="gallery-images">
            <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=60" alt="look 1" />
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=60" alt="look 2" />
            <img src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=400&q=60" alt="look 3" />
          </div>
        </div>
      </div>
    </div>

    <main class="form-panel">
      <div class="form-card">
        <div class="form-header">
          <p class="eyebrow">Chào mừng trở lại</p>
          <h2>Đăng nhập tài khoản</h2>
          <p class="muted">Truy cập bảng điều khiển IVY để quản lý đơn hàng và ưu đãi thành viên.</p>
        </div>

        <form class="login-form" @submit="onSubmit">
          <label class="field">
            <span>Email</span>
            <input v-model="form.email" type="email" placeholder="you@example.com" required />
          </label>

          <label class="field">
            <span>Mật khẩu</span>
            <input v-model="form.password" type="password" placeholder="••••••••" required />
          </label>

          <div class="form-row">
            <label class="checkbox">
              <input v-model="form.remember" type="checkbox" />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <a class="link" href="#">Quên mật khẩu?</a>
          </div>

          <button type="submit" class="btn primary">Đăng nhập</button>

          <button type="button" class="btn ghost">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
            Tiếp tục với Google
          </button>
        </form>

        <p class="status" :class="{ error: status && !status.includes('thành công') }">{{ status }}</p>

        <p class="footer">Chưa có tài khoản? <a class="link" href="#">Đăng ký ngay</a></p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  background: radial-gradient(circle at 20% 20%, rgba(91, 118, 255, 0.15), transparent 35%),
    radial-gradient(circle at 80% 0%, rgba(255, 149, 213, 0.18), transparent 32%),
    #0b1020;
  color: #f8fafc;
}

.promo-panel {
  position: relative;
  padding: clamp(28px, 5vw, 64px);
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.promo-panel::after {
  content: '';
  position: absolute;
  inset: 20px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  pointer-events: none;
}

.promo-header {
  display: grid;
  gap: 20px;
  grid-template-columns: 64px 1fr;
  align-items: center;
  z-index: 1;
  position: relative;
}

.logo {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: linear-gradient(135deg, #ffd1eb, #7287ff);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #0b1020;
  letter-spacing: 1px;
}

.headline h1 {
  font-size: clamp(28px, 3vw, 42px);
  margin: 4px 0 10px;
}

.eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #cbd5f5;
  margin: 0 0 4px;
}

.muted {
  color: #c2cee7;
  margin: 0;
}

.promo-grid {
  margin-top: clamp(28px, 4vw, 48px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  position: relative;
  z-index: 1;
}

.card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 18px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
}

.card h2 {
  color: #ffffff;
  margin: 6px 0;
}

.highlight {
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pill {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  font-weight: 700;
  letter-spacing: 0.5px;
}

.percent {
  font-weight: 800;
  color: #fbd38d;
}

.btn {
  border: none;
  padding: 10px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 700;
  width: fit-content;
}

.btn.primary {
  width: 100%;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  color: #fff;
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.35);
}

.btn.ghost {
  width: 100%;
  background: rgba(255, 255, 255, 0.06);
  color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  align-items: center;
}

.avatars {
  display: flex;
  align-items: center;
  gap: 8px;
  grid-column: span 2;
}

.avatars img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.more {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  font-weight: 700;
}

.gallery {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gallery-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gallery-images {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.gallery-images img {
  width: 100%;
  aspect-ratio: 1 / 1.2;
  object-fit: cover;
  border-radius: 12px;
}

.form-panel {
  display: grid;
  place-items: center;
  padding: clamp(32px, 6vw, 72px);
  background: radial-gradient(circle at 70% 30%, rgba(131, 88, 255, 0.08), transparent 40%),
    #0f172a;
}

.form-card {
  width: min(520px, 100%);
  background: #0b1020;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(24px, 4vw, 36px);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  color: #e2e8f0;
}

.form-header h2 {
  margin: 6px 0 10px;
  font-size: clamp(22px, 2vw, 28px);
}

.login-form {
  display: grid;
  gap: 14px;
  margin: 18px 0 8px;
}

.field {
  display: grid;
  gap: 8px;
  color: #cbd5f5;
}

.field input {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 12px;
  color: #fff;
}

.field input::placeholder {
  color: #8fa0c2;
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #cbd5f5;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.checkbox input {
  width: 16px;
  height: 16px;
}

.link {
  color: #8fb0ff;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

.status {
  min-height: 20px;
  color: #7ee0a3;
  font-weight: 600;
}

.status.error {
  color: #fca5a5;
}

.footer {
  margin-top: 8px;
  color: #cbd5f5;
}

@media (max-width: 1024px) {
  .auth-page {
    grid-template-columns: 1fr;
  }

  .promo-panel {
    display: none;
  }
}

@media (max-width: 600px) {
  .form-card {
    padding: 22px;
  }

  .form-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .promo-grid {
    grid-template-columns: 1fr;
  }
}
</style>

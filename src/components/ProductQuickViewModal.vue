<script setup>
import StatusBadge from './StatusBadge.vue';

const props = defineProps({
  product: { type: Object, required: true }
});

const emit = defineEmits(['close']);
</script>

<template>
  <div class="overlay" @click.self="emit('close')">
    <div class="modal">
      <header class="modal__header">
        <div>
          <p class="sku">{{ product.id }}</p>
          <h3>{{ product.name }}</h3>
          <StatusBadge :status="product.status" />
        </div>
        <button class="close" type="button" @click="emit('close')">✕</button>
      </header>

      <section class="modal__body">
        <div class="image" :style="{ backgroundImage: `url(${product.thumbnail})` }"></div>
        <div class="info">
          <p><strong>Giá:</strong> {{ new Intl.NumberFormat('vi-VN').format(product.price) }} đ</p>
          <p><strong>Tồn kho:</strong> {{ product.inventory }}</p>
          <p><strong>Collection:</strong> {{ product.collection }}</p>
          <p><strong>Tags:</strong> {{ product.tags.join(', ') }}</p>
        </div>
      </section>

      <footer class="modal__footer">
        <button type="button">Chỉnh sửa</button>
        <button class="primary" type="button">Xuất bản</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 20;
}

.modal {
  background: white;
  border-radius: 16px;
  max-width: 760px;
  width: min(760px, 100%);
  padding: 20px;
  display: grid;
  gap: 14px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.25);
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.sku {
  margin: 0 0 4px;
  color: #52606d;
}

h3 {
  margin: 0 0 6px;
}

.close {
  border: none;
  background: #f8fafc;
  border-radius: 50%;
  width: 32px;
  height: 32px;
}

.modal__body {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 14px;
}

.image {
  width: 100%;
  height: 220px;
  border-radius: 14px;
  background-size: cover;
  background-position: center;
}

.info p {
  margin: 6px 0;
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.modal__footer button {
  border: 1px solid #e5e7eb;
  background: #f8fafc;
  padding: 10px 12px;
  border-radius: 10px;
  font-weight: 700;
}

.primary {
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: white;
  border: none;
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
}

@media (max-width: 640px) {
  .modal__body {
    grid-template-columns: 1fr;
  }

  .image {
    height: 180px;
  }
}
</style>

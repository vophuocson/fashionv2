<script setup>
import StatusBadge from './StatusBadge.vue';

const props = defineProps({
  product: { type: Object, required: true }
});

const emit = defineEmits(['open']);
</script>

<template>
  <article class="card" draggable="true">
    <div class="card__header">
      <div class="thumb" :style="{ backgroundImage: `url(${product.thumbnail})` }"></div>
      <div>
        <p class="sku">{{ product.id }}</p>
        <h3>{{ product.name }}</h3>
        <div class="meta">
          <StatusBadge :status="product.status" />
          <span class="collection">{{ product.collection }}</span>
        </div>
      </div>
    </div>

    <div class="card__body">
      <div>
        <p class="label">Giá</p>
        <p class="value">{{ new Intl.NumberFormat('vi-VN').format(product.price) }} đ</p>
      </div>
      <div>
        <p class="label">Tồn kho</p>
        <p class="value" :class="{ 'value--low': product.inventory < 10 }">{{ product.inventory }}</p>
      </div>
    </div>

    <div class="tags">
      <span v-for="tag in product.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>

    <div class="actions">
      <button type="button" @click.stop="emit('open', product.id)">Xem nhanh</button>
      <button type="button">Duplicate</button>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  padding: 12px;
  display: grid;
  gap: 10px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);
}

.card__header {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 10px;
}

.thumb {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
}

.sku {
  color: #52606d;
  margin: 0 0 4px;
  font-size: 12px;
}

h3 {
  margin: 0 0 6px;
  color: #0f172a;
}

.meta {
  display: flex;
  gap: 8px;
  align-items: center;
}

.collection {
  background: #f3f4f6;
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: 600;
  color: #334155;
  font-size: 12px;
}

.card__body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.label {
  margin: 0;
  color: #52606d;
  font-size: 12px;
}

.value {
  margin: 2px 0 0;
  font-weight: 700;
  color: #0f172a;
}

.value--low {
  color: #dc2626;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: #eef2ff;
  color: #4338ca;
  padding: 4px 6px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.actions button {
  border: 1px solid #e5e7eb;
  background: #f8fafc;
  padding: 8px 10px;
  border-radius: 10px;
  font-weight: 600;
}
</style>

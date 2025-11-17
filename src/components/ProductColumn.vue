<script setup>
import { computed, ref } from 'vue';
import ProductCard from './ProductCard.vue';
import EmptyState from './EmptyState.vue';

const props = defineProps({
  status: { type: String, required: true },
  products: { type: Array, default: () => [] }
});

const emit = defineEmits(['move', 'open']);

const isOver = ref(false);

const badgeColor = computed(() => {
  switch (props.status) {
    case 'Active':
      return '#22c55e';
    case 'Draft':
      return '#f59e0b';
    case 'Out of Stock':
      return '#ef4444';
    default:
      return '#94a3b8';
  }
});

const onDragOver = (event) => {
  event.preventDefault();
  isOver.value = true;
};

const onDragLeave = () => {
  isOver.value = false;
};

const onDrop = (event) => {
  const productId = event.dataTransfer.getData('text/plain');
  if (productId) {
    emit('move', { productId, status: props.status });
  }
  isOver.value = false;
};

const onCardDragStart = (productId, event) => {
  event.dataTransfer.setData('text/plain', productId);
};
</script>

<template>
  <article
    class="column"
    :class="{ 'column--over': isOver }"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
  >
    <header class="column__header">
      <div class="title">
        <span class="dot" :style="{ background: badgeColor }"></span>
        <h2>{{ status }}</h2>
      </div>
      <span class="count">{{ products.length }}</span>
    </header>

    <div class="stack">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        draggable="true"
        @dragstart="onCardDragStart(product.id, $event)"
        @open="emit('open', product.id)"
      />

      <EmptyState v-if="!products.length" message="Không có sản phẩm" />
    </div>
  </article>
</template>

<style scoped>
.column {
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.2s ease, background 0.2s ease;
  min-height: 320px;
}

.column--over {
  border-color: #4f46e5;
  background: #eef2ff;
}

.column__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.title h2 {
  margin: 0;
  font-size: 16px;
  color: #0f172a;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
}

.count {
  background: #e0e7ff;
  color: #312e81;
  padding: 4px 10px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

<script setup>
import ProductColumn from './ProductColumn.vue';

const props = defineProps({
  columns: { type: Array, default: () => [] },
  productsByStatus: { type: Object, default: () => ({}) }
});

const emit = defineEmits(['move', 'open']);

const onMove = ({ productId, status }) => {
  emit('move', productId, status);
};

const onOpen = (productId) => emit('open', productId);
</script>

<template>
  <section class="kanban">
    <ProductColumn
      v-for="status in columns"
      :key="status"
      :status="status"
      :products="productsByStatus[status] || []"
      @move="onMove"
      @open="onOpen"
    />
  </section>
</template>

<style scoped>
.kanban {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 18px;
}
</style>

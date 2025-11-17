<script setup>
const props = defineProps({
  options: { type: Array, default: () => [] },
  selected: { type: Array, default: () => [] }
});

const emit = defineEmits(['toggle']);
</script>

<template>
  <div class="inline-tags">
    <button
      v-for="tag in options"
      :key="tag"
      type="button"
      class="chip"
      :class="{ 'chip--active': selected.includes(tag) }"
      @click="emit('toggle', tag)"
    >
      {{ selected.includes(tag) ? '✓' : '' }} {{ tag }}
    </button>
  </div>
</template>

<style scoped>
.inline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 6px 10px;
  background: #fff;
  font-weight: 600;
}

.chip--active {
  background: #eef2ff;
  color: #4338ca;
  border-color: #c7d2fe;
}
</style>

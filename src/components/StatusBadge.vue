<script setup>
const props = defineProps({
  status: { type: String, default: 'Draft' }
});

const palette = {
  Draft: { bg: '#fef3c7', text: '#92400e' },
  Active: { bg: '#dcfce7', text: '#166534' },
  'Out of Stock': { bg: '#fee2e2', text: '#991b1b' },
  Archived: { bg: '#e5e7eb', text: '#374151' }
};
</script>

<template>
  <span
    class="badge"
    :style="{
      background: palette[status]?.bg || '#e5e7eb',
      color: palette[status]?.text || '#1f2937'
    }"
  >
    {{ status }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
}
</style>

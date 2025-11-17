<script setup>
const props = defineProps({
  message: { type: String, default: 'Trống' }
});
</script>

<template>
  <div class="empty">
    <span>📦</span>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.empty {
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  padding: 18px;
  text-align: center;
  color: #94a3b8;
  background: #fff;
}

.empty span {
  font-size: 20px;
}

.empty p {
  margin: 8px 0 0;
  font-weight: 700;
}
</style>

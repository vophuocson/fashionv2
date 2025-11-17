<script setup>
const props = defineProps({
  statuses: { type: Array, default: () => [] },
  collections: { type: Array, default: () => [] },
  selectedStatus: { type: String, default: 'All' },
  selectedCollection: { type: String, default: 'All' },
  search: { type: String, default: '' }
});

const emit = defineEmits(['update:status', 'update:collection', 'update:search', 'create']);
</script>

<template>
  <header class="board-header">
    <div>
      <p class="eyebrow">Sản phẩm</p>
      <h1 class="title">Kanban trạng thái</h1>
      <p class="subtitle">Kéo thả sản phẩm giữa các trạng thái để cập nhật nhanh.</p>
    </div>

    <div class="actions">
      <div class="search">
        <span class="icon">🔍</span>
        <input
          :value="search"
          type="search"
          placeholder="Tìm theo tên hoặc SKU"
          @input="emit('update:search', $event.target.value)"
        />
      </div>

      <div class="selects">
        <label class="select">
          <span>Trạng thái</span>
          <select :value="selectedStatus" @change="emit('update:status', $event.target.value)">
            <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
          </select>
        </label>

        <label class="select">
          <span>Collection</span>
          <select :value="selectedCollection" @change="emit('update:collection', $event.target.value)">
            <option v-for="collection in collections" :key="collection" :value="collection">{{ collection }}</option>
          </select>
        </label>
      </div>

      <slot name="tags" />

      <button class="primary" type="button" @click="emit('create')">
        + Thêm sản phẩm
      </button>
    </div>
  </header>
</template>

<style scoped>
.board-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px 28px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #52606d;
  font-weight: 700;
  font-size: 12px;
  margin: 0;
}

.title {
  margin: 6px 0 4px;
  font-size: 28px;
  color: #111827;
}

.subtitle {
  margin: 0;
  color: #52606d;
}

.actions {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-auto-flow: column;
  gap: 12px;
  align-items: center;
}

.search {
  display: flex;
  align-items: center;
  background: #f5f7fa;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 12px;
  min-width: 240px;
  gap: 8px;
}

.search input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 14px;
}

.icon {
  color: #9aa5b1;
}

.selects {
  display: flex;
  gap: 10px;
}

.select {
  display: grid;
  gap: 6px;
  font-weight: 600;
  color: #52606d;
}

.select select {
  min-width: 160px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #fff;
  font-size: 14px;
}

.primary {
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
}

@media (max-width: 1024px) {
  .board-header {
    flex-direction: column;
  }

  .actions {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    align-items: stretch;
  }

  .selects {
    flex-wrap: wrap;
  }
}
</style>

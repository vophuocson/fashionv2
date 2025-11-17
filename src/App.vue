<script setup>
import { computed, reactive, ref } from 'vue';
import ProductBoardHeader from './components/ProductBoardHeader.vue';
import ProductKanban from './components/ProductKanban.vue';
import ProductQuickViewModal from './components/ProductQuickViewModal.vue';
import InlineTagFilter from './components/InlineTagFilter.vue';

const statuses = ['Draft', 'Active', 'Out of Stock', 'Archived'];

const collections = ['All', 'New Arrivals', 'Essentials', 'Outlet'];

const products = reactive([
  {
    id: 'SKU-001',
    name: 'Minimalist Linen Shirt',
    price: 480000,
    inventory: 36,
    status: 'Active',
    collection: 'Essentials',
    tags: ['linen', 'summer'],
    thumbnail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 'SKU-002',
    name: 'Relaxed Fit Denim',
    price: 720000,
    inventory: 12,
    status: 'Out of Stock',
    collection: 'New Arrivals',
    tags: ['denim', 'blue'],
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 'SKU-003',
    name: 'Classic White Tee',
    price: 220000,
    inventory: 120,
    status: 'Active',
    collection: 'Essentials',
    tags: ['cotton', 'basic'],
    thumbnail: 'https://images.unsplash.com/photo-1542293787938-4d2726154513?auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 'SKU-004',
    name: 'Oversized Hoodie',
    price: 650000,
    inventory: 8,
    status: 'Draft',
    collection: 'New Arrivals',
    tags: ['unisex', 'cozy'],
    thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 'SKU-005',
    name: 'Wool Blend Coat',
    price: 1850000,
    inventory: 4,
    status: 'Archived',
    collection: 'Outlet',
    tags: ['winter', 'coat'],
    thumbnail: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=400&q=60'
  }
]);

const filters = reactive({
  search: '',
  status: 'All',
  collection: 'All',
  tags: []
});

const quickViewId = ref(null);

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.id.toLowerCase().includes(filters.search.toLowerCase());
    const matchesStatus = filters.status === 'All' ? true : product.status === filters.status;
    const matchesCollection = filters.collection === 'All' ? true : product.collection === filters.collection;
    const matchesTags = filters.tags.length === 0 || filters.tags.every((tag) => product.tags.includes(tag));
    return matchesSearch && matchesStatus && matchesCollection && matchesTags;
  });
});

const groupedProducts = computed(() => {
  return statuses.reduce((acc, status) => {
    acc[status] = filteredProducts.value.filter((product) => product.status === status);
    return acc;
  }, {});
});

const moveProduct = (productId, targetStatus) => {
  const product = products.find((item) => item.id === productId);
  if (product) product.status = targetStatus;
};

const onSearchChange = (value) => {
  filters.search = value;
};

const onStatusChange = (value) => {
  filters.status = value;
};

const onCollectionChange = (value) => {
  filters.collection = value;
};

const onTagToggle = (tag) => {
  if (filters.tags.includes(tag)) {
    filters.tags = filters.tags.filter((item) => item !== tag);
  } else {
    filters.tags = [...filters.tags, tag];
  }
};

const onOpenQuickView = (productId) => {
  quickViewId.value = productId;
};

const onCloseQuickView = () => {
  quickViewId.value = null;
};

const onCreateProduct = () => {
  const index = products.length + 1;
  products.unshift({
    id: `SKU-00${index}`,
    name: `New Product ${index}`,
    price: 250000,
    inventory: 0,
    status: 'Draft',
    collection: 'New Arrivals',
    tags: ['new'],
    thumbnail: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=400&q=60'
  });
};
</script>

<template>
  <div class="page">
    <ProductBoardHeader
      :statuses="['All', ...statuses]"
      :collections="collections"
      :selected-status="filters.status"
      :selected-collection="filters.collection"
      :search="filters.search"
      @update:search="onSearchChange"
      @update:status="onStatusChange"
      @update:collection="onCollectionChange"
      @create="onCreateProduct"
    >
      <template #tags>
        <div class="tag-filter">
          <span class="tag-filter__label">Tags:</span>
          <InlineTagFilter
            :options="['linen', 'summer', 'denim', 'blue', 'cotton', 'basic', 'unisex', 'cozy', 'winter', 'coat', 'new']"
            :selected="filters.tags"
            @toggle="onTagToggle"
          />
        </div>
      </template>
    </ProductBoardHeader>

    <ProductKanban
      :columns="statuses"
      :products-by-status="groupedProducts"
      @move="moveProduct"
      @open="onOpenQuickView"
    />

    <ProductQuickViewModal
      v-if="quickViewId"
      :product="products.find((product) => product.id === quickViewId)"
      @close="onCloseQuickView"
    />
  </div>
</template>

<style scoped>
.page {
  padding: 32px 40px;
  min-height: 100vh;
  background: linear-gradient(180deg, #f7f9fc 0%, #eef2f7 100%);
}

.tag-filter {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.tag-filter__label {
  font-weight: 600;
  color: #52606d;
}
</style>

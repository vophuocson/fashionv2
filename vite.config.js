import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,        // Cổng dev server
    open: true,        // Tự động mở trình duyệt khi chạy `npm run dev`
    strictPort: true,  // Nếu cổng đã dùng, sẽ báo lỗi
  },
  // resolve: {
  //   alias: {
  //     '@': '/src',     // Dễ dàng import từ src
  //   },
  // },
  build: {
    outDir: 'dist',    // Thư mục build
    sourcemap: true,   // Tạo source map để debug
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/styles/variables.scss";`
  //     },
  //   },
  // },
})

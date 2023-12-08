// vite.config.js
import { defineConfig } from "file:///D:/PHPDev/XAMP/htdocs/hospital/node_modules/vite/dist/node/index.js";
import laravel from "file:///D:/PHPDev/XAMP/htdocs/hospital/node_modules/laravel-vite-plugin/dist/index.mjs";
import react from "file:///D:/PHPDev/XAMP/htdocs/hospital/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { nodePolyfills } from "file:///D:/PHPDev/XAMP/htdocs/hospital/node_modules/vite-plugin-node-polyfills/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.jsx",
      refresh: true
    }),
    react(),
    nodePolyfills()
  ],
  define: {
    // global: {}
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQSFBEZXZcXFxcWEFNUFxcXFxodGRvY3NcXFxcaG9zcGl0YWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFBIUERldlxcXFxYQU1QXFxcXGh0ZG9jc1xcXFxob3NwaXRhbFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUEhQRGV2L1hBTVAvaHRkb2NzL2hvc3BpdGFsL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgbGFyYXZlbCh7XG4gICAgICBpbnB1dDogJ3Jlc291cmNlcy9qcy9hcHAuanN4JyxcbiAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgfSksXG4gICAgcmVhY3QoKSxcbiAgICBub2RlUG9seWZpbGxzKCksXG4gIF0sXG4gIGRlZmluZToge1xuICAgIC8vIGdsb2JhbDoge31cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNSLFNBQVMsb0JBQW9CO0FBQ25ULE9BQU8sYUFBYTtBQUNwQixPQUFPLFdBQVc7QUFDbEIsU0FBUyxxQkFBcUI7QUFFOUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxFQUVSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

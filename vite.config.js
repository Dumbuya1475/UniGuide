import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      // Optimize JPEG images
      mozjpeg: {
        quality: 75, // Adjust quality as needed (1-100)
      },
      // Optimize PNG images
      pngquant: {
        quality: [0.6, 0.8], // Quality range for PNG images
      },
      // Optimize GIF images
      gifsicle: {
        optimizationLevel: 3, // Adjust level (1-3)
      },
      // Optimize SVG images
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: true },
        ],
      },
    }),
  ],
});

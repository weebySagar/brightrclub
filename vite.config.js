import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

const root = resolve(__dirname,"src")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    // alias:[{find:"@",replacement:root}]
    alias:{
      '@components':'/src/components',
      '@images' :'/src/assets/images',
      '@styles':'/src/assets/styles'
    }
  }
})

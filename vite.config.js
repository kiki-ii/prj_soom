import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/prj_soom/', 
  build: {
    outDir: 'dist' // 출력 폴더 명시적 지정
  }
  
})

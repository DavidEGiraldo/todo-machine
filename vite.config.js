import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      target: browserslistToEsbuild([
        ">0.2%",
        "not dead",
        "not op_mini all"
      ])
    },
    plugins: [react(), svgr()],
    server: {
      open: true,
      port: 3000,
    }
  };
});
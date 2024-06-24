import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    base: '/',
    build: {
      outDir: 'build',
      target: browserslistToEsbuild([
        ">0.2%",
        "not dead",
        "not op_mini all"
      ])
    },
    plugins: [
      react(), 
      svgr(), 
      viteTsconfigPaths()
    ],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    server: {
      open: true,
      port: 3000,
    }
  };
});
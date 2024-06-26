import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react-swc'

import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), { enforce: 'pre', ...mdx(mdxOptions) }],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
      }
    }
  }
}
)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import fs from 'fs/promises';
import s from 'semver';
import gitSemverTags from 'git-semver-tags';
import dynamicImport from 'vite-plugin-dynamic-import';
import checker from 'vite-plugin-checker';
const gitGet = () =>
  new Promise((resolve) => {
    gitSemverTags({ tagPrefix: 'v' }, (err, result) => {
      const tags = result.map((value) => s.clean(value));
      resolve(tags[0]);
    });
  });
const prepare = async () => {
  const tag = await gitGet();
  await fs.writeFile('./src/utils/.version.js', `export default "${tag}";`);
};
prepare();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dynamicImport(),
    legacy({ targets: ['defaults'] }),
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "src/**/*.{ts,tsx}"' },
    }),
  ],
  build: { outDir: 'build' },
  server: { port: 3000 },
  base: '/apps/send',
  resolve: { alias: { path: 'path-browserify' } },
});

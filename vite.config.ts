import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitetsconfigpaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({ plugins: [react(), vitetsconfigpaths()], });

import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'tnpm',
  mfsu: false,
  routePrefetch: {},
  manifest: {},
});

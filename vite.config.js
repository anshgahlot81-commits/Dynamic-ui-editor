// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
	// No @vitejs/plugin-react to avoid the preamble check
	esbuild: {
		jsx: "automatic", // use React 17+ automatic runtime
		jsxImportSource: "react", // ensures the right import source
	},
});

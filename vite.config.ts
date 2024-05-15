import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig =
  {
    sources: (filename: string) => {
      return filename.indexOf("src") !== -1;
    },
  };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // https://react.dev/learn/react-compiler#usage-with-vite
          ["babel-plugin-react-compiler", ReactCompilerConfig], // must run first!
        ]
      }
    }),
  ],
});

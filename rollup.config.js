import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";

export default {
  input: "src/index.tsx",
  output: [
    { file: "dist/index.es.js", format: "es" },
    { file: "dist/index.cjs.js", format: "cjs" },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extensions: [".css"],
      modules: true, // CSS Modules 활성화 :contentReference[oaicite:4]{index=4}
      autoModules: true, // .module.css 자동 인식 :contentReference[oaicite:5]{index=5}
      plugins: [postcssImport(), autoprefixer()], // @import 및 프리픽스 처리 :contentReference[oaicite:6]{index=6}
      extract: false, // 인라인(기본) 또는 파일로 추출 가능
    }),
  ],
};

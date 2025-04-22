// rollup.types.js
import { dts } from "rollup-plugin-dts";

export default {
  input: "dist/index.d.ts", // CSS 모듈 선언이 포함되지 않음
  output: [{ file: "dist/index.d.ts", format: "es" }],
  plugins: [dts()], // 2. dts() 플러그인 적용
  external: [], // 필요시 외부 모듈 지정
};

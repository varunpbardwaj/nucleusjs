import typescript from 'rollup-plugin-typescript2'
import { terser } from "rollup-plugin-terser";
import packages from './package.json';
import bundleSize from "rollup-plugin-bundle-size";

export default {
    input: 'src/index.tsx',
    output: [
      {
        file: packages.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false,
      }
    ],
    plugins: [
      bundleSize(),
      typescript(),
      terser({
        module: true,
        output: {
          comments: function (_node, comment) {
            var text = comment.value;
            var type = comment.type;
            if (type == "comment2") {
              return /@preserve|@license|@cc_on/i.test(text);
            }
          },
      },
      })
    ],
    external: ['react', 'react-dom']
  }
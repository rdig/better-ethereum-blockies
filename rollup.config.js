import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { browser, browserMinified } from './package.json';

const rollupConfig = [
  {
  	input: 'src/index.js',
    output: {
      file: browser,
      format: 'umd',
      name: 'betterEthereumBlockies',
      exports: 'default',
    },
  	plugins: [
  		resolve(),
  		commonjs(),
  		babel({
  			exclude: ['node_modules/**']
  		})
  	]
  },
];

if (process.env.NODE_ENV === 'production') {
  rollupConfig.push({
    input: 'src/index.js',
    output: {
      file: browserMinified,
      format: 'umd',
      name: 'betterEthereumBlockies',
      exports: 'default',
    },
    plugins: [
      resolve(),
      commonjs(),
      uglify(),
      babel({
        exclude: ['node_modules/**']
      })
    ]
  });
}

export default rollupConfig;

  // "devDependencies": {
  //   "@inquirer/prompts": "^3.2.0",
  //   "@rollup/plugin-commonjs": "^25.0.3",
  //   "@rollup/plugin-json": "^6.0.1", 
  //   "@rollup/plugin-node-resolve": "^15.1.0", 
  //   "@rollup/plugin-terser": "^0.4.3", 
  //   "@types/fs-extra": "^11.0.2",
  //   "@types/lodash": "^4.14.199",
  //   "@types/node": "^16.18.40",
  //   "axios": "^1.5.0",
  //   "chalk": "^4.1.2",
  //   "commander": "^11.0.0",
  //   "fs-extra": "^11.1.1",
  //   "lodash": "^4.17.21",
  //   "log-symbols": "^4.1.0",
  //   "ora": "5",
  //   "progress-estimator": "^0.3.1",
  //   "pure-thin-cli": "^0.1.8",
  //   "rollup": "^4.6.1",
  //   "rollup-plugin-dts": "^5.3.0", 
  //   "rollup-plugin-esbuild": "^5.0.0",
  //   "rollup-plugin-node-externals": "^5.1.2",
  //   "rollup-plugin-typescript2": "^0.36.0",
  //   "simple-git": "^3.19.1",
  //   "tslib": "^2.6.1",
  //   "typescript": "^5.2.2"
  // }


# 设置为淘宝镜像源
pnpm config set registry https://registry.npmmirror.com/

# 查询当前使用的镜像源
 pnpm get registry

# 还原为官方镜像源
 pnpm config set registry https://registry.npmjs.org/
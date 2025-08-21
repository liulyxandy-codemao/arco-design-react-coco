import config from './config.mjs';
import esbuild from 'esbuild';
import fs from 'fs';

let code;


await esbuild.build({
    entryPoints: [process.argv[2]],
    bundle: true,
    outfile: process.argv[3],
    format: 'cjs',
    allowOverwrite: true,
    external: ['react'/*, 'react-dom'*/], // 将React标记为外部依赖
});

code = fs.readFileSync(process.argv[3], 'utf8')

// 将编译后内置的 React 引用替换为 CoCo 提供的 React
code = code.replace(/require\(['"]react['"]\)/g, 'React');
// code = code.replace(/require\(['"]react-dom['"]\)/g, 'ReactDOM');

fs.writeFileSync(process.argv[3], code);

// 第二次构建进行压缩
await esbuild.build({
    entryPoints: [process.argv[3]],
    bundle: true,
    minify: true,
    outfile: process.argv[3],
    format: 'cjs',
    allowOverwrite: true,
    external: ['react'/*, 'react-dom'*/], // 保持外部依赖
});

// 添加版权信息与附加代码
code = fs.readFileSync(process.argv[3], 'utf8')
code = config.additionalCode + code
code = `/**\n * Copyright (c) ${config.license.author}\n * @license ${config.license.name} ${config.license.url}\n */\n` + code
fs.writeFileSync(process.argv[3], code)

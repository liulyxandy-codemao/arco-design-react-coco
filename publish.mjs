import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import config from './config.mjs';

const distDir = path.join(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

const components = process.argv.slice(2);

if (components.length === 0) {
    console.log('请提供至少一个组件目录名，例如：node publish.mjs Avatar');
    process.exit(0);
}

async function buildComponent(componentName) {
    const entryName = componentName.toLowerCase() + '.jsx';
    const entryPath = path.join(process.cwd(), componentName, entryName);
    
    // Check if entry exists, fallback to trying original case if needed, but strict based on user example
    if (!fs.existsSync(entryPath)) {
        console.error(`Error: Entry file not found: ${entryPath}`);
        return;
    }

    const outputFileName1 = `Arco.${componentName}.min.jsx`;
    const outputPath1 = path.join(process.cwd(), componentName, outputFileName1);
    
    const outputFileName2 = `[Arco] ${componentName}.min.jsx`;
    const outputPath2 = path.join(distDir, outputFileName2);

    console.log(`Building ${componentName}...`);

    try {
        // Step 1: Initial Bundle
        await esbuild.build({
            entryPoints: [entryPath],
            bundle: true,
            outfile: outputPath1,
            format: 'cjs',
            allowOverwrite: true,
            external: ['react'],
        });

        // Step 2: Replace React require
        let code = fs.readFileSync(outputPath1, 'utf8');
        code = code.replace(/require\(['"]react['"]\)/g, 'React');
        fs.writeFileSync(outputPath1, code);

        // Step 3: Minify
        await esbuild.build({
            entryPoints: [outputPath1],
            bundle: true,
            minify: true,
            outfile: outputPath1,
            format: 'cjs',
            allowOverwrite: true,
            external: ['react'],
        });

        // Step 4: Add headers and fixes
        code = fs.readFileSync(outputPath1, 'utf8');
        code = config.additionalCode + code;
        code = `/**\n * Copyright (c) ${config.license.author}\n * @license ${config.license.name} ${config.license.url}\n */\n` + code;
        code = code.replaceAll('.fetchPriority', '["fetchPriority"]');
        
        fs.writeFileSync(outputPath1, code);

        // Step 5: Copy to dist
        fs.copyFileSync(outputPath1, outputPath2);

        console.log(`✓ Success: ${componentName}`);
        console.log(`  -> ${outputPath1}`);
        console.log(`  -> ${outputPath2}`);

    } catch (error) {
        console.error(`✗ Failed to build ${componentName}:`, error);
    }
}

async function run() {
    for (const component of components) {
        await buildComponent(component);
    }
}

run();

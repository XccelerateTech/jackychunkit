import { unlinkSync, writeFileSync } from 'fs';
import { join } from 'path';

import packageJson, { scripts } from './package.json';

const deleteFile = fileName => unlinkSync(join(__dirname, fileName))
const writeFile = (fileName, data) => writeFileSync(join(__dirname, fileName), data)

console.log('🔄 Setting up...')

scripts.tsc = 'tsc'

writeFile('package.json', JSON.stringify(packageJson, null, 2))

deleteFile('.flowconfig')
deleteFile('App.js')
deleteFile('LICENSE')
deleteFile('README.md')
deleteFile('setup.js')

console.log(`✅ Setup completed!`)

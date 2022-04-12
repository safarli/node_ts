import fs from 'fs'
import YAML from 'yaml'
import path from 'path';

const filePath = path.join(__dirname, './config/config.json')
const file = fs.readFileSync(filePath, 'utf-8');

const parsedYaml = YAML.parse(file);

console.log(parsedYaml.configs.db);

// console.log(file);
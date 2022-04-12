"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const yaml_1 = __importDefault(require("yaml"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, './config/config.json');
const file = fs_1.default.readFileSync(filePath, 'utf-8');
const parsedYaml = yaml_1.default.parse(file);
console.log(parsedYaml.configs.db);
// console.log(file);

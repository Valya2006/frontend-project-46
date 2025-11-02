#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json'))
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(packageJson.version)
  .option('-f --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')


program.parse(process.argv);
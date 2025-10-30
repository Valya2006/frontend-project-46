#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json'))
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(packageJson.version);

program.parse(process.argv);
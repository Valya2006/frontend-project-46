#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from 'fs';
import path from "path";
import parsing from "../src/parsing.js";
import genDiff from "../src/comparers.js";

const packageJson = JSON.parse(readFileSync('./package.json'))
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(packageJson.version)
  .option('-f --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const absPath1 = path.resolve(process.cwd(), filepath1);
    const absPath2 = path.resolve(process.cwd(), filepath2);

    const objFile1 = parsing(absPath1);
    const objFile2 = parsing(absPath2);

		const result = genDiff(objFile1, objFile2)
		console.log(result)

  })


program.parse(process.argv);


/* eslint-disable no-undef */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../src/comparers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
  test('compares flat JSON files correctly', () => {
    const file1 = JSON.parse(readFile('file1.json'));
    const file2 = JSON.parse(readFile('file2.json'));
    const expected = readFile('expected_result.txt').trim();
    
    expect(genDiff(file1, file2)).toBe(expected);
  });
  
  test('works with identical files', () => {
    const file = { a: 1, b: 2 };
    const expected = `{
    a: 1
    b: 2
}`;
    expect(genDiff(file, file)).toBe(expected);
  });
  
  test('works with empty objects', () => {
    expect(genDiff({}, {})).toBe('{\n}');
  });
});
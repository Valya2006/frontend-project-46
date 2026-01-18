import fs from 'fs';
import path from 'path';

export default (filepath) => {
  const format = path.extname(filepath)
  const data = fs.readFileSync(filepath)
  if (format === '.json') {
    return JSON.parse(data)
  }
  
}
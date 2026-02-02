import _ from 'lodash'

const buildDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  
  return keys.reduce((acc, key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    
    if (_.has(data1, key) && !_.has(data2, key)) {
      return [...acc, `  - ${key}: ${value1}`];
    }
    
    if (!_.has(data1, key) && _.has(data2, key)) {
      return [...acc, `  + ${key}: ${value2}`];
    }
    
    if (value1 === value2) {
      return [...acc, `    ${key}: ${value1}`];
    }
    
    return [...acc, `  - ${key}: ${value1}`, `  + ${key}: ${value2}`];
  }, []);
};

const genDiff = (filepath1, filepath2) => {
  const diff = buildDiff(filepath1, filepath2);
  if (diff.length === 0) {
    return '{\n}';
  } 
  return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;

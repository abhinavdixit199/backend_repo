import chalk from 'chalk'
import validator from 'validator'
const res = validator.isEmail("thapathapacom");
console.log(res?chalk.inverse.green(res):chalk.inverse.red(res));


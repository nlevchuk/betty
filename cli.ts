import { readInstructions } from './instructions'
import { execute } from './provider'

const parseMainArg = (): string => {
  const args = process.argv.slice(2);
  return args.join(' ');
}

const instructions = readInstructions();
const input = parseMainArg();
await execute(input, instructions);

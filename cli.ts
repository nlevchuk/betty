import { readPrompt } from './prompt'
import { execute } from './provider'

const parseMainArg = (): string => {
  const args = process.argv.slice(2);
  return args.join(' ');
}

const prompt = readPrompt();
const input = parseMainArg();
await execute(input, prompt);

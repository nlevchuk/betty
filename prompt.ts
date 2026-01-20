import { readFileSync } from 'node:fs'

const FILENAME = '.prompt';

export function readPrompt(): string {
  return readFileSync(FILENAME, { encoding: 'utf8' });
}
import { readFileSync } from 'node:fs'

const FILENAME = '.prompt';

export function readPrompt(): string {
  const filePath = new URL(FILENAME, import.meta.url);
  return readFileSync(filePath, { encoding: 'utf8' });
}
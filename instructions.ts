import { readFileSync } from 'node:fs'

const FILENAME = '.instructions';

export function readInstructions(): string {
  const filePath = new URL(FILENAME, import.meta.url);
  return readFileSync(filePath, { encoding: 'utf8' });
}
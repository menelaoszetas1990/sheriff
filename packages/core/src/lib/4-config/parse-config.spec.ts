import { describe, expect, it } from 'vitest';
import * as ts from 'typescript';
import { parseConfig } from './parse-config';
import { assertFsPath } from '../1-fs/fs-path';

describe('parse Config', () => {
  it('should read value', () => {
    const source = 'export const a = 1';

    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.NodeNext },
    });

    const result = eval(outputText);
    expect(result).toBe(1);
  });

  it('should the sheriff config', () => {
    const tsCode = parseConfig(
      assertFsPath(__dirname + '/../test/sheriff.config.ts')
    );
    expect(Object.keys(tsCode)).toEqual(['version', 'tagging', 'depRules']);
  });
});

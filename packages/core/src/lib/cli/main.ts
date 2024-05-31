#!/usr/bin/env node

import { handleError } from './internal/handle-error';
import { init } from './init';
import { verify } from './verify';
import { list } from './list';
import { cli } from './cli';
import { exportData } from './export-data';

/** TODO
 * - Add documentation
 */

export function main(...argv: string[]) {
  const [cmd, ...args] = argv;
  switch (cmd) {
    case 'init':
      handleError(() => init());
      break;
    case 'verify':
      handleError(() => verify(args));
      break;
    case 'list':
      handleError(() => list(args));
      break;
    case 'export':
      handleError(() => exportData(...args));
      break;
    default:
      cli.log(
        '\u001b[1m' + 'Sheriff - Modularity for TypeScript Projects\x1b[0m',
      );
      cli.log('');
      cli.log('Commands:');
      cli.log(
        "  sheriff export [main.ts]: Exports the project's, along its dependencies and modules in json.",
      );
      cli.log(
        '  sheriff init [main.ts]: initializes Sheriff by adding a sheriff.config.ts.',
      );
      cli.log(
        '  sheriff list [main.ts]: lists the current modules of the project.',
      );
      cli.log(
        '  sheriff verify [main.ts]: runs the verification process for the project',
      );
      cli.log('');
      cli.log(
        '[main.ts] is optional if a sheriff.config.ts with an entryFile property is in the current path.',
      );
      cli.log(
        'For more information, visit: https://github.com/softarc-consulting/sheriff',
      );

      break;
  }
}
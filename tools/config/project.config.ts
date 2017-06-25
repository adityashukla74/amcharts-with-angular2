import { join } from 'path';

import { SeedConfig } from './seed.config';
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
    ];

    this.APP_ASSETS = [
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
    ];
  }

}

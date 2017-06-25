import { join } from 'path';
import * as slash from 'slash';
import { argv } from 'yargs';
import { BuildType, ExtendPackages, InjectableDependency } from './seed.config.interfaces';

export const BUILD_TYPES: BuildType = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod'
};

export class SeedConfig {
  PORT = argv['port'] || 5555;
  PROJECT_ROOT = join(__dirname, '../..');
  BUILD_TYPE = getBuildType();
  DEBUG = argv['debug'] || false;
  DOCS_PORT = argv['docs-port'] || 4003;
  COVERAGE_PORT = argv['coverage-port'] || 4004;
  COVERAGE_DIR = 'coverage_js';
  COVERAGE_TS_DIR = 'coverage';
  APP_BASE = argv['base'] || '/';
  NPM_BASE = slash(join('.', this.APP_BASE, 'node_modules/'));
  TYPED_COMPILE_INTERVAL = 0;
  BOOTSTRAP_DIR = argv['app'] || 'app';
  APP_CLIENT = argv['client'] || 'client';
  BOOTSTRAP_MODULE = `${this.BOOTSTRAP_DIR}/main`;
  BOOTSTRAP_PROD_MODULE = `${this.BOOTSTRAP_DIR}/` + 'main';
  NG_FACTORY_FILE = 'main-prod';
  BOOTSTRAP_FACTORY_PROD_MODULE = `${this.BOOTSTRAP_DIR}/${this.NG_FACTORY_FILE}`;
  APP_TITLE = 'Welcome to angular-seed!';
  APP_SRC = `src/${this.APP_CLIENT}`;
  APP_PROJECTNAME = 'tsconfig.json';
  ASSETS_SRC = `${this.APP_SRC}/assets`;
  CSS_SRC = `${this.APP_SRC}/css`;
  E2E_SRC = 'src/e2e';
  SCSS_SRC = `${this.APP_SRC}/scss`;
  TOOLS_DIR = 'tools';
  SEED_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'seed');
  SEED_COMPOSITE_TASKS = join(process.cwd(), this.TOOLS_DIR, 'config', 'seed.tasks.json');
  PROJECT_COMPOSITE_TASKS = join(process.cwd(), this.TOOLS_DIR, 'config', 'project.tasks.json');
  DOCS_DEST = 'docs';
  DIST_DIR = 'dist';
  DEV_DEST = `${this.DIST_DIR}/dev`;
  PROD_DEST = `${this.DIST_DIR}/prod`;
  E2E_DEST = `${this.DIST_DIR}/e2e`;
  LOCALE_DEST = `${this.DIST_DIR}/locale`;
  TMP_DIR = `${this.DIST_DIR}/tmp`;
  APP_DEST = this.BUILD_TYPE === BUILD_TYPES.DEVELOPMENT ? this.DEV_DEST : this.PROD_DEST;
  CSS_DEST = `${this.APP_DEST}/css`;
  JS_DEST = `${this.APP_DEST}/js`;
  VERSION = appVersion();
  CSS_BUNDLE_NAME = 'main';
  JS_PROD_SHIMS_BUNDLE = 'shims.js';
  JS_PROD_APP_BUNDLE = 'app.js';
  VERSION_NPM = '2.14.2';
  VERSION_NODE = '4.0.0';
  ENABLE_SCSS = ['true', '1'].indexOf(`${process.env.ENABLE_SCSS}`.toLowerCase()) !== -1 || argv['scss'] || false;
  FORCE_TSLINT_EMIT_ERROR = !!process.env.FORCE_TSLINT_EMIT_ERROR;
  EXTRA_WATCH_PATHS: string[] = [];
  NPM_DEPENDENCIES: InjectableDependency[] = [
    { src: 'core-js/client/shim.min.js', inject: 'shims' },
    { src: 'zone.js/dist/zone.js', inject: 'libs' },
    { src: 'zone.js/dist/long-stack-trace-zone.js', inject: 'libs', buildType: BUILD_TYPES.DEVELOPMENT },
    { src: 'intl/dist/Intl.min.js', inject: 'shims' },
    { src: 'systemjs/dist/system.src.js', inject: 'shims', buildType: BUILD_TYPES.DEVELOPMENT },
    { src: '.tmp/Rx.min.js', inject: 'libs', buildType: BUILD_TYPES.DEVELOPMENT },
  ];
  APP_ASSETS: InjectableDependency[] = [];
  TEMP_FILES: string[] = [
  ];
  ROLLUP_INCLUDE_DIR: string[] = ['node_modules/**'];
  ROLLUP_NAMED_EXPORTS: any[] = [];
  get DEPENDENCIES(): InjectableDependency[] {
    return normalizeDependencies(this.NPM_DEPENDENCIES.filter(filterDependency.bind(null, this.BUILD_TYPE)))
      .concat(this._APP_ASSETS.filter(filterDependency.bind(null, this.BUILD_TYPE)));
  }

  SYSTEM_CONFIG_DEV: any = {
    paths: {
      [this.BOOTSTRAP_MODULE]: `${this.APP_BASE}${this.BOOTSTRAP_MODULE}`,
      '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
      '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
      '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
      '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
      '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
      '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
      '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',

      '@angular/common/testing': 'node_modules/@angular/common/bundles/common-testing.umd.js',
      '@angular/compiler/testing': 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
      '@angular/core/testing': 'node_modules/@angular/core/bundles/core-testing.umd.js',
      '@angular/http/testing': 'node_modules/@angular/http/bundles/http-testing.umd.js',
      '@angular/platform-browser/testing':
      'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
      '@angular/platform-browser-dynamic/testing':
      'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
      '@angular/router/testing': 'node_modules/@angular/router/bundles/router-testing.umd.js',
      '@amcharts/amcharts3-angular': 'node_modules/@amcharts/amcharts3-angular/umd/index.js',
      'app/': `${this.APP_BASE}app/`,
      'dist/dev/': '/base/dist/dev/',
      '': 'node_modules/'
    },
    map: {
      '@amcharts/amcharts3-angular': 'node_modules/@amcharts/amcharts3-angular/umd/index.js',
    },
    packages: {
      [this.BOOTSTRAP_DIR]: {
        defaultExtension: 'js'
      }
    }
  };

  SYSTEM_CONFIG: any = this.SYSTEM_CONFIG_DEV;
  SYSTEM_BUILDER_CONFIG: any = {
    defaultJSExtensions: true,
    base: this.PROJECT_ROOT,
    packageConfigPaths: [
      join('node_modules', '*', 'package.json'),
      join('node_modules', '@angular', '*', 'package.json')
    ],
    paths: {
      [join(this.TMP_DIR, this.BOOTSTRAP_DIR, '*')]: `${this.TMP_DIR}/${this.BOOTSTRAP_DIR}/*`,
      '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
      '@amcharts/amcharts3-angular': 'node_modules/@amcharts/amcharts3-angular/umd/index.js',
      'dist/tmp/node_modules/*': 'dist/tmp/node_modules/*',
      'node_modules/*': 'node_modules/*',
      '*': 'node_modules/*'
    },
    packages: {
      '@angular/animations': {
        main: 'bundles/animations.umd.js',
        defaultExtension: 'js'
      },
      '@angular/common': {
        main: 'bundles/common.umd.js',
        defaultExtension: 'js'
      },
      '@angular/compiler': {
        main: 'bundles/compiler.umd.js',
        defaultExtension: 'js'
      },
      '@angular/core/testing': {
        main: 'bundles/core-testing.umd.js',
        defaultExtension: 'js'
      },
      '@angular/core': {
        main: 'bundles/core.umd.js',
        defaultExtension: 'js'
      },
      '@angular/forms': {
        main: 'bundles/forms.umd.js',
        defaultExtension: 'js'
      },
      '@angular/http': {
        main: 'bundles/http.umd.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser': {
        main: 'bundles/platform-browser.umd.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser-dynamic': {
        main: 'bundles/platform-browser-dynamic.umd.js',
        defaultExtension: 'js'
      },
      '@angular/router': {
        main: 'bundles/router.umd.js',
        defaultExtension: 'js'
      },
      '@angular/service-worker': {
        main: 'bundles/service-worker.umd.js',
        defaultExtension: 'js'
      },
      'rxjs': {
        main: 'Rx.js',
        defaultExtension: 'js'
      }
    }
  };
  BROWSER_LIST = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  COLOR_GUARD_WHITE_LIST: [string, string][] = [
  ];

  PROXY_MIDDLEWARE: any[] = [];

  PLUGIN_CONFIGS: any = {};

  /**
   * Generates the query string which should be appended to the end of the URLs in dev mode.
   */
  QUERY_STRING_GENERATOR = () => {
    return Date.now().toString();
  }

  private get _APP_ASSETS(): InjectableDependency[] {
    return [
      { src: `${this.CSS_SRC}/${this.CSS_BUNDLE_NAME}.${this.getInjectableStyleExtension()}`, inject: true, vendor: false },
      ...this.APP_ASSETS,
    ];
  }

  private get _PLUGIN_CONFIGS(): any {
    let defaults = {
      'browser-sync': {
        middleware: [require('connect-history-api-fallback')({
          index: `${this.APP_BASE}index.html`
        }), ...this.PROXY_MIDDLEWARE],
        port: this.PORT,
        startPath: this.APP_BASE,
        open: argv['b'] ? false : true,
        injectChanges: false,
        server: {
          baseDir: `${this.DIST_DIR}/empty/`,
          routes: {
            [`${this.APP_BASE}${this.APP_SRC}`]: this.APP_SRC,
            [`${this.APP_BASE}${this.APP_DEST}`]: this.APP_DEST,
            [`${this.APP_BASE}node_modules`]: 'node_modules',
            [`${this.APP_BASE.replace(/\/$/, '')}`]: this.APP_DEST
          }
        }
      },
      'environment-config': join(this.PROJECT_ROOT, this.TOOLS_DIR, 'env'),
      'gulp-sass': {
        includePaths: ['./node_modules/']
      },
      'gulp-concat-css': {
        targetFile: `${this.CSS_BUNDLE_NAME}.css`,
        options: {
          rebaseUrls: false
        }
      }
    };

    this.mergeObject(defaults, this.PLUGIN_CONFIGS);

    return defaults;
  }
  getKarmaReporters(): any {
    return {
      preprocessors: {
        'dist/**/!(*spec|index|*.module|*.routes).js': ['coverage']
      },
      reporters: ['mocha', 'coverage', 'karma-remap-istanbul'],
      coverageReporter: {
        dir: this.COVERAGE_DIR + '/',
        reporters: [
          { type: 'json', subdir: '.', file: 'coverage-final.json' },
          { type: 'html', subdir: '.' }
        ]
      },
      remapIstanbulReporter: {
        reports: {
          html: this.COVERAGE_TS_DIR
        }
      }
    };
  }

  mergeObject(target: any, source: any) {
    const deepExtend = require('deep-extend');
    deepExtend(target, source);
  }

  getPluginConfig(pluginKey: string): any {
    if (this._PLUGIN_CONFIGS[pluginKey]) {
      return this._PLUGIN_CONFIGS[pluginKey];
    }
    return null;
  }

  getInjectableStyleExtension() {
    return this.BUILD_TYPE === BUILD_TYPES.PRODUCTION && this.ENABLE_SCSS ? 'scss' : 'css';
  }

  addPackageBundles(pack: ExtendPackages) {

    if (pack.path) {
      this.SYSTEM_CONFIG_DEV.paths[pack.name] = pack.path;
      this.SYSTEM_BUILDER_CONFIG.paths[pack.name] = pack.path;
    }

    if (pack.packageMeta) {
      this.SYSTEM_CONFIG_DEV.packages[pack.name] = pack.packageMeta;
      this.SYSTEM_BUILDER_CONFIG.packages[pack.name] = pack.packageMeta;
    }
  }

  addPackagesBundles(packs: ExtendPackages[]) {
    packs.forEach((pack: ExtendPackages) => {
      this.addPackageBundles(pack);
    });
  }

  getRollupNamedExports() {
    let namedExports = {};
    this.ROLLUP_NAMED_EXPORTS.map(namedExport => {
      namedExports = Object.assign(namedExports, namedExport);
    });
    return namedExports;
  }
}

export function normalizeDependencies(deps: InjectableDependency[]) {
  deps
    .filter((d: InjectableDependency) => !/\*/.test(d.src)) // Skip globs
    .forEach((d: InjectableDependency) => d.src = require.resolve(d.src));
  return deps;
}

function filterDependency(type: string, d: InjectableDependency): boolean {
  const t = d.buildType || d.env;
  d.buildType = t;
  if (!t) {
    d.buildType = Object.keys(BUILD_TYPES).map(k => BUILD_TYPES[k]);
  }
  if (!(d.buildType instanceof Array)) {
    (<any>d).env = [d.buildType];
  }
  return d.buildType.indexOf(type) >= 0;
}

function appVersion(): number | string {
  var pkg = require('../../package.json');
  return pkg.version;
}

function getBuildType() {
  let type = (argv['build-type'] || argv['env'] || '').toLowerCase();
  let base: string[] = argv['_'];
  let prodKeyword = !!base.filter(o => o.indexOf(BUILD_TYPES.PRODUCTION) >= 0).pop();
  if ((base && prodKeyword) || type === BUILD_TYPES.PRODUCTION) {
    return BUILD_TYPES.PRODUCTION;
  } else {
    return BUILD_TYPES.DEVELOPMENT;
  }
}

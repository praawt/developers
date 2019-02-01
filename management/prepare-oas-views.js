const path = require('path'),
  fs = require('fs'),
  YAML = require('yamljs');

const targetSpecPrefix = '/apis/specs/';
const targetViewerPrefix = '/apis/';
const baseSourcePath = path.resolve(__dirname, '../node_modules/');
const baseTargetSpecPath = path.resolve(__dirname, `../book${targetSpecPrefix}`);
const baseTargetViewerPath = path.resolve(__dirname, `../book${targetViewerPrefix}`);
const list = [
  {
    name: 'wt-write-api',
    docs: 'wt-write-api/docs/swagger.yaml',
    package: 'wt-write-api/package.json',
    servers: [
      {
        description: 'Playground',
        url: 'https://playground-write-api.windingtree.com'
      }
    ]
  },
  {
    name: 'wt-read-api',
    docs: 'wt-read-api/docs/swagger.yaml',
    package: 'wt-read-api/package.json',
    servers: [
      {
        description: 'Playground',
        url: 'https://playground-api.windingtree.com'
      }
    ]
  },
  {
    name: 'wt-booking-api',
    docs: 'wt-booking-api/docs/swagger.yaml',
    package: 'wt-booking-api/package.json',
    servers: [
      {
        description: 'Mazurka test hotel',
        url: 'https://mazurka-booking.windingtree.com'
      }
    ]
  },
  {
    name: 'wt-search-api',
    docs: 'wt-search-api/docs/swagger.yaml',
    package: 'wt-search-api/package.json',
    servers: [
      {
        description: 'Playground',
        url: 'https://playground-search-api.windingtree.com'
      }
    ]
  },
  {
    name: 'wt-notification-api',
    docs: 'wt-notification-api/docs/swagger.yaml',
    package: 'wt-notification-api/package.json',
    servers: [
      {
        description: 'Playground',
        url: 'https://playground-notification-api.windingtree.com'
      }
    ]
  },
]

const swaggerTemplate = fs.readFileSync(path.resolve(__dirname, './swagger-ui.template.html'), { encoding: 'utf-8'});

for(let api of list) {
  const packageFile = JSON.parse(fs.readFileSync(`${baseSourcePath}/${api.package}`, { encoding: 'utf-8'}));
  const specFile = YAML.load(`${baseSourcePath}/${api.docs}`);
  // TODO these have to be a part of build process in the respective APIs eventually
  specFile.info.version = packageFile.version;
  specFile.servers = api.servers;


  // or use something
  fs.writeFileSync(`${baseTargetSpecPath}/${api.name}.yaml`, YAML.stringify(specFile));
  const swaggerPage = swaggerTemplate.replace('<%YAML_SPEC_URL%>', `${targetSpecPrefix}${api.name}.yaml`);
  fs.writeFileSync(`${baseTargetViewerPath}/${api.name}.html`, swaggerPage);
}




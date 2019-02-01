const path = require('path'),
  fs = require('fs'),
  YAML = require('yamljs'),
  https = require('https');

const targetSpecPrefix = '/data-model/specs';
const tempYamlLocation = path.resolve('/tmp/yamls');
const targetSpecLocation = path.resolve(__dirname, `../book/${targetSpecPrefix}`);
const targetViewerPath = path.resolve(__dirname, `../book/data-model`);

const list = [
  {
    name: 'hotels',
    // TODO change this to local FS reference once swagger docs are npm-ized
    url: 'https://raw.githubusercontent.com/windingtree/wiki/21a9414ffdab3d5756dcfb87f58f82e96baba7f8/hotel-data-swagger.yaml',
    rootModels: [
      {
        name: 'On chain data',
        ref: '#/components/schemas/HotelOnChain'
      },
      {
        name: 'HotelDataIndex',
        ref: '#/components/schemas/HotelDataIndex'
      },
      {
        name: 'HotelDescription',
        ref: '#/components/schemas/HotelDescription'
      },
      {
        name: 'RatePlans',
        ref: '#/components/schemas/RatePlans'
      },
      {
        name: 'Availability',
        ref: '#/components/schemas/Availability'
      }
    ]
  }
];

function downloadFile(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);
    });
  });
}

for(let model of list) {
  const localFilePath = `${tempYamlLocation}/${model.name}.yaml`;
  downloadFile(model.url, localFilePath, () => {
    const result = YAML.load(localFilePath);
    const definitions = {
      properties: model.rootModels.reduce((acc, curr) => {
        acc[curr.name] = {
          '$ref': curr.ref,
        };
        return acc;
      }, {}),
      components: {
        schemas: result.components.schemas,
      }
    };

    fs.writeFileSync(`${targetSpecLocation}/${model.name}.json`, JSON.stringify(definitions));
  });
}

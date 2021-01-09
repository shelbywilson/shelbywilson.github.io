const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'), // source files
  build: path.resolve(__dirname, '../dist'), // production build files
  static: path.resolve(__dirname, '../public'), // static files to copy to build folder,
  apps: {
    home: {
      output: 'index.html',
      title: 'Shelby Wilson',
    },
    'sky-above-clouds': {
      output: 'sky-above-clouds/index.html',
      title: 'Sky Above Clouds',
    },
    'cloud-town': {
      output: 'cloud-town/index.html',
      title: 'Shelby Wilson — Cloud Town',
    },
    'album-of-weaving-patterns': {
      output: 'album-of-weaving-patterns/index.html',
      title: 'Shelby Wilson',
    },
    'cloud-diary': {
      output: 'cloud-diary/index.html',
      title: 'Shelby Wilson — Cloud Diary',
    },
    set: {
      output: 'set/index.html',
      title: 'Set',
    },
    windows: {
      output: 'windows/index.html',
      title: '□ ⊞ □ ⊞',
    },
    monolith: {
      output: 'monolith/index.html',
      title: 'Monolith',
    },
    'pattern-finder': {
      output: 'pattern-finder/index.html',
      title: 'pattern finder',
    },
    rooms: {
      output: 'rooms/index.html',
      title: '|_|',
    }
  }
}

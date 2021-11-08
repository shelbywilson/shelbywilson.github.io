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
      title: '⊞ □ ⊞ □ ⊞',
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
      output: 'room-with-a-window/index.html',
      title: '⊞ □ ⊞ □ ⊞',
    },
    daffodils: {
      output: 'daffodils/index.html',
      title: 'daffodils',
    },
    gradients: {
      output: 'gradients/index.html',
      title: '\u2591 \u2591 \u2593 \u2588',
    },
    gradientsInteractive: {
      output: 'gradients/2.html',
      title: '\u2591 \u2591 \u2593 \u2588',
    },
    follow_field_1: {
      output: 'sketches/follow-field/1.html',
      title: 'follow field',
    },
    follow_field_2: {
      output: 'sketches/follow-field/2.html',
      title: 'follow field',
    },
    noise_1: {
      output: 'sketches/noise/1.html',
      title: 'noise',
    },
    noise_2: {
      output: 'sketches/noise/2.html',
      title: 'noise',
    },
    cafes: {
      output: 'cafes/index.html',
      title: 'Seattle Cafés',
    },
    vases: {
      output: 'vases/index.html',
      title: '🏺',
    },
    grey_matter: {
      output: 'grey-matter/index.html',
      title: 'Grey Matter',
      ogUrl: 'images/grey-matter/preview.png',
    },
  }
}

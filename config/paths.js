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
    skyAboveClouds: {
      output: 'sky-above-clouds/index.html',
      title: 'Sky Above Clouds',
    },
    cloudTown: {
      output: 'cloud-town/index.html',
      title: 'Shelby Wilson — Cloud Town',
    },
    albumOfWeavingPatterns: {
      output: 'album-of-weaving-patterns/index.html',
      title: 'Shelby Wilson',
    },
    cloudDiary: {
      output: 'cloud-diary/index.html',
      title: 'Shelby Wilson — Cloud Diary',
    },
    set: {
      output: 'set/index.html',
      title: 'Set',
    },
    checkers: {
      output: 'checkers/index.html',
    },
    monolith: {
      output: 'monolith/index.html',
      title: 'Monolith',
    },
    pattern_finder: {
      output: 'pattern-finder/index.html',
      title: 'pattern finder',
    }
  }
}

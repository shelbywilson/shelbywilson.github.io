const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'), // source files
  build: path.resolve(__dirname, '../dist'), // production build files
  static: path.resolve(__dirname, '../public'), // static files to copy to build folder,
  apps: {
    home: {
      output: 'index.html',
    },
    skyAboveClouds: {
      output: 'sky-above-clouds/index.html',
    },
    cloudTown: {
      output: 'cloud-town/index.html',
    },
    albumOfWeavingPatterns: {
      output: 'album-of-weaving-patterns/index.html',
    },
    cloudDiary: {
      output: 'cloud-diary/index.html',
    },
    set: {
      output: 'set/index.html',
    },
    checkers: {
      output: 'checkers/index.html',
    },
    still_life: {
      output: 'still-life/index.html',
    },
    pattern_finder: {
      output: 'pattern-finder/index.html',
    }
  }
}

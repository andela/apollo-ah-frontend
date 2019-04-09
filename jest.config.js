module.exports = {
  collectCoverage: true,
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  transform: {
    '.*': './node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js',
    '\\.(css|scss)$': '<rootDir>/assetsTransformer.js'
  }
};

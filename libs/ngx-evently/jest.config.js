module.exports = {
  name: 'ngx-evently',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-evently',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

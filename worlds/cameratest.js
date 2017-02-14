var cameratest = {
  key: 'cameratest',
  levelImage: null,
  levelImageOffset: 0,
  numCols: 48,
  tilesetName: 'grassland',
  gridData: [0x40,0x41,0x42,0x43,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x44,0x45,0x46,0x40,0x41,0x42,0x42,0x43,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x44,0x45,0x45,0x46,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x48,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x47,0x4b,0x49,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x5a,0x5a,0x5a,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x47,0x4b,0x4a,0x4b,0x49,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x5c,0x5d,0x5b,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x47,0x4b,0x4b,0x4b,0x4b,0x4b,0x49,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x5d,0x5d,0x5d,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x47,0x4b,0x4b,0x4b,0x4a,0x4b,0x4b,0x4b,0x49,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x48,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x5a,0x60,0x60,0x60,0x5a,0x40,0x40,0x40,0x40,0x40,0x47,0x4b,0x4b,0x4a,0x4b,0x4b,0x4b,0x4b,0x4a,0x4b,0x49,0x40,0x40,0x40,0x40,0x40,0x40,0x47,0x4a,0x49,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x5d,0x5d,0x5e,0x5d,0x5d,0x40,0x40,0x40,0x40,0x47,0x4b,0x4b,0x4b,0x4b,0x4b,0x4b,0x4a,0x4b,0x4b,0x4b,0x4b,0x49,0x40,0x40,0x40,0x40,0x47,0x4a,0x4b,0x4a,0x49,0x4c,0x4d,0x4d,0x4e,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x48,0x40,0x40,0x40,0x40,0x5d,0x5d,0x5f,0x5d,0x5d,0x4e,0x40,0x40,0x47,0x4b,0x4b,0x4a,0x4b,0x4b,0x4b,0x4b,0x4b,0x4b,0x4b,0x4b,0x4b,0x4b,0x49,0x40,0x40,0x4c,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f,0x4f],
};
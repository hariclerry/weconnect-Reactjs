//Mock localStorage for tests

const mockStorage = {};

const mocklocalStorage = {
  setItem: (key, val) => Object.assign(mockStorage, { [key]: val }),
  getItem: key => mockStorage[key],
  removeItem: key => mockStorage[key]
};

export default mocklocalStorage;
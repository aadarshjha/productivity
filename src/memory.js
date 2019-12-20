const Store = require('electron-store');

class Memory {
  constructor() {
    this.memory = new Store();
  }
  store(key, data) {
    this.memory.set(key, data);
  }
  get(key) {
    return this.memory.get(key);
  }
  clear() {
    this.memory.clear();
  }
  has(key) {
    return this.memory.has(key);
  }

}

let mem = new Memory();

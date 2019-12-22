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
  delete(key){
    this.memory.delete(key);
  }
  list(){
    //for debugging.
    for(let i = 1; i <= 8; ++i){
      console.log(this.memory.get(String(i))); 
    }
  }
}

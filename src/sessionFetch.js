//fetches any memory stored for the graph. and session history.

//get instance of the memory.

if(memory.has('sessionStore')){
  let array = memory.get('sessionStore');
  array.forEach(element => {
    addData(element.sessionName, element.time);
  });
}

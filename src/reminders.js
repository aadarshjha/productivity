//script for the reminders.
//interm.
const prompt = require('electron-prompt');

function edit(context) {
    prompt({
      title: 'Enter Reminder',
      label: 'Enter a reminder:',
      value: 'Enter reminder here.',
      type: 'input'
  })
  .then((r) => {
      if(r != null) {
        fillRem(r, context);
      }
  })
  .catch(console.error);
}

function fillRem(reminder, context){
  const parentContent = context.parentNode;
  const head = context.children[0];
  head.innerText = reminder;
  memory.store(parentContent.getAttribute('data-value'), reminder);
}

function getUniqueNum(){
  for(const [k,v] of map.entries()){
    if(!v){
      map.set(k, true);
      return k;
    }
  }
}

function createReminder() {
    const region = document.getElementById('drag');
  if(!limitRem()){

      memory.store('number', memory.get('number')+ 1);
      //storing as data in Dom element

    const num = getUniqueNum();
    region.innerHTML +=
      `  <div data-value = "${num}" class="button reminder hidden">
          <div class="complete">
            <div onclick = "remove(this)" class="circle">

            </div>
          </div>
          <div onclick = "edit(this)" class="text">
            <h6>Enter a reminder...</h6>
          </div>
        </div>`;
    setTimeout(function(){
      const element = document.getElementById("drag").lastChild;
      element.classList.add("show");
    }, 10);

    //storing data into memory: just the default value.
    memory.store(String(num), "Enter a reminder...");
  }
}

const button = document.getElementById('button');
button.addEventListener("click", createReminder);

function remove(context){
  //this holds context; go two up two delete context.
  const removeRem = context.parentNode.parentNode;
  //removes from stored reminder count:

  if(memory.get('number') == 1){
    //populate one reminder automatically:
    let editContext = removeRem.children[1].children[0];

    //animation.
    removeRem.style.cssText = "opacity: 0;";
    setTimeout(function(){
      editContext.innerText = "Enter a reminder...";
      removeRem.style.cssText = "opacity: 1;";
    }, 500);

    //re-set memory.
    memory.store("1", "Enter a reminder...");
  } else {
    memory.store('number', memory.get('number') - 1);

    //marks as false.
    map.set(removeRem.getAttribute('data-value'), false);

    //remove the reminder from memory;
    memory.delete(String(removeRem.getAttribute('data-value')));

    removeRem.style.cssText = "opacity: 0; height: 0em; ";

            setTimeout(function(){
              //gets index of the div content.
              let childIndex = Array.prototype.indexOf.call(removeRem.parentNode.children, removeRem);

              //clean up DOM;
              removeRem.parentNode.removeChild(removeRem.parentNode.children[childIndex]);
      }, 500);
  }
}

//max of eight reminders for now for:
function limitRem(){
  return (memory.get('number') >= 8);
}

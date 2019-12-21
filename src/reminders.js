//script for the reminders.
const memory = new Memory();
const prompt = require('electron-prompt');

function edit() {
    prompt({
      title: 'Enter Reminder',
      label: 'Enter a reminder:',
      value: 'Enter reminder here.',
      type: 'input'
  })
  .then((r) => {
      if(r === null) {
          console.log('user cancelled');
      } else {
          fillRem(r);
      }
  })
  .catch(console.error);
}

function fillRem(reminder){
  
}

function createReminder() {
    const region = document.getElementById('drag');
  if(!limitRem()){
    region.innerHTML +=
      `  <div class="button reminder hidden">
          <div class="complete">
            <div onclick = "remove(this)" class="circle">

            </div>
          </div>
          <div class="text">
            <h6>Test</h6>
          </div>
        </div>`;
    if(memory.has('number')){
      memory.store('number', memory.get('number')+ 1);
    } else {
      memory.store('number', 2);
    }
    setTimeout(function(){
      const element = document.getElementById("drag").lastChild;
      element.classList.add("show");
    }, 10);
  }
}

const button = document.getElementById('button');
button.addEventListener("click", createReminder);

function remove(context){
  //this holds context; go two up two delete context.
  const removeRem = context.parentNode.parentNode;
  //removes from stored reminder count:
  memory.store('number', memory.get('number') - 1);
  console.log(memory.get('number'));
  removeRem.style.cssText = "opacity: 0; height: 0em;";

  setTimeout(function(){
    //gets index of the div content.
    let childIndex = Array.prototype.indexOf.call(removeRem.parentNode.children, removeRem);

    //clean up DOM;
    removeRem.parentNode.removeChild(removeRem.parentNode.children[childIndex]);
  }, 500);

}



//max of eight reminders for now for:
function limitRem(){
  return (memory.get('number') > 8);
}

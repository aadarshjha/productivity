//script for the reminders.
const memory = new Memory();

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
  console.log(removeRem);
  removeRem.classList.add('hide');
}

//max of eight reminders for now for:
function limitRem(){
  return (memory.get('number') > 8);
}

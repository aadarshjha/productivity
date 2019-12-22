let map = new Map([["1", true], ["2", false], ["3", false], ["4", false] , ["5", false], ["6", false], ["7", false], ["8", false]]);

const memory = new Memory();

//load avalible context from memeory:
if(memory.get('number') > 1){
  //updating map and DOM.
  for(let i = 1; i <= 8; i = i + 1){
    if(memory.get(String(i)) != undefined){
      //update dom; map;
      map.set(String(i),true);
      //creating reminder.
    }
  }
  //create the reminders without altering the memory already created.
  const region = document.getElementById('drag');

  for(let i = 1; i <= 8; i = i + 1){
    if(map.get(String(i))){

      //create the reminder
      region.innerHTML +=
        `  <div data-value = "${i}" class="button reminder ">
            <div class="complete">
              <div onclick = "remove(this)" class="circle">

              </div>
            </div>
            <div onclick = "edit(this)" class="text">
              <h6>${memory.get(String(i))}</h6>
            </div>
          </div>`;

    }
  }
} else {
  memory.store('number', 1);
  const region = document.getElementById('drag');
  region.innerHTML +=
    `            <div data-value = "1" class="button reminder">
            <div class="complete">
              <div onclick = "remove(this)" class="circle">

              </div>
            </div>
            <div onclick = "edit(this)" class="text">
              <h6>Enter a reminder...</h6>
            </div>
          </div>`;
  memory.store("1", "Enter a reminder...");
}

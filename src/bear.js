//script that loads bear window / content.

//weird bug - making sure no text or space within the box.


function loadBearWindow(event){
  const textElement = document.getElementById('textBox').value;
  require('electron').shell.openExternal(`bear://x-callback-url/create?title=Insert%20Title%20Here&open_note=yes&new_window=yes&show_window=yes&edit=yes&timestamp=yes&text=${textElement}`);
}

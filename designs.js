// Select color input
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('click', function(event) {
          console.log(event.target.value);
});

// Select size input
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {
  event.preventDefault();
  let width = document.getElementById('inputWeight').value;
  let height = document.getElementById('inputHeight').value;
  makeGrid(width, height);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(width, height) {
  const table = document.getElementById('pixelCanvas');

  while (table.hasChildNodes()) {
    table.removeChild(table.lastChild);
  }

  for (let h = 0; height > h; h++) {
    const newRow = document.createElement('tr');
    for (let w = 0; width > w; w++) {
      const newColumnElement = document.createElement('td');
      newColumnElement.id = 'tableElement' + h + w;

      newColumnElement.addEventListener('click', function(event) {
        event.preventDefault();
        let color = document.getElementById('colorPicker').value;
        event.target.style.backgroundColor = color;
        console.log(event.target.id);
      });

      newRow.appendChild(newColumnElement);
    }

    table.appendChild(newRow);
  }
}

const container = document.getElementById('background-container');

container.addEventListener('click', function (e) {
  // Prevent adding if there's already an input active
  if (document.querySelector('.temp-input')) return;

  const x = e.offsetX;
  const y = e.offsetY;

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'temp-input';
  input.style.position = 'absolute';
  input.style.top = y + 'px';
  input.style.left = x + 'px';
  input.style.zIndex = 10;
  input.style.fontSize = '14px';
  input.style.padding = '2px';

  container.appendChild(input);
  input.focus();

  // When input loses focus or enter is pressed
  input.addEventListener('blur', () => finalizeLabel(input, x, y));
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      finalizeLabel(input, x, y);
    }
  });
});

function finalizeLabel(input, x, y) {
  const text = input.value.trim();
  input.remove();
  if (text !== '') {
    addText(text, x, y);
  }
}

function addText(text, x, y) {
  const label = document.createElement('div');
  label.className = 'label';
  label.style.top = y + 'px';
  label.style.left = x + 'px';
  label.innerText = text;
  container.appendChild(label);
}

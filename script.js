function addText(text, x, y) {
  const label = document.createElement('div');
  label.className = 'label';
  label.style.top = y + 'px';
  label.style.left = x + 'px';
  label.innerText = text;
  document.getElementById('background-container').appendChild(label);
}

// Example of dynamically added text
addText("Dynamic Label", 300, 400);

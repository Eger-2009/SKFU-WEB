function increaseFontSize() {
  const body = document.getElementById('result');
  const currentSize = parseFloat(getComputedStyle(body).fontSize);
  body.style.fontSize = (currentSize + 2) + 'px';
}

const button = document.getElementById('calc_plus');
button.addEventListener('click', increaseFontSize);

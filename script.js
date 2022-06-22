const img = document.querySelector('img');

const zoomImg = e => {
  // cursor position
  const x = e.clientX;
  const y = e.clientY;

  // image position
  const offSetX = img.offsetLeft;
  const offSetY = img.offsetTop;

  // position of cursor iside image
  const newX = (offSetX - x) * -1;
  const newY = (offSetY - y) * -1;

  img.style.transformOrigin = `${newX}px ${newY}px`

  img.classList.add('zoom-img');
}

const resetImg = () => {
  img.classList.remove('zoom-img')
}

img.addEventListener('mousemove', zoomImg);
img.addEventListener('mouseout', resetImg);
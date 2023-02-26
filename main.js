const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', e => {
  /* MouseEvent.clientX && MouseEvent.clientY -> pozycja myszki wzgledem osi X i Y */
  const x = e.clientX + 1;
  const y = e.clientY + 1;
  h1.innerHTML = `${x}, ${y}`;
  /* window.innerWidth && window.innerHeigth -> w zaleznosci od okna przegladarki do 255(zeby bylo plynnie) */
  const width = window.innerWidth
  const height = window.innerHeight

  /* implementacja kolorow */
  const red = x / width * 100;
  const green = y / height * 100;
  const blue = ((x / width * 100) + (y / height * 100)) / 2;
  document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`
})
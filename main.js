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
  const r = x / width * 100; //red
  const g = y / height * 100; //green
  const b = ((x / width * 100) + (y / height * 100)) / 2; //blue
  document.body.style.backgroundColor = `rgb(${r}%,${g}%,${b}%)`
})
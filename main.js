const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', e => {
  /* MouseEvent.clientX && MouseEvent.clientY -> pozycja myszki wzgledem osi X i Y */
  const x = e.clientX
  const y = e.clientY
  h1.innerHTML = `${x}, ${y}`;
  /* window.innerWidth && window.innerHeigth -> w zaleznosci od okna przegladarki do 255(zeby bylo plynnie) */
  const width = window.innerWidth
  const height = window.innerHeight
  // console.log(Math.floor(x / width * 255))
  // console.log(Math.floor(y / height * 255))

  /* implementacja kolorow */
  const red = Math.floor(x / width * 255)
  const green = Math.floor(y / width * 255);
  const blue = Math.floor((x / width * 255) / Math.floor(y / width * 255))
  document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`
})